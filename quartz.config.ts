import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "DABIT DOCS",
    pageTitleSuffix: " - 다빛솔루션",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: "docs.dabitsol.com",
    ignorePatterns: ["private", "templates", ".obsidian", ".claude", ".trash", "Template", "Inbox"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Pretendard Variable",
        body: "Pretendard Variable",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f1f3f5",
          gray: "#adb5bd",
          darkgray: "#495057",
          dark: "#212529",
          secondary: "#1971c2",
          tertiary: "#1864ab",
          highlight: "rgba(25, 113, 194, 0.05)",
          textHighlight: "#fff3bf",
        },
        darkMode: {
          light: "#1a1b1e",
          lightgray: "#25262b",
          gray: "#909296",
          darkgray: "#c1c2c5",
          dark: "#e9ecef",
          secondary: "#4dabf7",
          tertiary: "#74c0fc",
          highlight: "rgba(77, 171, 247, 0.07)",
          textHighlight: "#e67700",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({ showDates: false }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled (Pretendard font not compatible)
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
