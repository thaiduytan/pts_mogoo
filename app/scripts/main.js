// Slick slider
$(document).ready(function () {
    $(".quote-contaner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
          },
        },
      ],
      // slidesToShow: 3,
      // slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
    });
  });
  window.addEventListener("load", function () {
  
    //------------header---------------------
    const hamberger = document.querySelector(".header-toggle");
    const headerMenu = document.querySelector(".header-menu")
    const headerClose = document.querySelector(".header-close");
    const headerItem = document.querySelectorAll(".header-menu-item")
  
    hamberger.addEventListener("click", function () {
      headerMenu.classList.add("is-show");
    });
  
    function removeMenu() {
      headerMenu.classList.remove("is-show");
    }
  
    headerClose.addEventListener("click", function () {
      removeMenu();
    });
  
    headerItem.forEach((item => item.addEventListener("click", function () {
      removeMenu();
    })))
  
    document.addEventListener("click", function (e) {
      if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
        removeMenu();
      }
    })
  
  
    //------------WE DO---------------------
    //imgae-hover-effect
    const imageCover = document.querySelector(".wedo-cover ");
    imageCover.addEventListener("mousemove", handleHoverImage);
    const imageWrapper = document.querySelector(".wedo-media");
    let imageWraperWidth = imageWrapper.offsetWidth;
    let imageWraperHeight = imageWrapper.offsetHeight;
    const image = document.querySelector(".wedo-image");
  
    function handleHoverImage(e) {
      const pX = e.pageX - imageWrapper.offsetLeft;
      const pY = e.pageY - imageWrapper.offsetTop;
  
      let imageWidth = image.offsetWidth;
      let imageHeight = image.offsetHeight;
  
      let spaceX = (imageWidth / 2 - imageWraperWidth) * 2;
      let spaceY = (imageHeight / 2 - imageWraperHeight) * 2;
      imageWidth = imageWidth + spaceX;
      imageHeight = imageHeight + spaceY;
  
      let ratioX = (imageWidth / imageWraperWidth) / 2;
      let ratioY = (imageHeight / imageWraperHeight) / 2;
  
  
      let x = pX * ratioX;
      let y = pY * ratioY;
  
      image.style = `left:${-x}px; top:${-y}px; width: 1140px; height: auto; max-height: unset; transform: none`;
    }
    imageCover.addEventListener("mouseleave", handleLeaveImage);
    function handleLeaveImage() {
      image.style = "";
    }
  
  
    //accordin
    const wedoItemHeader = document.querySelectorAll(".wedo-item-header");
    const wedoItemText = document.querySelectorAll(".wedo-item-text")
  
    wedoItemHeader.forEach(item => item.addEventListener("click", handleClickAccordion));
  
    function handleClickAccordion(e) {
      const content = e.currentTarget.nextElementSibling.firstElementChild;
      const icon = e.currentTarget.lastElementChild;
      const icons = document.querySelectorAll(".wedo-item-arrow")
  
      if (content.classList.contains("is-active")) {
        content.classList.remove("is-active");
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      }
      else {
        wedoItemText.forEach(function (item) {
          item.classList.remove("is-active")
          icons.forEach(function (icon) {
            icon.classList.remove("fa-angle-up")
            icon.classList.add("fa-angle-down")
          })
        })
        content.classList.toggle("is-active");
        icon.classList.toggle("fa-angle-down");
        icon.classList.toggle("fa-angle-up");
      }
    }
  });
  