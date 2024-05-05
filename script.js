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
      console.log("intersecting now")
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