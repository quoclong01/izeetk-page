window.onload = function () {
  let slider = document.querySelector(".slider");
  let slides = document.querySelector(".slider-menu");
  let slideLi = Array.from(
    document.querySelectorAll(".slider .slider-menu .slider-item")
  );
  let next = document.querySelector(".slider #next");
  let prev = document.querySelector(".slider #prev");
  let counter = 1;
  let dots = document.querySelector(".slider #dots");
  let time = 3000;
  let dot;

  // PROJECT LIST
  let projectLi = Array.from(
    document.querySelectorAll(".project-main .project-list")
  );
  let projectDots = document.querySelector(".project-dots");
  let projectMain = document.querySelector(".project-main");
  let projectDot;
  for (i = 0; i < slideLi.length; i++) {
    dot = document.createElement("li");
    dots.appendChild(dot);
    dot.value = i;
  }
  dot = dots.getElementsByTagName("li");
  dot[0].classList.add("active");

  for (i = 0; i < projectLi.length; i++) {
    projectDot = document.createElement("li");
    projectDots.appendChild(projectDot);
    projectDot.value = i;
  }
  projectDot = Array.from(projectDots.getElementsByTagName("li"));
  projectDot[0].classList.add("active");

  function handleNext() {
    if (counter == slideLi.length) {
      slideLi[0].style.marginLeft = `0%`;
      counter = 1;
    } else if (counter >= 1) {
      slideLi[0].style.marginLeft = `-${counter * 100}%`;
      counter++;
    }
    if (counter == 1) {
      dot[slideLi.length - 1].classList.remove("active");
      dot[0].classList.add("active");
    } else if (counter > 1) {
      dot[counter - 2].classList.remove("active");
      dot[counter - 1].classList.add("active");
    }
  }

  function handlePrev() {
    if (counter == 1) {
      slideLi[0].style.marginLeft = `-${(slideLi.length - 1) * 100}%`;
      counter = slideLi.length;
      dot[0].classList.remove("active");
      dot[slideLi.length - 1].classList.add("active");
    } else if (counter <= slideLi.length) {
      counter = counter - 2;
      slideLi[0].style.marginLeft = `-${counter * 100}%`;
      counter++;
      dot[counter].classList.remove("active");
      dot[counter - 1].classList.add("active");
    }
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function (e) {
      dot[counter - 1].classList.remove("active");
      counter = e.target.value + 1;
      dot[e.target.value].classList.add("active");
      slideLi[0].style.marginLeft = "-" + (counter - 1) * 100 + "%";
    });
  }
  let projectWidth = projectLi[0].clientWidth;
  let projectCounter = 0;
  projectDot.forEach((el, i) => {
    el.addEventListener("click", () => {
      projectDot[projectCounter].classList.remove("active");
      projectCounter = i;
      projectDot[i].classList.add("active");
      projectMain.style.transition = "all 0.3s ease-in-out";
      projectMain.style.transform = `translateX(${-projectCounter * projectWidth}px)`;
    });
  });

  next.addEventListener("click", handleNext);
  prev.addEventListener("click", handlePrev);

  //   let autoPlay = setInterval(handleNext, time);
  //   slider.onmouseover = function () {
  //     autoPlay = clearInterval(autoPlay);
  //   };

  //   slider.onmouseout = function () {
  //     autoPlay = setInterval(handleNext, time);
  //   };
};
