$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    $(".navbar-item").click(function() {
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
});
/*
var body = $('body');
var toggle = $('.register-menu');
var list = $('.register-list');
var click_count = 0;
var register_click = 0;
var hamburger_click = 0;

toggle.unbind('click').on("click", function() {
  $(this).toggleClass('is-closed');
  console.log(toggle);
  if(!$(this).hasClass('is-closed')) {
      //rem = click_count%2;
      body.addClass('is-open');
      list.removeClass('is-invisible');
  } else {
      body.removeClass('is-open');
      list.addClass('is-invisible');
  }
});

window.onclick = function(event) {
  if (navbarMenu.hasClass('is-active')) {
    if(body.hasClass('is-open')) {
      register_click += 1;
      console.log('register-click : ',register_click);
      if (register_click%2 == 0) {
        body.removeClass('is-open');
        list.addClass('is-invisible');
        toggle.toggleClass('is-closed');
      }
    } else {
      hamburger_click += 1;
      if (hamburger_click%2 == 0) {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      }
    }
  } else {
    click_count += 1;
    if (click_count%2 == 0) {
      body.removeClass('is-open');
      list.addClass('is-invisible');
      toggle.toggleClass('is-closed');
    }
  }
}
*/

/*
var body = $("body");
var burger = document.querySelector(".burger");
var menu = document.querySelector("#" + burger.dataset.target);
var navbarItem = document.querySelectorAll(".navbar-item");
if (navbarItem) {
  navbarItem.forEach(function(el) {
    if (!el.innerHTML.includes("REGISTER")) {
      //To check if not register and remove is-active
      el.addEventListener("click", function() {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      });
    } else {
      var registerList = document.querySelector(".register-list");
      var registerMenu = document.querySelector(".register-menu");
      var registerItems = document.querySelectorAll(".list-text");
      if (registerItems) {
        registerItems.forEach(function(item) {
          item.addEventListener("click", function() {
            registerMenu.classList.toggle("is-closed");
            registerList.classList.toggle("is-invisible");
            burger.classList.toggle("is-active");
            menu.classList.toggle("is-active");
            body.removeClass("is-open");
          });
        });
      }
    }
  });
}
*/