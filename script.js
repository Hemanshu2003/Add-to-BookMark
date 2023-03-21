const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel-content");

//tabs menu event listner

tabs.forEach((tab) =>
  tab.addEventListener("click", function (e) {
    const clicked = e.target.closest(".panel");
    console.log(clicked);

    if (!clicked) return;

    // deactive all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("border-softRed", "border-b-4", "md:border-b-0");
    });

    clicked.classList.add("border-softRed", "border-b-4", "w-full");

    panels.forEach((panel) => panel.classList.add("hidden"));

    //   active a new tab and panel

    //   const classString = e.target.getAttribute("data-target");
    //   document
    //     .getElementById("panels")
    //     .getElementsByClassName(classString)[0]
    //     .classList.remove("hidden");

    console.log(clicked.getAttribute("data-target"));
    document
      .querySelector(`.${clicked.getAttribute("data-target")}`)
      .classList.remove("hidden");
  })
);

// hamburger menu

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./img/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./img/logo-bookmark.svg");
  }
});
