
window.onload= getNewQuote()
const quote = {
    text: '',
    author: ''
}

function getNewQuote(){
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((res) => res.json())
    .then((arr) => {
        console.log(arr.data[0]);
        // getNewQuote(arr.data[0])

        const quoteText = document.querySelector('.QuoteText')
        const quoteAuthor = document.querySelector('.quoteAuthor')
        quote.text = arr.data[0].quoteText
        quote.author = arr.data[0].quoteAuthor
        console.log(quote);
        quoteText.innerHTML = quote.text
        quoteAuthor.innerHTML = quote.author



    });



}
const statusBar = document.querySelector('.status')
function copyQuote() {
    navigator.clipboard.writeText(quote.text)
    let copied = document.createElement('div')
    copied.classList.add('copied')


    let copiedText = document.createElement('p')
    copiedText.innerText = 'quote copied to clipboard'
    copied.appendChild(copiedText)

    let copiedCountdown = document.createElement('div')
    copiedCountdown.classList.add('countdown')
    copied.appendChild(copiedCountdown)

    statusBar.appendChild(copied)
    setTimeout(() => {
        statusBar.firstElementChild.remove()
    }, 5000);
    return
}






particlesJS("particles-js", {
  particles: {
    number: { value: 76, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

