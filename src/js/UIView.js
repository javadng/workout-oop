export default class UIView {
  _toggleMenu = document.querySelector(".toggler__menu");
  _menuOverlay = document.querySelector(".menu__overlay");
  _closeMenuBtn = document.querySelector(".close__menu--btn");

  _modalClose = document.querySelector(".modal i.fa-close");
  _modalDetailBtn = document.querySelector(".modal_datail_close");
  _modalOverlay = document.querySelector(".modal__overlay");
  _modalElem = document.querySelector(".modal");

  _menu = document.querySelector(".menu");
  _modalDetailElem = document.querySelector(".modal__info");
  _modalElem = document.querySelector(".modal");

  _aboutAppBtn = document.querySelector(".about__app");

  constructor() {
    // menu handler
    this._toggleMenu.addEventListener(
      "click",
      this._toggleMenuHandler.bind(this)
    );

    this._menuOverlay.addEventListener(
      "click",
      this._toggleMenuHandler.bind(this)
    );

    this._closeMenuBtn.addEventListener(
      "click",
      this._toggleMenuHandler.bind(this)
    );

    //modal close
    this._modalClose.addEventListener(
      "click",
      this._modalCloseHandler.bind(this)
    );

    this._modalDetailBtn.addEventListener(
      "click",
      this._modalDetailClose.bind(this)
    );

    this._modalOverlay.addEventListener(
      "click",
      this._modalCloseHandler.bind(this)
    );

    this._aboutAppBtn.addEventListener(
      "click",
      this._modalHandler.bind(this, this._modalDetailElem)
    );

    document.addEventListener(
      "keydown",
      function (e) {
        if (e.key === "Escape") this._toggleMenuHandler();
      }.bind(this)
    );
  }

  _toggleMenuHandler() {
    this._menu.classList.toggle("menu__isActive");
    this._menuOverlay.classList.toggle("overlay--active");
  }

  _modalCloseHandler() {
    this._modalElem.classList.add("hidden_modal");
    this._modalDetailElem.classList.add("hidden_modal");
    this._modalOverlay.classList.remove("overlay--active");
  }

  _modalDetailClose() {
    this._modalDetailElem.classList.add("hidden_modal");
    this._modalOverlay.classList.remove("overlay--active");
  }

  _modalHandler(modalElement) {
    modalElement.classList.remove("hidden_modal");
    this._modalOverlay.classList.add("overlay--active");

    if (modalElement.classList.contains("modal"))
      setTimeout(() => {
        modalElement.classList.add("hidden_modal");
        modalOverlay.classList.remove("overlay--active");
      }, 5000);
  }
}
