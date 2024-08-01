"use strict";
const tabs = document.querySelectorAll(`section[class^='tab-']`);
const tabButtons = document.querySelector(".tab");
console.log(tabButtons);
tabButtons.addEventListener("click", function (e) {
  const nearEast = e.target.closest("label");
  console.log(nearEast);
  if (nearEast) {
    {
      tabs.forEach(function (tab) {
        tab.classList.add("hidden");
        if (tab.classList.contains(nearEast.id)) tab.classList.remove("hidden");
      });
    }
  }
});
