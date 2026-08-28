document.addEventListener("nav", () => {
  for (const btn of document.getElementsByClassName("shortlink")) {
    const el = btn as HTMLButtonElement
    const onClick = () => {
      navigator.clipboard.writeText(el.dataset.short ?? "").then(() => {
        const action = el.querySelector(".shortlink-action")
        if (action) {
          const prev = action.textContent
          action.textContent = "복사됨!"
          setTimeout(() => (action.textContent = prev), 1500)
        }
      })
    }
    el.addEventListener("click", onClick)
    window.addCleanup(() => el.removeEventListener("click", onClick))
  }
})
