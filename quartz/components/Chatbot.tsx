// @ts-ignore
import chatbotScript from "./scripts/chatbot.inline"
import chatbotStyle from "./styles/chatbot.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface ChatbotOptions {
  iframeUrl: string
  headerTitle: string
  buttonEmoji: string
  tooltipText: string
}

const defaultOptions: ChatbotOptions = {
  iframeUrl: "",
  headerTitle: "AI 챗봇",
  buttonEmoji: "\u{1F916}",
  tooltipText: "",
}

export default ((opts?: Partial<ChatbotOptions>) => {
  const options: ChatbotOptions = { ...defaultOptions, ...opts }

  const Chatbot: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <>
        <div id="chat-widget" data-iframe-url={options.iframeUrl}>
          {options.tooltipText && <div id="chat-tooltip">{options.tooltipText}</div>}
          <button id="chat-btn" aria-label="Open chatbot">
            {options.buttonEmoji}
          </button>
        </div>
        <div id="chatbot-modal">
          <div id="chatbot-overlay" />
          <div id="chatbot-container">
            <div id="chatbot-header">
              <span>{options.headerTitle}</span>
              <button id="chatbot-close" aria-label="Close chatbot">
                &#x2715;
              </button>
            </div>
            <iframe id="chatbot-iframe" src="about:blank" allow="clipboard-write" />
          </div>
        </div>
      </>
    )
  }

  Chatbot.css = chatbotStyle
  Chatbot.afterDOMLoaded = chatbotScript

  return Chatbot
}) satisfies QuartzComponentConstructor
