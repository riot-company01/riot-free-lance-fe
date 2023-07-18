import type { LinkProps } from "next/dist/client/link";

import _NextLink from "next/link";
import type { ReactNode } from "react";
import type { Href } from "@/const/hrefs";

type NextLinkProps = {
  children: ReactNode;
  href: Href;
} & Omit<LinkProps, "href">;

/**
 * NextLinkの初期値等を定義するコンポーネント
 * @param props {@link NextLinkProps}
 */
export const NextLink = (props: NextLinkProps) => {
  const { children, href, scroll = true, ...rest } = props;

  return (
    <_NextLink href={href} scroll={scroll} {...rest}>
      {children}
    </_NextLink>
  );
};
