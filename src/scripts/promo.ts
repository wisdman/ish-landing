interface IWindow extends Window {
  onYouTubePlayerAPIReady: () => void
}

;(function(document: Document, window: IWindow) {
  const nodeFrame = document.querySelector("#js-promo-iframe")
  const nodeButton = document.querySelector(".js-promo-play")

  if (!nodeFrame || !nodeButton) {
    return
  }

  window.onYouTubePlayerAPIReady = () => {
    let isPlaying: boolean = false
    const player = new YT.Player("js-promo-iframe", {
      events: {
        onReady: function() {
          nodeButton.addEventListener("click", (event) => {
            event.preventDefault()
            if (isPlaying) {
              return player.stopVideo()
            }
            player.playVideo()
          })
        },
        onStateChange: function(event) {
          switch (event.data) {
            case YT.PlayerState.PAUSED:
            case YT.PlayerState.PLAYING:
            case YT.PlayerState.BUFFERING:
              isPlaying = true
              break
            default:
              isPlaying = false
              break
          }
        },
      },
    })
  }

  const script = document.createElement("script")
  script.type = "text/javascript"
  script.async = true
  script.src = "//www.youtube.com/player_api"
  document.head.appendChild(script)
})(document, window as IWindow)
