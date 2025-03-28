
  let btns = document.querySelectorAll(".btn");
  let paginationWrapper = document.querySelector(".pagination-wrapper");
  let bigDotContainer = document.querySelector(".big-dot-container");
  let littleDot = document.querySelector(".little-dot");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", btnClick);
  }

  function btnClick() {
    if (this.classList.contains("btn--prev")) {
      paginationWrapper.classList.add("transition-prev");
    } else {
      paginationWrapper.classList.add("transition-next");
    }

    var timeout = setTimeout(cleanClasses, 500);
  }

  function cleanClasses() {
    if (paginationWrapper.classList.contains("transition-next")) {
      paginationWrapper.classList.remove("transition-next");
    } else if (paginationWrapper.classList.contains("transition-prev")) {
      paginationWrapper.classList.remove("transition-prev");
    }
  }

