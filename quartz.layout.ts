import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 특정 폴더의 파일 정렬 순서를 지정
const customSortFn = (a: any, b: any) => {
  const customOrders: Record<string, string[]> = {
    "4.-고객지원": ["AS 및 기술문의 안내", "원격 지원 안내", "견적 문의 안내"],
    "6.-다빛솔루션-소개": ["다빛솔루션 소개", "다빛솔루션 연혁", "교육 안내 및 오시는 길"],
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

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
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
      "다빛솔루션": "https://dabitsol.com",
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
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      sortFn: customSortFn,
      externalLinks: [{ text: "다빛솔루션 홈페이지", url: "https://dabitsol.com" }],
    }),
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
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      sortFn: customSortFn,
      externalLinks: [{ text: "다빛솔루션 홈페이지", url: "https://dabitsol.com" }],
    }),
  ],
  right: [],
}
