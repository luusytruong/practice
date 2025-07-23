import { $, $$ } from "./utils.js";

function handleClick() {
  console.log(this);
}

$$(".btn")?.forEach((e) => e?.addEventListener("click", handleClick));

const dropdownItem = $(".header__item--dropdown");
const dropdownMenu = $(".header__dropdown-menu");
let timeoutId;

if (dropdownItem && dropdownMenu) {
  dropdownItem.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    dropdownMenu.classList.add("active");
  });
  dropdownItem.addEventListener("mouseleave", () => {
    dropdownMenu.classList.add("animation");
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove("active", "animation");
    }, 240);
  });
} else {
  console.warn("Khong du phan tu thuc hien truy van");
}
