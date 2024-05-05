const photos = [
  {
    src: "img/taiwan_street_9_xs.jpg",
    dataSrc: "img/taiwan_street_9.jpeg",
    alt: "males playing boardgame outside temple",
    bgColor: "white",
    order: 2,
  },
  {
    src: "img/taiwan_street_8_xs.jpg",
    dataSrc: "img/taiwan_street_8.jpeg",
    alt: "senior male breaks prayer to look at me inside temple",
    bgColor: "white",
    order: 3,
  },
  {
    src: "img/taiwan_street_6_xs.jpg",
    dataSrc: "img/taiwan_street_6.jpeg",
    alt: "male senior exits taxi",
    bgColor: "white",
    order: 4,
  },
  {
    src: "img/taiwan_street_10_xs.jpg",
    dataSrc: "img/taiwan_street_10.jpeg",
    alt: "street clothes vendor sips drink through straw",
    bgColor: "white",
    order: 8,
  },
  {
    src: "img/taiwan_street_12_xs.jpg",
    dataSrc: "img/taiwan_street_12.jpeg",
    alt: "senior male drinks tea near illuminated sign",
    bgColor: "white",
    order: 6,
  },
  {
    src: "img/taiwan_street_15_xs.jpg",
    dataSrc: "img/taiwan_street_15.jpeg",
    alt: "chef feeds dog in alley",
    bgColor: "white",
    order: 14,
  },
  {
    src: "img/taiwan_street_16_xs.jpg",
    dataSrc: "img/taiwan_street_16.jpeg",
    alt: "chef in kitchen gets dressed before service",
    bgColor: "white",
    order: 12,
  },
  {
    src: "img/taiwan_street_17_xs.jpg",
    dataSrc: "img/taiwan_street_17.jpeg",
    alt: "lady eats noodles while sporting plasic goggles",
    bgColor: "white",
    order: 9,
  },
  {
    src: "img/taiwan_street_18_xs.jpg",
    dataSrc: "img/taiwan_street_18.jpeg",
    alt: "female prepares before cooking",
    bgColor: "white",
    order: 11,
  },
  {
    src: "img/taiwan_street_19_xs.jpg",
    dataSrc: "img/taiwan_street_19.jpeg",
    alt: "senior lady takes stock of food",
    bgColor: "white",
    order: 13,
  },
  {
    src: "img/taiwan_street_20_xs.jpg",
    dataSrc: "img/taiwan_street_20.jpeg",
    alt: "male seen eating lunch in van window reflection",
    bgColor: "white",
    order: 10,
  },
  {
    src: "img/taiwan_street_23_xs.jpg",
    dataSrc: "img/taiwan_street_23.jpeg",
    alt: "female laughing with co-workers",
    bgColor: "white",
    order: 16,
  },
  {
    src: "img/taiwan_street_25_xs.jpg",
    dataSrc: "img/taiwan_street_25.jpeg",
    alt: "person sleeps with only arms showing on counter",
    bgColor: "white",
    order: 15,
  },
  {
    src: "img/taiwan_street_27_xs.jpg",
    dataSrc: "img/taiwan_street_27.jpeg",
    alt: "men share a beer at lunch time",
    bgColor: "white",
    order: 7,
  },
  {
    src: "img/taiwan_street_31_xs.jpg",
    dataSrc: "img/taiwan_street_31.jpeg",
    alt: "person gestures at laptop while having a meeting in busy train station",
    bgColor: "white",
    order: 5,
  }
]

const galleryContainer = document.querySelector(".gallery");

photos.forEach(photo => {
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    photoContainer.style.order = photo.order || 100;

    if (photo.bgColor) photoContainer.style.backgroundColor = photo.bgColor

    const image = document.createElement("img")
    const blurImage = document.createElement("img")
    image.src = photo.dataSrc
    blurImage.src = photo.src
    blurImage.classList.add("blur")
    image.setAttribute("data-src", photo.dataSrc)
    image.alt = photo.alt

    photoContainer.appendChild(blurImage)

    image.onload = () => photoContainer.replaceChild(image, blurImage)

    galleryContainer.appendChild(photoContainer);
});

const introObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.getElementById("intro-line").classList.add("animated-hr")
    } else {
      document.getElementById("intro-line").classList.remove("animated-hr")
    }
  })
}, { threshold: 0.5 })

introObserver.observe(document.getElementById("intro"))

document.addEventListener('dragstart', (event) => {
  let target = event.target
  if (target.tagName.toLowerCase() === 'img')  event.preventDefault()
})

document.querySelector('.info').addEventListener('click', () => openDialog())

function openDialog() {
  document.getElementById('dialog').classList.add('open')
}

function closeDialog() {
  document.getElementById('dialog').classList.remove('open')
}

function toggleDarkMode() {
  const galleryContainer = document.querySelector(".gallery")
  galleryContainer.classList.toggle("dark-mode")

  const isDark = galleryContainer.classList.contains("dark-mode")

  const photoContainers = document.querySelectorAll(".photo-container")
  
  photoContainers.forEach(container => {
    container.style.removeProperty("background-color")
    container.classList.toggle("dark-mode")
  })

  const button = document.querySelector('.light-dark')

  const lightIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
  </svg>
  `
  const darkIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
  </svg>
  `
  isDark ? button.innerHTML = lightIcon : button.innerHTML = darkIcon
}

document.querySelector('.light-dark').addEventListener('click', () => toggleDarkMode())