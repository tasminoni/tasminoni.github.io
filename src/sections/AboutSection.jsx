import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="scene-section relative border-b border-white/10 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-mono text-xs tracking-widest text-crimson mb-10">[ 02 / 09 ] // ABOUT ME</div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div data-scene-reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none mb-8">ENGINEERING WITH <span className="text-crimson">PURPOSE.</span></h2>
            <p className="text-zinc-200 text-lg leading-relaxed mb-5">{personalInfo.bio}</p>
            <p className="text-zinc-400 leading-relaxed">Based in Dhaka, I work across interfaces, APIs, and business applications. I value clear architecture, reliable delivery, and software that solves real problems for the people using it.</p>
            <a href="#projects" className="inline-flex mt-8 font-mono text-sm font-bold text-crimson hover:text-paper transition-colors">EXPLORE SELECTED WORK ↗</a>
          </div>
          <div data-scene-reveal className="about-glass p-7 sm:p-10">
            <div className="font-mono text-xs text-crimson tracking-widest mb-7">// AT A GLANCE</div>
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-black/30 p-4 sm:p-5">
                  <div className="font-display text-2xl sm:text-3xl font-black text-paper mb-2">{stat.value}</div>
                  <div className="font-mono text-[10px] text-crimson tracking-wider mb-1">{stat.label}</div>
                  <div className="font-mono text-[10px] text-zinc-400">{stat.detail}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-6 pt-5 font-mono text-xs text-zinc-300">DHAKA, BANGLADESH · OPEN TO COLLABORATION</div>
          </div>
        </div>
      </div>
    </section>
  );
}
