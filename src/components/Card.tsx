import { slugifyStr } from "@utils/slugify";
import type { PostItem } from "types";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  frontmatter: PostItem;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, meta_description, created_at } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime
        pubDatetime={new Date(created_at)}
        modDatetime={new Date(created_at)}
      />
      <p>{meta_description}</p>
    </li>
  );
}
