;(function(document, window, callbackName) {
  ;(window[callbackName] = window[callbackName] || []).push(function() {
    try {
      window[`yaCounter${METRIKA_ID}`] = new Ya.Metrika2({
        id: METRIKA_ID,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      })
    } catch (_) {}
  })

  const script = document.createElement("script")
  script.type = "text/javascript"
  script.async = true
  script.src = "//mc.yandex.ru/metrika/tag.js"
  document.head.appendChild(script)
})(document, window, "yandex_metrika_callbacks2")
