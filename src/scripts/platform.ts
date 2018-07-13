import * as tingle from "tingle.js"
;(function(document: Document) {
  const listImages = Array.from<Element>(document.querySelectorAll(".js-platform-image"))
  const listButtons = Array.from<Element>(document.querySelectorAll(".js-platform-button"))

  if (listImages.length === 0 || listButtons.length === 0 || listImages.length != listButtons.length) {
    return
  }

  const modal = new tingle.modal({
    closeMethods: ["overlay", "escape"],
    cssClass: ["platform__show"],
  })

  const setActive = (id: number) => {
    listButtons.forEach((button) => button.classList.remove("active"))
    listImages.forEach((image) => image.classList.remove("active"))
    listButtons[id].classList.add("active")
    listImages[id].classList.add("active")
  }

  listButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault()
      const id = parseInt(button.innerHTML)
      setActive(id)
    })
  })

  listImages.forEach((image) => {
    image.addEventListener("click", (event) => {
      event.preventDefault()

      if (!window.matchMedia("(min-width: 900px)").matches) {
        return
      }

      const html = image.outerHTML
      modal.setContent(html)
      modal.open()
    })
  })

  const nextFn = () => {
    const current = document.querySelector(".js-platform-button.active")
    if (!current) {
      return
    }

    const next = current.nextElementSibling || document.querySelector(".js-platform-button:first-of-type")
    if (!next) {
      return
    }

    const id = parseInt(next.innerHTML)
    setActive(id)
  }

  const prevFn = () => {
    const current = document.querySelector(".js-platform-button.active")
    if (!current) {
      return
    }

    const prev = current.previousElementSibling || document.querySelector(".js-platform-button:last-of-type")
    if (!prev) {
      return
    }

    const id = parseInt(prev.innerHTML)
    setActive(id)
  }

  const nextLoop = () => {
    nextFn()
    setTimeout(nextLoop, 5000)
  }
  setTimeout(nextLoop, 5000)

  const nextButton = document.querySelector(".js-platform-arrow-right")
  const prevButton = document.querySelector(".js-platform-arrow-left")

  if (!nextButton || !prevButton) {
    return
  }

  nextButton.addEventListener("click", (event) => {
    event.preventDefault()
    nextFn()
  })

  prevButton.addEventListener("click", (event) => {
    event.preventDefault()
    prevFn()
  })
})(document)
