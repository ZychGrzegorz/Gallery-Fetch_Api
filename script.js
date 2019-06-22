const img1 = document.querySelector('div.images :nth-child(1)')
const img2 = document.querySelector('div.images :nth-child(2)')
const img3 = document.querySelector('div.images :nth-child(3)')
const btnminus = document.querySelector('nav :nth-child(1)')
const btnplus = document.querySelector('nav :nth-child(2) i')
let i = 0

btnplus.addEventListener('click', plusVal)
btnminus.addEventListener('click', minusVal)


render()

function render() {
  fetch("https://picsum.photos/v2/list")
    .then(resp => resp.json())
    .then(resp => {
      show(resp)
    })
}


function show(resp) {
  img1.src = resp[i].download_url
  img2.src = resp[i + 1].download_url
  img3.src = resp[i + 2].download_url

}

function plusVal() {
  i += 3
  if (i > 27) {
    i = 27
  }
  // console.log(i)
  render()

}

function minusVal() {
  i -= 3
  if (i < 0) {
    i = 0
  }
  // console.log(i)
  render()

}