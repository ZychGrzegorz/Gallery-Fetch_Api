const img1 = document.querySelector('div.images :nth-child(1)')
const img2 = document.querySelector('div.images :nth-child(2)')
const img3 = document.querySelector('div.images :nth-child(3)')
const btnminus = document.querySelector('nav :nth-child(1)')
const btnplus = document.querySelector('nav :nth-child(2) i')
const img = document.querySelectorAll('img')
const imgs = Array.from(img)
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
    .catch(error => console.log('Błąd:', error));

}

function show(resp) {
  let counter = 0
  const img1New = document.createElement('img')
  const img2New = document.createElement('img')
  const img3New = document.createElement('img')
  img1New.src = resp[i].download_url
  img2New.src = resp[i + 1].download_url
  img3New.src = resp[i + 2].download_url;
  [img1New, img2New, img3New].map(img => img.addEventListener('load', function () {
    counter++
    if (counter === 3) {
      imgs.forEach(function (img) {
        img.classList.remove('anim')
      })

      return setTimeout(() => {

        img1.src = resp[i].download_url
        img2.src = resp[i + 1].download_url
        img3.src = resp[i + 2].download_url
        imgs.forEach(function (img) {
          img.classList.add('anim')
        })
      }, 100)
    }
  }))
}

function plusVal() {
  i += 3
  if (i > 27) {
    i = 27
    return
  }
  render()

}

function minusVal() {
  i -= 3
  if (i < 0) {
    i = 0
    return
  }
  render()

}