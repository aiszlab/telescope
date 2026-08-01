"use client";

import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "组件", href: "/components" },
  { label: "Hooks", href: "/hooks" },
  { label: "工具", href: "/utils" },
  { label: "About", href: "/about-us" },
] as const;

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      className="mx-auto max-w-5xl px-6 pt-8 pb-4 flex items-center justify-between"
      aria-label="站点导航"
    >
      <a
        href="/"
        className="text-lg font-black tracking-tight text-[#171717] hover:text-[#ea580c] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea580c]"
      >
        aiszlab
      </a>
      <ul className="flex items-center gap-1 sm:gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`inline-flex px-3 py-2 text-sm font-medium rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ea580c] ${
                  isActive
                    ? "text-[#171717] bg-[#f5f5f5]"
                    : "text-[#737373] hover:text-[#171717] hover:bg-[#f5f5f5]"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
