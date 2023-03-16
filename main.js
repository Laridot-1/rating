let rate_btns = document.querySelectorAll(".btn")
let submit_btn = document.querySelector(".submit_btn")
let feedback = document.querySelector(".feedback")
let front = document.querySelector(".front")
let back = document.querySelector(".back")
let num = 0


rate_btns.forEach(btn => {
  btn.addEventListener("click", e => {
    num = e.target.innerHTML
  })
})

rate_btns.forEach(btn => {
  btn.addEventListener("focus", e => {
    e.target.classList.add("change")
  })
})

rate_btns.forEach(btn => {
  btn.addEventListener("blur", e => {
    e.target.classList.remove("change")
  })
})

submit_btn.addEventListener("click", () => {
  setTimeout(add, 100)
  if(num => 1) {
    feedback.textContent =
  `You selected ${num} out of 5`
  }
  setTimeout(remove, 5000)
})

submit_btn.addEventListener("focus", () => {
  submit_btn.classList.add("sub_change")
})

function add() {
  front.classList.add("hide")
  back.classList.add("show")
}

function remove() {
  front.classList.remove("hide")
  back.classList.remove("show")
  submit_btn.classList.remove("sub_change")
}
