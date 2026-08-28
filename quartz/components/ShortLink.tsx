import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/shortlink.inline"

// 문서의 짧은 주소(docs.dabitsol.com/2.4.1 등)를 제목 아래에 표시하고 클릭 한 번으로 복사.
// 별칭은 NumberAliases transformer가 file.data.aliases에 넣어둔 것을 그대로 사용.
const ShortLink: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const alias = fileData.aliases?.[0]
  if (!alias) return null
  const short = `docs.dabitsol.com/${alias}`
  return (
    <button
      class={classNames(displayClass, "shortlink")}
      type="button"
      data-short={`https://${short}`}
      title="짧은 주소 복사"
    >
      <span class="shortlink-url">{short}</span>
      <span class="shortlink-action">복사</span>
    </button>
  )
}

ShortLink.css = `
.shortlink {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.4rem 0 0 0;
  padding: 0.15rem 0.6rem;
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  background: var(--light);
  font-family: var(--codeFont);
  font-size: 0.8rem;
  color: var(--gray);
  cursor: pointer;
}
.shortlink:hover {
  border-color: var(--secondary);
  color: var(--secondary);
}
.shortlink-action {
  font-family: var(--bodyFont);
  font-size: 0.7rem;
  color: var(--secondary);
}
`

ShortLink.afterDOMLoaded = script

export default (() => ShortLink) satisfies QuartzComponentConstructor
