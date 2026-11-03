const COLUMNS = 6;
const ROWS = 4;
const noise = (n) => Math.sin(n * 127.1 + 311.7) * 0.5;

// Every adjoining face references the same vertices, keeping the paper intact.
export const paperVertices = Array.from({ length: (COLUMNS + 1) * (ROWS + 1) }, (_, i) => {
  const col = i % (COLUMNS + 1);
  const row = Math.floor(i / (COLUMNS + 1));
  return {
    u: (col + (col > 0 && col < COLUMNS ? noise(i) * 0.48 : 0)) / COLUMNS,
    v: (row + (row > 0 && row < ROWS ? noise(i + 19) * 0.48 : 0)) / ROWS,
    wrinkle: noise(i + 37),
  };
});

export const paperFaces = [];
for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLUMNS; col++) {
    const a = row * (COLUMNS + 1) + col;
    const b = a + 1;
    const c = a + COLUMNS + 1;
    const d = c + 1;
    paperFaces.push(...((row + col) % 2 ? [[a, b, c], [b, d, c]] : [[a, b, d], [a, d, c]]));
  }
}

// Cache viewport-dependent coordinates and trigonometry once per intro.
// Reuse point storage to avoid allocating arrays on every animation frame.
export function createPaperDeformer(width, height) {
  const radius = Math.min(84, width * 0.19);
  const portraitGather = Math.max(0, 1 - width / height) * 0.18;
  const vertices = paperVertices.map(({ u, v, wrinkle }) => {
    const longitude = (u - 0.5) * Math.PI * 1.92;
    const latitude = (v - 0.5) * Math.PI * 0.94;
    const r = radius * (1 + wrinkle * 0.34);
    const edge = Math.max(Math.abs(u - 0.5), Math.abs(v - 0.5)) * 2;
    return [
      (u - 0.5) * width, (v - 0.5) * height,
      Math.sin(longitude) * Math.cos(latitude) * r,
      Math.sin(latitude) * r,
      Math.cos(longitude) * Math.cos(latitude) * r,
      Math.sin(u * Math.PI * 5 + v * 4) * 28 + wrinkle * 56,
      edge * 0.09,
    ];
  });
  const points = vertices.map(() => [0, 0, 0]);
  return (progress) => {
    const wave = Math.sin(progress * Math.PI);
    for (let i = 0; i < vertices.length; i++) {
      const v = vertices[i];
      const p = progress + wave * v[6];
      const py = p + Math.sin(p * Math.PI) * portraitGather;
      const point = points[i];
      point[0] = width / 2 + v[0] * (1 - p) + v[2] * p;
      point[1] = height / 2 + v[1] * (1 - py) + v[3] * py;
      point[2] = v[4] * p + Math.sin(p * Math.PI) * v[5];
    }
    return points;
  };
}

export function faceTransform(points, indices) {
  const a = points[indices[0]], b = points[indices[1]], c = points[indices[2]];
  const bx = b[0] - a[0], by = b[1] - a[1], bz = b[2] - a[2];
  const cx = c[0] - a[0], cy = c[1] - a[1], cz = c[2] - a[2];
  const nx = by * cz - bz * cy, ny = bz * cx - bx * cz, nz = bx * cy - by * cx;
  const length = Math.hypot(nx, ny, nz) || 1;
  // Expand the painted triangle slightly about its centroid. Unlike extending
  // clip-path outside the box, this also covers seams along the two straight edges.
  const bleed = 1 + Math.min(0.025, 0.65 / Math.max(1, Math.min(Math.hypot(bx, by, bz), Math.hypot(cx, cy, cz))));
  const offset = (bleed - 1) / 3;
  // Fixed upper-left softbox; both sides of the paper receive ambient light.
  const light = Math.abs((nx * -0.35 + ny * -0.45 + nz * 0.82) / length);
  return {
    // The third column must follow the face normal: a fixed Z basis becomes
    // singular when a triangle turns edge-on (particularly visible on mobile).
    matrix: `matrix3d(${bx * bleed / 100},${by * bleed / 100},${bz * bleed / 100},0,${cx * bleed / 100},${cy * bleed / 100},${cz * bleed / 100},0,${nx / length},${ny / length},${nz / length},0,${a[0] - (bx + cx) * offset},${a[1] - (by + cy) * offset},${a[2] - (bz + cz) * offset},1)`,
    shade: 0.08 + (1 - light) * 0.42,
  };
}
