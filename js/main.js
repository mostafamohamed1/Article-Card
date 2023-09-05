const btn = document.querySelector(".btn");
const share = document.querySelector(".share");
const anchors = document.querySelectorAll("a");

anchors.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
  })
);

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  share.classList.add("open");
});

document.addEventListener("click", function (e) {
  if (e.target === btn) {
    return;
  }
  if (e.target === share) return;

  e.stopPropagation();
  if (share.classList.contains("open")) {
    share.classList.remove("open");
    share.classList.add("close");
    share.addEventListener(
      "animationend",
      function () {
        share.classList.remove("close");
      },
      { once: true }
    );
  }
});
