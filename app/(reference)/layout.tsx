import { type ReactNode } from "react";
import FloatNav from "@/components/float-nav";
import Provided from "@/components/provided";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provided>
      <div className="px-8 pb-8 flex flex-row-reverse gap-5">
        <FloatNav className="max-lg:hidden" />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </Provided>
  );
};

export default Layout;
