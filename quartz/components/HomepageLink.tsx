import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import homepageLinkStyle from "./styles/homepageLink.scss"

interface HomepageLinkOptions {
  text: string
  url: string
}

const defaultOptions: HomepageLinkOptions = {
  text: "다빛솔루션 홈페이지",
  url: "https://dabitsol.com",
}

export default ((opts?: Partial<HomepageLinkOptions>) => {
  const options: HomepageLinkOptions = { ...defaultOptions, ...opts }

  const HomepageLink: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <a
        href={options.url}
        target="_blank"
        rel="noopener noreferrer"
        class={classNames(displayClass, "homepage-link")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
        <span>{options.text}</span>
      </a>
    )
  }

  HomepageLink.css = homepageLinkStyle
  return HomepageLink
}) satisfies QuartzComponentConstructor
