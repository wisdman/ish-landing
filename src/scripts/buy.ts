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
    <input class="buy__tab__input" type="radio" id="tab-1" name="tab-group-1" checked>
    <label class="buy__tab__label" for="tab-1">
      <svg class="buy__svg__eth" viewBox="0 0 48 48" width="48px" height="48px">
        <path fill="#9FA8DA" d="M 11 24 L 25 2 L 39 24 L 25 32 Z "></path>
        <path fill="#7986CB" d="M 25 2 L 39 24 L 25 32 Z "></path>
        <path fill="#9FA8DA" d="M 11 27 L 25 35 L 39 27 L 25 46 Z "></path>
        <path fill="#7986CB" d="M 25 35 L 39 27 L 25 46 Z "></path>
        <path fill="#7986CB" d="M 11 24 L 25 18 L 39 24 L 25 32 Z "></path>
        <path fill="#5C6BC0" d="M 25 18 L 39 24 L 25 32 Z "></path>
      </svg>
      <span>Ethereum</span>
    </label>
    <div class="buy__tab__tab tab-paypal">
      <h1 class="buy__title uppercase">Buy Science Tokens By ETH</h1>
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
    </div>
    <input class="buy__tab__input" type="radio" id="tab-2" name="tab-group-1">
    <label class="buy__tab__label" for="tab-2">
      <svg width="124px" height="33px" viewBox="0 0 124 33">
        <path fill="#253B80" d="M46.2 6.7h-6.8a1 1 0 0 0-1 .9L35.7 25c0 .3.2.6.5.6h3.3a1 1 0 0 0 1-.8l.7-4.7c0-.4.5-.8 1-.8h2c4.6 0 7.2-2.2 7.9-6.5.3-1.9 0-3.4-.9-4.4-1-1.1-2.7-1.8-5-1.8zm.8 6.5c-.4 2.4-2.2 2.4-4 2.4h-1l.6-4.6c0-.3.3-.5.6-.5h.5c1.2 0 2.4 0 3 .7.3.5.4 1 .3 2zM66.7 13h-3.3c-.3 0-.5.3-.6.6l-.1.9-.3-.4c-.7-1-2.2-1.3-3.8-1.3a7.5 7.5 0 0 0-7.3 6.6c-.4 1.9 0 3.7 1.2 5 1 1.2 2.4 1.7 4.1 1.7 3 0 4.5-2 4.5-2l-.1 1c0 .3.2.6.6.6h3a1 1 0 0 0 .8-.8l1.8-11.2c0-.3-.2-.6-.5-.6zM62 19.5a3.6 3.6 0 0 1-3.7 3.2c-1 0-1.7-.3-2.2-1-.5-.5-.7-1.3-.5-2.2a3.7 3.7 0 0 1 3.7-3.2c.9 0 1.6.3 2.1 1 .5.5.7 1.3.6 2.2zM84.1 13h-3.3a1 1 0 0 0-.8.5l-4.5 6.7-2-6.4a1 1 0 0 0-.9-.7h-3.2c-.4 0-.7.4-.5.7l3.6 10.7-3.4 4.8c-.3.4 0 .9.4.9h3.3c.3 0 .6-.2.8-.4l11-15.8c.2-.4 0-1-.5-1z"></path>
        <path fill="#179BD7" d="M95 6.7h-6.8a1 1 0 0 0-1 .9L84.4 25c0 .3.3.6.6.6h3.5c.3 0 .6-.2.7-.5l.8-5c0-.4.4-.8.9-.8h2.2c4.5 0 7-2.2 7.7-6.5.4-1.9 0-3.4-.8-4.4-1-1.1-2.7-1.8-5-1.8zm.8 6.5c-.4 2.4-2.3 2.4-4 2.4h-1.1l.7-4.6c0-.3.3-.5.6-.5h.4c1.3 0 2.4 0 3 .7.4.5.5 1 .4 2zM115.4 13h-3.2c-.3 0-.6.3-.6.6l-.1.9-.3-.4c-.7-1-2.3-1.3-3.8-1.3a7.5 7.5 0 0 0-7.4 6.6c-.3 1.9.2 3.7 1.3 5 1 1.2 2.4 1.7 4 1.7 3 0 4.6-2 4.6-2l-.1 1c0 .3.2.6.5.6h3a1 1 0 0 0 1-.8l1.7-11.2c0-.3-.2-.6-.6-.6zm-4.5 6.4a3.6 3.6 0 0 1-3.7 3.2c-1 0-1.7-.3-2.2-1-.5-.5-.7-1.3-.5-2.2a3.7 3.7 0 0 1 3.6-3.2c1 0 1.7.3 2.2 1 .5.5.7 1.3.6 2.2zM119.3 7.2l-2.8 17.9c0 .3.2.6.5.6h2.9a1 1 0 0 0 1-.8l2.7-17.5c0-.3-.2-.7-.6-.7H120c-.3 0-.6.3-.6.5z"></path>
        <path fill="#253B80" d="M7.3 29.2l.5-3.4H1L4.9 1.3 5 1h9.6C17.7 1 20 1.6 21 3c.5.6.9 1.2 1 1.9a7 7 0 0 1 0 2.6v.8l.6.3 1 .8c.5.5.8 1.1.9 2 .1.7 0 1.7-.1 2.7a9.9 9.9 0 0 1-1.2 3.2 6.5 6.5 0 0 1-4.3 3.1c-.9.3-2 .4-3 .4H15a2.2 2.2 0 0 0-2.2 1.8v.3l-1 5.9V29H7.3z"/><path fill="#179BD7" d="M23 7.7v.5c-1.3 6.4-5.5 8.6-11 8.6H9.4c-.6 0-1.2.4-1.3 1l-1.4 9-.4 2.6c0 .4.3.8.7.8h4.9c.6 0 1-.4 1.1-1v-.3l1-5.8v-.3c.1-.6.6-1 1.2-1h.7c4.8 0 8.5-2 9.6-7.5.4-2.3.2-4.2-1-5.6-.4-.4-.8-.8-1.4-1z"></path>
        <path fill="#222D65" d="M21.8 7.2a9.8 9.8 0 0 0-1.2-.3L18 6.7h-7.3a1.2 1.2 0 0 0-1.2 1l-1.5 10v.2c0-.7.6-1.1 1.2-1.1h2.8c5.4 0 9.6-2.2 10.9-8.6v-.5a6.6 6.6 0 0 0-1.2-.5z"/><path fill="#253B80" d="M9.6 7.7a1.2 1.2 0 0 1 1.2-1H18a15.3 15.3 0 0 1 4 .5l1 .5c.3-2.4 0-4-1.3-5.4C20.4.7 17.8 0 14.6 0H5.2C4.6 0 4 .5 4 1.1L0 26c0 .5.3 1 .8 1h5.8l1.5-9.3 1.5-9.9z"></path>
        </svg>
    </label>
    <div class="buy__tab__tab tab-paypal">
      <h1 class="buy__title uppercase">Buy Science Tokens By USD</h1>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" autocomplete="off">
        <input type="hidden" name="cmd" value="_s-xclick">
        <table>
          <tr>
            <td><input type="hidden" name="on0" value="Amount">Amount</td>
          </tr>
          <tr>
            <td>
              <select name="os0">
                <option value="50ST">50ST $10,00 USD</option>
                <option value="250ST">250ST $50,00 USD</option>
                <option value="500ST">500ST $100,00 USD</option>
                <option value="1000ST">1000ST $200,00 USD</option>
                <option value="3000ST (Bonus 20%)">3000ST (Bonus 20%) $500,00 USD</option>
                <option value="5500ST (Bonus 30%)">5500ST (Bonus 30%) $800,00 USD</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><input type="hidden" name="on1" value="Ethereum (ERC20) wallet">Ethereum (ERC20) wallet</td>
          </tr>
          <tr>
            <td><input type="text" name="os1" maxlength="42" autocomplete="off" required></td>
          </tr>
          <tr>
            <td><input type="hidden" name="on2" value="Email">Email</td>
          </tr>
          <tr>
            <td><input type="text" name="os2" maxlength="200" autocomplete="off" required></td>
          </tr>
        </table>
        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
        <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/ru_RU/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>
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
