import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

const CHAR_REGEX = /[\p{L}\p{N}]/u;

function collectWordsFromNode(node, words = []) {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return words;
  }

  if (typeof node === 'string' || typeof node === 'number') {
    const tokens = String(node).split(/(\s+)/);
    tokens.forEach((token) => {
      if (token && !/^\s+$/.test(token)) {
        const chars = Array.from(token);
        const rearrangeableIndices = [];
        chars.forEach((ch, idx) => {
          if (CHAR_REGEX.test(ch)) {
            rearrangeableIndices.push(idx);
          }
        });
        words.push({
          original: token,
          chars,
          rearrangeableIndices,
        });
      }
    });
    return words;
  }

  if (Array.isArray(node)) {
    node.forEach((child) => collectWordsFromNode(child, words));
    return words;
  }

  if (React.isValidElement(node)) {
    collectWordsFromNode(node.props.children, words);
  }

  return words;
}

function buildScrambledWords(wordsMeta, progress, totalChars) {
  let globalCharCursor = 0;

  return wordsMeta.map((wordMeta) => {
    const { chars, rearrangeableIndices } = wordMeta;
    if (rearrangeableIndices.length <= 1) {
      globalCharCursor += rearrangeableIndices.length;
      return chars.join('');
    }

    const resultChars = [...chars];
    const unrevealedPositions = [];
    const unrevealedOriginalChars = [];

    rearrangeableIndices.forEach((charPosInWord) => {
      const globalIdx = globalCharCursor++;
      const revealThreshold =
        totalChars <= 1
          ? 0.85
          : 0.22 + (globalIdx / (totalChars - 1)) * 0.74;

      if (progress < revealThreshold) {
        unrevealedPositions.push(charPosInWord);
        unrevealedOriginalChars.push(chars[charPosInWord]);
      }
    });

    if (unrevealedPositions.length === 0) {
      return resultChars.join('');
    }

    if (unrevealedPositions.length >= 2) {
      // Pure permutation of the word's own unrevealed characters (preserves exact word width)
      const pool = [...unrevealedOriginalChars];
      for (let i = pool.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }

      // Avoid fixed points so every unrevealed letter moves
      for (let i = 0; i < pool.length; i += 1) {
        if (pool[i] === unrevealedOriginalChars[i]) {
          const swapIdx = (i + 1) % pool.length;
          [pool[i], pool[swapIdx]] = [pool[swapIdx], pool[i]];
        }
      }

      for (let i = 0; i < unrevealedPositions.length; i += 1) {
        resultChars[unrevealedPositions[i]] = pool[i];
      }
    } else {
      // Only 1 unrevealed letter left in this word: swap it with the previous letter in the same word
      // so the word still contains the exact same letters and exact same pixel width
      const lastPos = unrevealedPositions[0];
      const prevRearrangeablePos =
        rearrangeableIndices[rearrangeableIndices.length - 2];
      if (prevRearrangeablePos !== undefined) {
        const temp = resultChars[lastPos];
        resultChars[lastPos] = resultChars[prevRearrangeablePos];
        resultChars[prevRearrangeablePos] = temp;
      }
    }

    return resultChars.join('');
  });
}

export default function ScrambleText({
  as: Component = 'span',
  children,
  duration = 700,
  tickInterval = 35,
  triggerOnView = true,
  triggerOnHover = true,
  className = '',
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const waitTimerRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const lastTriggerTimeRef = useRef(0);

  const wordsMeta = useMemo(() => collectWordsFromNode(children, []), [children]);

  const totalChars = useMemo(
    () => wordsMeta.reduce((sum, w) => sum + w.rearrangeableIndices.length, 0),
    [wordsMeta]
  );

  const [scrambledWords, setScrambledWords] = useState(null);

  const stopAnimation = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (waitTimerRef.current) {
      clearTimeout(waitTimerRef.current);
      waitTimerRef.current = null;
    }
    isAnimatingRef.current = false;
    setScrambledWords(null);
  }, []);

  const startScramble = useCallback(() => {
    if (reduceMotion || totalChars === 0) return;

    const now = performance.now();
    if (isAnimatingRef.current && now - lastTriggerTimeRef.current < 220) {
      return;
    }

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    isAnimatingRef.current = true;
    lastTriggerTimeRef.current = now;
    const startTime = now;
    let lastTick = 0;

    setScrambledWords(buildScrambledWords(wordsMeta, 0, totalChars));

    const step = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress >= 1) {
        isAnimatingRef.current = false;
        rafRef.current = null;
        setScrambledWords(null);
        return;
      }

      if (timestamp - lastTick >= tickInterval) {
        lastTick = timestamp;
        setScrambledWords(buildScrambledWords(wordsMeta, progress, totalChars));
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, [reduceMotion, totalChars, wordsMeta, duration, tickInterval]);

  useEffect(() => {
    if (!triggerOnView || reduceMotion) return undefined;
    const element = containerRef.current;
    if (!element) return undefined;

    const triggerWhenReady = () => {
      let attempts = 0;
      const checkReady = () => {
        attempts += 1;
        if (document.body.style.overflow === 'hidden' && attempts < 40) {
          waitTimerRef.current = setTimeout(checkReady, 60);
        } else {
          waitTimerRef.current = setTimeout(() => {
            startScramble();
          }, attempts > 1 ? 150 : 40);
        }
      };
      checkReady();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerWhenReady();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      stopAnimation();
    };
  }, [triggerOnView, reduceMotion, startScramble, stopAnimation]);

  const handleMouseEnter = useCallback(
    (event) => {
      if (triggerOnHover) {
        startScramble();
      }
      if (rest.onMouseEnter) {
        rest.onMouseEnter(event);
      }
    },
    [triggerOnHover, startScramble, rest]
  );

  let wordCursor = 0;
  const isAnimating = scrambledWords !== null;

  const renderNodes = (node, keyPrefix = 'n') => {
    if (node === null || node === undefined || typeof node === 'boolean') {
      return node;
    }

    if (typeof node === 'string' || typeof node === 'number') {
      const tokens = String(node).split(/(\s+)/);
      return tokens
        .map((token) => {
          if (!token) return '';
          if (/^\s+$/.test(token)) {
            return token;
          }
          const currentWordIdx = wordCursor++;
          return isAnimating && scrambledWords[currentWordIdx] !== undefined
            ? scrambledWords[currentWordIdx]
            : token;
        })
        .join('');
    }

    if (Array.isArray(node)) {
      return node.map((child, idx) => renderNodes(child, `${keyPrefix}-${idx}`));
    }

    if (React.isValidElement(node)) {
      if (!node.props || node.props.children === undefined) {
        return node;
      }
      return React.cloneElement(
        node,
        { key: node.key ?? keyPrefix },
        renderNodes(node.props.children, `${keyPrefix}-c`)
      );
    }

    return node;
  };

  return (
    <Component
      ref={containerRef}
      className={className}
      {...rest}
      onMouseEnter={handleMouseEnter}
    >
      {isAnimating ? renderNodes(children) : children}
    </Component>
  );
}
