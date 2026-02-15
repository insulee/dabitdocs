document.addEventListener("nav", () => {
  const widget = document.getElementById("chat-widget")
  if (!widget) return

  const btn = document.getElementById("chat-btn")
  const modal = document.getElementById("chatbot-modal")
  const overlay = document.getElementById("chatbot-overlay")
  const closeBtn = document.getElementById("chatbot-close")
  const iframe = document.getElementById("chatbot-iframe") as HTMLIFrameElement | null
  if (!btn || !modal || !overlay || !closeBtn || !iframe) return

  const iframeUrl = widget.dataset.iframeUrl ?? ""

  function openModal() {
    if (!iframe || !modal) return
    if (iframe.src === "about:blank" || !iframe.src) {
      iframe.src = iframeUrl
    }
    modal.classList.add("open")
    document.body.style.overflow = "hidden"
  }

  function closeModal() {
    if (!modal) return
    modal.classList.remove("open")
    document.body.style.overflow = ""
  }

  function toggleModal() {
    if (!modal) return
    if (modal.classList.contains("open")) {
      closeModal()
    } else {
      openModal()
    }
  }

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) {
      closeModal()
    }
  }

  btn.addEventListener("click", toggleModal)
  overlay.addEventListener("click", closeModal)
  closeBtn.addEventListener("click", closeModal)
  document.addEventListener("keydown", onKeydown)

  window.addCleanup(() => {
    btn.removeEventListener("click", toggleModal)
    overlay.removeEventListener("click", closeModal)
    closeBtn.removeEventListener("click", closeModal)
    document.removeEventListener("keydown", onKeydown)
    closeModal()
  })
})
