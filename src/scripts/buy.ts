import * as tingle from "tingle.js"

declare const CROWDSALE_ADDRESS: string
;(function(document: Document) {
  const copyToClipboard = (str: string) => {
    const el = document.createElement("textarea")
    el.value = str
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }
  }

  const modal = new tingle.modal({
    closeMethods: ["overlay", "escape", "button"],
    cssClass: ["buy"],
    onOpen: function() {
      const copyButton = modal.getContent().querySelector(".js-crowdsale-copy-adress")
      copyButton.addEventListener("click", (event: Event) => {
        event.preventDefault()
        copyToClipboard(CROWDSALE_ADDRESS)
      })
    },
  })

  // set content
  modal.setContent(`
    <h1 class="buy__title uppercase">Buy Science Tokens</h1>
    <p>To sell <a href="//etherscan.io/token/0x2cf2d4919e639b25b806126eb5c97d043ffb0a70#tokenInfo" target="_blank" rel="noopener">Science Tokens (ST)</a>, we are use the special <a href="//etherscan.io/address/${CROWDSALE_ADDRESS}#code" target="_blank" rel="noopener">Crowdsale smart-contract</a>. After making the ethereum payment to this address, Science Token (ST) will be sent automatically to the wallet from which you made the payment.</p>
    <img class="buy__qr-code" src="//chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${CROWDSALE_ADDRESS}" aria-hidden="true">
    <div class="buy__eth-adress">
      <span>${CROWDSALE_ADDRESS}</span>
      <button class="buy__copy-adress js-crowdsale-copy-adress">
        <svg clsss="buy__copy-adress__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M32.2 8.7H8.9a4 4 0 0 0-4 4V46a4 4 0 0 0 4 4h23.2a4 4 0 0 0 4-4V12.7a4 4 0 0 0-3.9-4zM33.4 46c0 .7-.5 1.2-1.2 1.2H8.9c-.7 0-1.2-.5-1.2-1.2V12.7c0-.7.5-1.2 1.2-1.2h23.2c.7 0 1.2.5 1.2 1.2V46zm7.7-46H17.8a4 4 0 0 0-4 4c0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.7.5-1.2 1.2-1.2H41c.7 0 1.2.5 1.2 1.2v33.4c0 .7-.5 1.2-1.2 1.2-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4a4 4 0 0 0 4-4V4a4 4 0 0 0-3.9-4z"></path>
        </svg>
        <span class="visually-hidden">Copy address</span>
      </button>
    </div>
    <p class="buy__warning"><b>! Do not send ETH from an Exchange</b></p>
    <p>When you send ETH to ScienceToken (ST) Crowdsale smart-contract from an exchange wallet, your ScienceToken (ST) will be attached to the exchange's ETH wallet and maybe you will not be able to receive and send your ScienceToken (ST).</p>
  `)

  const buyButton = document.querySelector(".js-crowdsale-buy")

  if (!buyButton) {
    return
  }

  buyButton.addEventListener("click", (event) => {
    event.preventDefault()
    modal.open()
  })
})(document)
