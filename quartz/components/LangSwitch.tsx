import fs from "fs"
import path from "path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { shortKey } from "../plugins/transformers/numberAliases"

// 언어 바꾸기: 한국어 /3.12 ↔ 영문 /en/3.12 (짧은 주소 = 번호 또는 MANUAL 별칭).
// 상대 언어에 짝 문서가 없으면 상대 언어 첫 화면으로 간다.
// ponytail: 폴더 이름(content · content-en)을 빌드 위치(저장소 루트) 기준으로 고정. 다른 곳에서 빌드하면 짝을 못 찾아 첫 화면으로만 간다.
const EN = process.env.DOCS_LANG === "en"

function keysIn(dir: string): Set<string> {
  const keys = new Set<string>()
  if (!fs.existsSync(dir)) return keys
  for (const f of fs.readdirSync(dir, { recursive: true }) as string[]) {
    if (!f.endsWith(".md")) continue
    const k = shortKey(path.basename(f, ".md"))
    if (k) keys.add(k)
  }
  return keys
}

export default (() => {
  const other = keysIn(EN ? "content" : "content-en")
  const LangSwitch: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const key = shortKey(path.basename(fileData.filePath ?? "", ".md"))
    const base = EN ? "/" : "/en/"
    const href = key && other.has(key) ? base + key : base
    return (
      <a
        class={classNames(displayClass, "lang-switch")}
        href={href}
        hreflang={EN ? "ko" : "en"}
        lang={EN ? "ko" : "en"}
        data-router-ignore
      >
        {EN ? "한국어" : "English"}
      </a>
    )
  }

  LangSwitch.css = `
.lang-switch {
  display: inline-flex;
  align-items: center;
  padding: 0.1rem 0.5rem;
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  font-size: 0.8rem;
  white-space: nowrap;
  color: var(--darkgray);
}
.lang-switch:hover {
  border-color: var(--secondary);
  color: var(--secondary);
}
`
  return LangSwitch
}) satisfies QuartzComponentConstructor
