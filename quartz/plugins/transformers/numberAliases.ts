import { QuartzTransformerPlugin } from "../types"
import { FullSlug } from "../../util/path"

// dabitdocs 짧은 주소 별칭 (AliasRedirects emitter가 리다이렉트 stub을 생성)
// 1) 번호 자동: 파일명 "2.1.1. 이더넷 통신 설정.md" -> docs.dabitsol.com/2.1.1
//    frontmatter 불필요, 새 문서도 자동. 번호는 재사용 금지(기존 최대 번호+1 규칙).
// 2) 번호 없는 문서는 아래 수동 매핑 (파일명 stem 기준)
const MANUAL: Record<string, string> = {
  "전광판 알아보기": "start",
  "제품 시작 가이드": "guide",
  "AS 및 기술문의 안내": "as",
  "견적 문의 안내": "quote",
  "원격 지원 안내": "remote",
  "소프트웨어 다운로드": "download",
  "교육 안내 및 오시는 길": "visit",
  "다빛솔루션 소개": "about",
  "다빛솔루션 연혁": "history",
  // 영문판 (content-en) — 같은 별칭 → /en/as 등. 언어 바꾸기 짝도 이 별칭으로 찾는다
  "About LED Displays": "start",
  "Repair Service and Technical Inquiries": "as",
  "Request a Quote": "quote",
  "Remote Support": "remote",
  "Software Downloads": "download",
  "Training and Directions": "visit",
  "About Dabit Solution": "about",
}

// 파일 이름(stem) → 짧은 주소. 번호 문서는 번호, 아니면 MANUAL
export function shortKey(stem: string): string | undefined {
  const m = stem.match(/^(\d+(?:\.\d+)+)\.\s/)
  return m ? m[1] : MANUAL[stem]
}

export const NumberAliases: QuartzTransformerPlugin = () => ({
  name: "NumberAliases",
  markdownPlugins(ctx) {
    return [
      () => (_tree, file) => {
        const alias = shortKey(file.stem ?? "")
        if (!alias) return
        const slug = alias as FullSlug
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
