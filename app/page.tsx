"use client";

import { Button, useTheme } from "musae";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import dayjs from "dayjs";
import Link from "next/link";

const CURRENT_AT = dayjs();

const App = () => {
  const router = useRouter();

  const start = useCallback(() => {
    router.push("/components");
  }, [router]);

  const theme = useTheme();

  return (
    <section
      style={{ minHeight: "calc(100vh - 96px)" }}
      className="flex flex-col"
    >
      <main className="flex-1 flex flex-col items-center content-center flex-nowrap">
        <div className="p-32">
          <h1 className="text-5xl font-bold">
            <span>🎉&nbsp;</span>
            <span className="bg-clip-text text-transparent from-green-700 to-cyan-200 bg-gradient-to-br ">
              musae is out!️
            </span>
            <span>&nbsp;🥳</span>
          </h1>
        </div>

        <div
          className="w-full py-20 flex-1"
          style={{
            backgroundColor: theme.colors["secondary-container"],
          }}
        >
          <h1
            className="text-4xl px-20 font-bold"
            style={{ color: theme.colors["on-secondary-container"] }}
          >
            <span>
              Build <b className="text-green-600">optimized</b> websites{" "}
              <b className="text-green-600">quickly</b>, focus on your{" "}
              <b className="text-green-600">logic</b>
            </span>
          </h1>

          <div className="mt-6 px-20 py-6 flex items-center gap-x-6">
            <Button onClick={start}>Get Started</Button>
          </div>
        </div>
      </main>

      <footer
        className="p-10 flex flex-col items-center"
        style={{
          backgroundColor: theme.colors["on-secondary-container"],
          color: theme.colors["on-primary"],
        }}
      >
        <div className="flex w-full mb-6">
          <div className="flex-1 px-2">
            <h6 className="font-bold text-lg mb-5">Learn</h6>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li>
                <Link href="/about-us">Introduction</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-2">
            <h6 className="font-bold text-lg mb-5">More</h6>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              <li>
                <Link href="/components">musae</Link>
              </li>
              <li>
                <Link href="/hooks">relax</Link>
              </li>
            </ul>
          </div>
        </div>
        <p>Copyright © {CURRENT_AT.get("y")} fantufantu</p>
      </footer>
    </section>
  );
};

export default App;
