"use client";

import SiteNav from "@/components/site-nav";

/** Internal doc link card — a compact project card pointing to docs */
const DocCard = ({
  name,
  description,
  href,
  accent,
}: {
  name: string;
  description: string;
  href: string;
  accent: string;
}) => (
  <a
    href={href}
    className="group block relative rounded-2xl border border-[#e5e5e5] bg-[#fcfcf9] p-6 sm:p-8 motion-safe:transition-all motion-safe:duration-300 hover:border-[#d4d4d4] hover:shadow-lg motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
  >
    <div
      className="w-3 h-3 rounded-full mb-5"
      style={{ backgroundColor: accent }}
    />
    <h3 className="text-2xl font-bold text-[#171717] group-hover:text-[#ea580c] transition-colors">
      {name}
    </h3>
    <p className="mt-2 text-sm text-[#737373] leading-relaxed max-w-xs">
      {description}
    </p>
    <span className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-[#171717]">
      浏览文档
      <svg
        className="w-4 h-4 motion-safe:group-hover:translate-x-0.5 motion-safe:transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </span>
  </a>
);

/** Install command pill */
const InstallPill = ({
  command,
  accent,
}: {
  command: string;
  accent: string;
}) => (
  <button
    type="button"
    onClick={async () => {
      await navigator.clipboard.writeText(command);
    }}
    className="inline-flex items-center gap-3 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] pl-5 pr-4 py-3 text-sm font-mono text-[#171717] hover:border-[#d4d4d4] hover:bg-[#ebebeb] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ea580c] cursor-copy group/install"
    aria-label={`复制安装命令: ${command}`}
  >
    <span className="text-[#737373] select-none">$</span>
    <span className="select-all">{command}</span>
    <span
      className="w-2 h-2 rounded-full shrink-0 motion-safe:group-hover/install:scale-125 motion-safe:transition-transform"
      style={{ backgroundColor: accent }}
    />
  </button>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcf9] text-[#171717] selection:bg-[#ea580c] selection:text-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-28">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none max-w-3xl">
          Build <span className="text-[#ea580c]">optimized</span> websites
          <br />
          quickly, focus on your{" "}
          <span className="text-[#0891b2]">logic</span>
        </h1>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#737373] leading-relaxed max-w-xl">
          一套精致的 React 组件库与 Hooks 工具集，
          <br className="hidden sm:block" />
          让你专注业务逻辑，而不是重复造轮子。
        </p>

        {/* ─── Terminal Snippet ─── */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-[#e5e5e5] bg-[#f5f5f5] overflow-hidden max-w-2xl">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#e5e5e5]">
            <span className="w-3 h-3 rounded-full bg-[#ea580c]" />
            <span className="w-3 h-3 rounded-full bg-[#f7b731]" />
            <span className="w-3 h-3 rounded-full bg-[#0891b2]" />
            <span className="ml-2 text-xs font-medium text-[#737373]">
              App.tsx
            </span>
          </div>
          <pre className="p-5 sm:p-6 text-sm leading-relaxed overflow-x-auto">
            <code className="text-[#171717]">
              <span className="text-[#0891b2]">import</span>{" "}
              {"{ Button }"} <span className="text-[#0891b2]">from</span>{" "}
              <span className="text-[#737373]">'musae'</span>
              {"\n"}
              <span className="text-[#0891b2]">import</span>{" "}
              {"{ useRequest }"} <span className="text-[#0891b2]">from</span>{" "}
              <span className="text-[#737373]">'@aiszlab/relax'</span>
              {"\n\n"}
              <span className="text-[#0891b2]">const</span>{" "}
              {"{ data }"} ={" "}
              <span className="text-[#737373]">useRequest</span>(
              <span className="text-[#737373]">'/api/user'</span>)
              {"\n\n"}
              <span className="text-[#0891b2]">return</span> (
              {"\n  "}
              {"<"}<span className="text-[#737373]">Button</span>{" "}
              <span className="text-[#737373]">loading</span>={"{"}
              <span className="text-[#737373]">!data</span>
              {"}"} {">"}{"\n    "}{"{"}data?.name ??{" "}
              <span className="text-[#737373]">'Loading...'</span>{"}"}
              {"\n  "}
              {"</"}<span className="text-[#737373]">Button</span>{">"}
              {"\n"})
            </code>
          </pre>
        </div>

        {/* ─── Install pills ─── */}
        <div className="mt-8 flex flex-wrap gap-3">
          <InstallPill command="pnpm add musae" accent="#ea580c" />
          <InstallPill command="pnpm add @aiszlab/relax" accent="#0891b2" />
        </div>
      </section>

      {/* ─── Projects ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          探索项目
        </h2>
        <p className="mt-3 text-[#737373] max-w-xl leading-relaxed">
          两个精心打磨的开源项目，覆盖 UI 组件到业务逻辑的完整链路。
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <DocCard
            name="musae"
            description="60+ 个 React 组件，布局、输入、数据展示、反馈 — 覆盖日常开发所有场景，TypeScript 原生支持。"
            href="/components"
            accent="#ea580c"
          />
          <DocCard
            name="@aiszlab/relax"
            description="40+ 个 Hooks 与 40+ 个工具函数。网络请求、状态管理、DOM 交互 — 一切皆可复用。"
            href="/hooks"
            accent="#0891b2"
          />
        </div>
      </section>

      {/* ─── Features ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          为什么选择 aiszlab
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {[
            {
              title: "开箱即用",
              body: "Tree Shaking 友好，按需引入零配置。每个组件和 Hook 都有完整的类型推断。",
            },
            {
              title: "精致打磨",
              body: "从边界情况到交互动效，从无障碍支持到响应式适配 — 在意每一个像素。",
            },
            {
              title: "完全开源",
              body: "MIT 协议，代码在 GitHub 完全开放。没有付费墙，没有企业版，只有好用的代码。",
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

      {/* ─── Footer ─── */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-[#e5e5e5]" />
      </div>
      <footer className="mx-auto max-w-5xl px-6 py-16 sm:py-24 text-center">
        <p className="text-2xl sm:text-3xl font-black tracking-tight text-[#171717]">
          开始构建吧
        </p>
        <p className="mt-4 text-[#737373] leading-relaxed max-w-md mx-auto">
          从组件库或 Hooks 文档开始，几分钟内就能上手。
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/components"
            className="inline-flex items-center gap-2 rounded-full bg-[#ea580c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d94d0a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
          >
            浏览组件
          </a>
          <a
            href="/hooks"
            className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-6 py-3 text-sm font-semibold text-[#171717] hover:bg-[#e5e5e5] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
          >
            探索 Hooks
          </a>
        </div>
        <p className="mt-16 text-xs text-[#737373]">
          © {new Date().getFullYear()} aiszlab. Built with musae.
        </p>
      </footer>
    </main>
  );
}
