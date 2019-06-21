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
      // Show()
      // console.log(resp)
      // console.log(resp[1])
      // console.log(resp[1].url)
      // img1.src = resp[1].url
      show(resp)
    })
}


function show(resp) {
  img1.src = resp[i].download_url
  img2.src = resp[i + 1].download_url
  img3.src = resp[i + 2].download_url
  // console.log(resp[1].url)
  // console.log(resp[1].url)
  // console.log(img2)
  // console.log(img3)
}

function plusVal() {
  i += 3
  console.log(i)
  render()

}

function minusVal() {
  i -= 3
  console.log(i)
  render()

}

// function minusval() {
//   i -= 3
//   console.log(i)

// }