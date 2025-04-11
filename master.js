const HEADER = document.querySelector("header");

const IMAGE_ASPECT_RATIO = 94 / 193;

function resizeBackground() {
  HEADER.style.width = document.documentElement.clientWidth + "px";
  HEADER.style.height = (document.documentElement.clientWidth * IMAGE_ASPECT_RATIO) + "px";
}

function parallaxEffect()
{
  HEADER.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
}

window.addEventListener("resize", resizeBackground);

window.addEventListener("scroll", parallaxEffect);

document.querySelectorAll(".image-wrapper img").forEach(image =>
{
  image.addEventListener("click", () =>
  {
    window.open(image.src, "_blank");
  });
});

resizeBackground();

window.scroll(0, 0);
