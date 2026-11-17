import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      {/* GitHub Pages는 맨 위 404.html 하나만 쓴다 → /en/ 아래 없는 주소도 이 화면이 뜬다 */}
      {!cfg.locale.startsWith("en") && (
        <p lang="en">
          Page not found. <a href="/en/">Go to the English home page</a>
        </p>
      )}
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
