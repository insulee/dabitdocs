import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// DOCS_LANG=en → 영문판 빌드 (quartz.config.ts와 같은 스위치)
const EN = process.env.DOCS_LANG === "en"

// 특정 폴더의 파일 정렬 순서를 지정
const customSortFn = (a: any, b: any) => {
  const customOrders: Record<string, string[]> = {
    "1.-시작하기": ["전광판 알아보기", "제품 시작 가이드"],
    "4.-고객지원": ["AS 및 기술문의 안내", "원격 지원 안내", "견적 문의 안내"],
    "6.-다빛솔루션-소개": ["다빛솔루션 소개", "다빛솔루션 연혁", "교육 안내 및 오시는 길"],
    // 영문판 (content-en)
    "1.-Getting-Started": ["About LED Displays", "Product Quick Start Guide"],
    "4.-Customer-Support": ["Repair Service and Technical Inquiries", "Remote Support", "Request a Quote"],
    "6.-About-Dabit-Solution": ["About Dabit Solution", "Training and Directions"],
  }

  if (!a.isFolder && !b.isFolder) {
    for (const [folder, order] of Object.entries(customOrders)) {
      if (String(a.slug).startsWith(folder + "/") && String(b.slug).startsWith(folder + "/")) {
        const aIdx = order.indexOf(a.displayName)
        const bIdx = order.indexOf(b.displayName)
        if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx
        if (aIdx !== -1) return -1
        if (bIdx !== -1) return 1
      }
    }
  }

  // 기본: 폴더 우선, 이후 알파벳순
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }
  return a.isFolder ? -1 : 1
}

// 사이드바 하단 바로가기 링크
// 영문판은 한국어 전용 창구(스마트스토어 · 카카오톡)를 뺀다
const quickLinks = Component.QuickLinks(EN ? {
  title: "Quick Links",
  links: [
    { icon: "home", label: "Dabit Solution website", href: "https://dabitsol.com/en/" },
    { icon: "mail", label: "dabit@dabitsol.com", href: "mailto:dabit@dabitsol.com" },
    { icon: "phone", label: "+82-31-202-2435", href: "tel:+82-31-202-2435" },
  ],
} : {
  title: "바로가기",
  links: [
    { icon: "home", label: "다빛솔루션 홈페이지", href: "https://dabitsol.com" },
    { icon: "store", label: "네이버 스마트스토어", href: "https://smartstore.naver.com/dabitsol" },
    { icon: "chat", label: "카카오톡 채널", href: "http://pf.kakao.com/_iPfen" },
    { icon: "mail", label: "dabit@dabitsol.com", href: "mailto:dabit@dabitsol.com" },
    { icon: "phone", label: "031-202-2435~6", href: "tel:031-202-2435" },
  ],
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  // 챗봇은 한국어 문서로 답한다 → 영문판에서는 끈다 (공개 전 이부장 결정 항목)
  afterBody: EN ? [] : [
    Component.Chatbot({
      iframeUrl: "https://chatbot.dabit.synology.me",
      headerTitle: "다빛솔루션 AI 챗봇",
      buttonEmoji: "\u{1F916}",
      tooltipText: "AI 기술지원 챗봇입니다\n도움이 필요하신가요?",
      tooltipTextMobile: "도움이 필요하신가요?",
    }),
  ],
  footer: Component.Footer({
    links: {
      [EN ? "Dabit Solution" : "다빛솔루션"]: EN ? "https://dabitsol.com/en/" : "https://dabitsol.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ShortLink(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
        { Component: Component.LangSwitch() },
      ],
    }),
    Component.Explorer({ folderClickBehavior: "collapse", folderDefaultState: "collapsed", sortFn: customSortFn }),
    quickLinks,
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.LangSwitch() },
      ],
    }),
    Component.Explorer({ folderClickBehavior: "collapse", folderDefaultState: "collapsed", sortFn: customSortFn }),
    quickLinks,
  ],
  right: [],
}
