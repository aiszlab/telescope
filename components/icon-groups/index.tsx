"use client";

import Icons from "./icons";
import { Grid, useTheme } from "musae";
import H2 from "@/components/mdx/h2";
import { Fragment, type ReactElement } from "react";
import * as action from "musae/icons/action";
import * as alert from "musae/icons/alert";
import * as av from "musae/icons/av";
import * as communication from "musae/icons/communication";
import * as content from "musae/icons/content";
import * as device from "musae/icons/device";
import * as editor from "musae/icons/editor";
import * as file from "musae/icons/file";
import * as hardware from "musae/icons/hardware";
import * as home from "musae/icons/home";
import * as image from "musae/icons/image";
import * as maps from "musae/icons/maps";
import * as mock from "musae/icons/mock";
import * as navigation from "musae/icons/navigation";
import * as notification from "musae/icons/notification";
import * as places from "musae/icons/places";
import * as search from "musae/icons/search";
import * as social from "musae/icons/social";
import * as toggle from "musae/icons/toggle";
import type { IconProps } from "musae/types/icon";

interface IconGroup {
  key: string;
  icons: Record<
    string,
    (props: Omit<IconProps, "as">) => ReactElement<IconProps>
  >;
}

const ICON_GROUPS: IconGroup[] = [
  {
    key: "action",
    icons: action,
  },
  {
    key: "alert",
    icons: alert,
  },
  {
    key: "av",
    icons: av,
  },
  {
    key: "communication",
    icons: communication,
  },
  {
    key: "content",
    icons: content,
  },
  {
    key: "device",
    icons: device,
  },
  {
    key: "editor",
    icons: editor,
  },
  {
    key: "file",
    icons: file,
  },
  {
    key: "hardware",
    icons: hardware,
  },
  {
    key: "home",
    icons: home,
  },
  {
    key: "image",
    icons: image,
  },
  {
    key: "maps",
    icons: maps,
  },
  {
    key: "mock",
    icons: mock,
  },
  {
    key: "navigation",
    icons: navigation,
  },
  {
    key: "notification",
    icons: notification,
  },
  {
    key: "places",
    icons: places,
  },
  {
    key: "search",
    icons: search,
  },
  {
    key: "social",
    icons: social,
  },
  {
    key: "toggle",
    icons: toggle,
  },
];

const { Row } = Grid;

const IconGroups = () => {
  const theme = useTheme();

  return ICON_GROUPS.map(({ icons, key: groupKey }) => {
    return (
      <Fragment key={groupKey}>
        <H2 className="uppercase mb-5">{groupKey}</H2>

        <Row
          align="center"
          justify="center"
          gutter={12}
          style={{
            // @ts-expect-error
            "--primary": theme.colors.primary,
            "--on-primary": theme.colors["on-primary"],
          }}
        >
          <Icons icons={icons} />
        </Row>
      </Fragment>
    );
  });
};

export default IconGroups;
