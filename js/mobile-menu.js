(() => {
    const menuBtnRef = document.querySelector("[mobile-menu-open]");
    const mobileMenuRef = document.querySelector("[mobile-menu]");
    const mobileBtnClose = document.querySelector("[mobile-menu-close]");
  
    menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  
    mobileBtnClose.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  })();



// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");
  
//     menuBtnRef.addEventListener("click", () => {
//       const expanded =
//         menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
//       menuBtnRef.classList.toggle("is-open");
//       menuBtnRef.setAttribute("aria-expanded", !expanded);
  
//       mobileMenuRef.classList.toggle("is-open");
//     });
//   })();