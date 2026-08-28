import { QuartzTransformerPlugin } from "../types"
import { FullSlug } from "../../util/path"

// dabitdocs 번호 체계 자동 별칭: 파일명 "2.1.1. 이더넷 통신 설정.md" -> docs.dabitsol.com/2.1.1
// 파일명 앞의 번호를 읽어 짧은 리다이렉트 주소를 만든다. frontmatter 불필요, 새 문서도 자동.
export const NumberAliases: QuartzTransformerPlugin = () => ({
  name: "NumberAliases",
  markdownPlugins(ctx) {
    return [
      () => (_tree, file) => {
        const m = (file.stem ?? "").match(/^(\d+(?:\.\d+)+)\.\s/)
        if (!m) return
        const slug = m[1] as FullSlug
        const aliases = file.data.aliases ?? []
        if (!aliases.includes(slug)) {
          aliases.push(slug)
          file.data.aliases = aliases
          ctx.allSlugs.push(slug)
        }
      },
    ]
  },
})
