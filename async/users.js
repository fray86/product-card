export class User {
  constructor(userList, userTemplate) {
    this.userList = document.querySelector(userList);
    this.userTemplate = document.querySelector(userTemplate);
    this.users = [];
    this.#initEvents();
    this.usersCount = 0;
  }

  async fetchUsers() {
    try {
      const response = await fetch("/async/users.json");
      const users = await response.json();
      return users ?? [];
    } catch (error) {
      alert("Данные не загрузились", error);
      throw error;
    }
  }

  async loadUsers() {
    const storageData = localStorage.getItem("users");
    if (storageData) {
      this.users = JSON.parse(storageData);
    } else {
      this.users = await this.fetchUsers();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      localStorage.setItem("users", JSON.stringify(this.users));
    }
    this.allUsersCount= this.users.length;
    this.renderUsersCards(this.users);
    this.loadControlUsersBtns();
    this.hideLoader();
  }

  loadControlUsersBtns() {
    const controlBtns = document.querySelector(".btn-controls");
    controlBtns.classList.add("btn-controls-showed");
  }

  hideLoader() {
    const loadingSpan = document.querySelector(".data-loaded-info");
    loadingSpan?.remove();
  }

  renderUsersCards(cards) {
    this.userList.replaceChildren();
    cards.forEach((user) => {
      const userFragment = this.userTemplate.content.cloneNode(true);
      const deleteBtn = userFragment.querySelector(".delete-user");
      const userCard = userFragment.querySelector(".user-container");
      userFragment.querySelector(".username").textContent = `Имя: ${user.name}`;
      userFragment.querySelector(".surname").textContent =`Фамилия: ${user.surname}`;
      userFragment.querySelector(".email").textContent = `Почта: ${user.email}`;
      userFragment.querySelector(".age").textContent = `Возраст: ${user.age}`;
      deleteBtn.addEventListener("click", () => {
        const userId = Number(user.id);
        this.deleteUser(userId, userCard);
      });
      this.userList.appendChild(userFragment);
    });
  }

  #initEvents() {
    const deleteAllBtn = document.querySelector(".delete-all-users");
    deleteAllBtn.addEventListener("click", () => this.deleteAllUsers());

    const showAllBtn = document.querySelector(".get-all-users");
    showAllBtn.addEventListener("click", () => this.getAllUsers());
  }

  deleteUser(id, card) {
    card.remove();
    this.users = this.users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  deleteAllUsers() {
    if (this.users.length === 0) {
      alert("Некого удалять");
      return;
    }
    this.userList.replaceChildren();
    this.users = [];
    localStorage.removeItem("users");
  }

  async getAllUsers() {
    if (this.users.length === this.allUsersCount) {
      alert("Показаны все пользователи");
      return;
    } else {
      localStorage.removeItem("users");
      await this.loadUsers();
    }
  }
}
