const serviceTitle = document.getElementById("service-title");
const serviceDescription = document.getElementById("service-description");
const serviceImage = document.getElementById("service-image");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const services = [
  {
    title: "Tam Zamanlı Lojistik İle Sorunlarınızı Çözüme Kavuşturuyoruz.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://www.agi-logistics.com/agilogistics/dosyalar/icerik3/41_r5.jpg?m=1698921015",
  },
  {
    title: "Yüksek Kaliteli Ürünler ile Müşteri Memnuniyeti Sağlıyoruz.",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://www.agi-logistics.com/agilogistics/dosyalar/icerik3/35_r5.jpg?m=1698994233",
  },
  {
    title:
      " been the industry's standard dummy text ever since the 1500s. When an unknown printer took a gal",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://www.agi-logistics.com/agilogistics/dosyalar/icerik3/37_r5.jpg?m=1698917880",
  },
];

let currentIndex = 0;

showService(currentIndex);

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % services.length;
  showService(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1) % services.length;
  showService(currentIndex);
});

function showService(index) {
  const service = services[index];
  serviceTitle.innerHTML = service.title;
  serviceDescription.innerHTML = service.description;
  serviceImage.src = service.image;
}

//Slider

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
});
