declare const END_DATE: string
;(function(document: Document) {
  const nodeDay = document.querySelector(".js-timer-day")
  const nodeHrs = document.querySelector(".js-timer-hrs")
  const nodeMin = document.querySelector(".js-timer-min")
  const nodeSec = document.querySelector(".js-timer-sec")

  if (!nodeDay || !nodeHrs || !nodeMin || !nodeSec) {
    return
  }

  const setTimerValues = () => {
    const t = Date.parse(END_DATE) - Number(new Date())
    nodeSec.innerHTML = String(Math.floor((t / 1000) % 60)).padStart(2, "0")
    nodeMin.innerHTML = String(Math.floor((t / 1000 / 60) % 60)).padStart(2, "0")
    nodeHrs.innerHTML = String(Math.floor((t / (1000 * 60 * 60)) % 24)).padStart(2, "0")
    nodeDay.innerHTML = String(Math.floor(t / (1000 * 60 * 60 * 24))).padStart(2, "0")
  }

  setInterval(setTimerValues, 1000)
  setTimerValues()
})(document)
