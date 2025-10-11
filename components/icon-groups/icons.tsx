import type { IconProps } from "musae/types/icon";
import { type ReactElement, useMemo } from "react";
import { Grid, useMessage } from "musae";
import { stringify } from "@aiszlab/relax/class-name";

const { Col } = Grid;

const clipboard = async (value: string) => {
  return await navigator.clipboard.writeText(value);
};

const Icons = ({
  icons,
}: {
  icons: Record<
    string,
    (props: Omit<IconProps, "as">) => ReactElement<IconProps>
  >;
}) => {
  const _icons = useMemo(() => {
    return Object.entries(icons).sort();
  }, [icons]);
  const [messager] = useMessage();

  const copy = (iconKey: string) => {
    clipboard(`<${iconKey} />`)
      .then(() => {
        messager.success({ description: "🎉 已复制到剪贴板" });
      })
      .catch(() => {
        messager.error({ description: "系统开小差了，请重试" });
      });
  };

  return (
    <>
      {_icons.map(([key, Icon]) => {
        // in cjs mode, exports = default, exclude it
        if (key === "default") return null;

        return (
          <Col
            key={key}
            span={4}
            className={stringify(
              "w-32",
              "px-4 py-2 transition-all rounded cursor-pointer select-none",
              "flex flex-col gap-2 items-center",
              "max-xl:col-span-6",
              "hover:text-[var(--on-primary)] hover:bg-[var(--primary)]"
            )}
            onClick={() => {
              copy(key);
            }}
          >
            <Icon size={48} />
            <div className="text-ellipsis overflow-hidden text-sm font-medium max-w-full">
              {key}
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default Icons;
