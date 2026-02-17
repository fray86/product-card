/*4. Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. Он будет принимать 1 параметр через конструктор - айди модального окна. Внутри класса будут методы:
  I. Для открытия модального окна.
 II. Для закрытия модального окна.
 III. Для проверки, открыто ли сейчас модальное окно.
 IV. Метод, который слушает кнопку (крестик) для закрытия модалки
 */

export class Modal {
  constructor(selectorModal) {
    this.modal = document.querySelector(selectorModal);
    this.overlay = document.querySelector(".overlay");

    if (this.modal) {
      this.closeBtn = this.modal.querySelector(".modal-close-btn");
      this.addEventListeners();
    }
  }

  openModal() {
    if (this.isOpen()) return;
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("modal-showed");
  }

  closeModal() {
    if (this.isOpen()) {
      this.modal.classList.remove("modal-showed");
      this.overlay.classList.remove("modal-showed");
    }
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  addEventListeners() {
      this.closeBtn?.addEventListener("click", () => this.closeModal());
      this.overlay?.addEventListener('click', () => this.closeModal());    
  }
}
