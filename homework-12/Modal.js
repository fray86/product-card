export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector("#modal-close-button");
    this.handleCloseClick = () => this.close();
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    this.#initClose();
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.#removeEventListeners();
  }

  #removeEventListeners() {
    this.closeButton.removeEventListener("click", this.handleCloseClick);
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener("click", this.handleCloseClick);
    }
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      this.open();
    });
  }

  #initClose() {
    this.closeButton.addEventListener("click", this.handleCloseClick);
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.handleCloseClick);
    }
  }
}
