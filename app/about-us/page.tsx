"use client";

import { useEffect, useRef, useState } from "react";
import SiteNav from "@/components/site-nav";

/** Animated counter — counts up on scroll, respects reduced motion */
const AnimatedNumber = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(target);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          setAnimated(true);
          setCount(0);
          const duration = 1400;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {animated ? count : target}
      {suffix}
    </span>
  );
};

/** A single stat in the stats bar */
const Stat = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) => (
  <div className="flex flex-col items-center px-6 sm:px-10">
    <span className="font-black text-5xl sm:text-6xl md:text-7xl tabular-nums tracking-tight text-[#171717]">
      <AnimatedNumber target={value} suffix={suffix} />
    </span>
    <span className="mt-2 text-sm font-medium tracking-widest uppercase text-[#737373]">
      {label}
    </span>
  </div>
);

/** Project card */
const ProjectCard = ({
  name,
  description,
  npm,
  href,
  accent,
  items,
}: {
  name: string;
  description: string;
  npm: string;
  href: string;
  accent: string;
  items: string[];
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block relative rounded-2xl border border-[#e5e5e5] bg-[#fcfcf9] p-6 sm:p-8 motion-safe:transition-all motion-safe:duration-300 hover:border-[#d4d4d4] hover:shadow-lg motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
  >
    <div
      className="w-3 h-3 rounded-full mb-5"
      style={{ backgroundColor: accent }}
    />
    <h3 className="text-2xl font-bold text-[#171717]">{name}</h3>
    <p className="mt-2 text-sm text-[#737373] leading-relaxed max-w-xs">
      {description}
    </p>
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex items-center rounded-full bg-[#f5f5f5] px-3 py-1 text-xs font-medium text-[#737373]"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="mt-4">
      <code className="text-xs text-[#737373] bg-[#f5f5f5] rounded px-2 py-1 select-all">
        {npm}
      </code>
    </div>
  </a>
);

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-[#fcfcf9] text-[#171717] selection:bg-[#ea580c] selection:text-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16 sm:pt-36 sm:pb-24 md:pt-48 md:pb-32">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#ea580c] mb-6">
          Open Source Laboratory
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
          aiszlab
        </h1>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-[#737373] leading-relaxed max-w-2xl">
          一个普通程序员的开源实验室，
          <br className="hidden sm:block" />
          用代码构建一些「奇奇怪怪」的东西。
        </p>
      </section>

      {/* ─── Stats Bar ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <section
        className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
        aria-label="实验室数据"
      >
        <div className="flex flex-wrap justify-center gap-y-10 divide-x divide-[#e5e5e5]">
          <Stat value={60} suffix="+" label="Components" />
          <Stat value={40} suffix="+" label="Hooks" />
          <Stat value={40} suffix="+" label="Utilities" />
          <Stat value={2} label="Packages" />
        </div>
      </section>

      {/* ─── Projects ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          正在构建
        </h2>
        <p className="mt-3 text-[#737373] max-w-xl leading-relaxed">
          这些是实验室里正在打磨的两个开源项目，每一个都源于真实开发中的需求。
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <ProjectCard
            name="musae"
            description="一套精致的 React 组件库，包含 60+ 个组件，覆盖布局、输入、数据展示、反馈等场景。"
            npm="pnpm add musae"
            href="https://github.com/murukal/musae"
            accent="#ea580c"
            items={[
              "60+ Components",
              "Tree Shaking",
              "Dark Mode",
              "TypeScript",
            ]}
          />
          <ProjectCard
            name="@aiszlab/relax"
            description="React Hooks 与工具函数集合，提供 40+ 个 Hook 和 40+ 个实用工具函数。"
            npm="pnpm add @aiszlab/relax"
            href="https://github.com/murukal/relax"
            accent="#0891b2"
            items={[
              "40+ Hooks",
              "40+ Utils",
              "Tree Shaking",
              "TypeScript",
            ]}
          />
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          实验室信条
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {[
            {
              title: "源于需求",
              body: "每一个 API 都来自真实开发场景。不为了存在而存在，只解决真正遇到的问题。",
            },
            {
              title: "精致到细节",
              body: "从类型推断到边界情况处理，从 Tree Shaking 到包体积优化 —— 在意每一处细节。",
            },
            {
              title: "开放与透明",
              body: "代码在 GitHub 完全开源。没有商业化目标，只有对技术本身的热爱。",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-lg font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#737373] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Maker ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          实验室里的那个人
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
          {/* Avatar placeholder — a monogram */}
          <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#171717] flex items-center justify-center text-white text-2xl sm:text-3xl font-black select-none">
            M
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#171717]">murukal</h3>
            <p className="mt-3 text-[#737373] leading-relaxed max-w-lg">
              一个热爱代码的普通程序员。喜欢在深夜的屏幕前敲下一行行代码，希望自己写的东西能让别人的开发体验好一点。
            </p>
            <p className="mt-3 text-[#737373] leading-relaxed max-w-lg">
              aiszlab
              不是一个公司，不是一个团队，只是一个程序员的个人实验室。这里没有商业计划，只有对技术的执着和「这个东西应该存在」的冲动。
            </p>
            <a
              href="https://github.com/murukal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#171717] hover:text-[#ea580c] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub @murukal
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <footer className="mx-auto max-w-5xl px-6 py-16 sm:py-24 text-center">
        <p className="text-2xl sm:text-3xl font-black tracking-tight text-[#171717]">
          一起构建更好的工具
        </p>
        <p className="mt-4 text-[#737373] leading-relaxed max-w-md mx-auto">
          欢迎提交 Issue、PR，或者只是来看看代码。每一个 Star
          都是对实验室最好的鼓励。
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/murukal/musae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2d2d2d] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            musae
          </a>
          <a
            href="https://github.com/murukal/relax"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-6 py-3 text-sm font-semibold text-[#171717] hover:bg-[#e5e5e5] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            relax
          </a>
        </div>
      </footer>
    </main>
  );
}
