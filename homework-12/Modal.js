export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.handleClick = () => this.close();
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener("click", this.handleClick);
    }
    this.#initClose();
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
    this.overlay.removeEventListener("click", this.handleClick);
    const closeButton = this.modal.querySelector("#modal-close-button");
    closeButton.removeEventListener("click", this.handleClick);
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
    const closeButton = this.modal.querySelector("#modal-close-button");
    closeButton.addEventListener("click", this.handleClick);
  }
}
