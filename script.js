document.querySelectorAll(".list-group-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".list-group-item.active")?.classList.remove("active");
    item.classList.add("active");
  });
});
