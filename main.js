const toggle = document.getElementById("toggle");
const priceMonth = document.querySelectorAll(".price__month");
const priceYear = document.querySelectorAll(".price__year");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    priceYear.forEach((price) => price.classList.add("hidden"));
    priceMonth.forEach((price) => price.classList.remove("hidden"));
  } else {
    priceYear.forEach((price) => price.classList.remove("hidden"));
    priceMonth.forEach((price) => price.classList.add("hidden"));
  }
});
