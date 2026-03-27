export class User {
  constructor(userList, userTemplate) {
    this.userList = document.querySelector(userList);
    this.userTemplate = document.querySelector(userTemplate);
    this.users = [];
    this.#initEvents();
  }

  async fetchUsers() {
    const cachedUsers = localStorage.getItem("users");
    if (cachedUsers) {
      this.hideLodaing();
      return JSON.parse(cachedUsers);
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("/async/users.json");
      const users = await response.json();
      localStorage.setItem("users", JSON.stringify(users));
      return users ?? [];
    } catch (error) {
      alert("Данные не загрузились", error);
      return [];
    } finally {
      this.hideLodaing();
    }
  }

  async loadUsers() {
    const FetchedUsers = await this.fetchUsers();
    this.users = FetchedUsers;
    this.renderUsersCards(this.users);
    this.loadControlUsersBtns();
  }

  loadControlUsersBtns() {
    const controlBtns = document.querySelector(".btn-controls");
    controlBtns.classList.add("btn-controls-showed");
  }

  hideLodaing() {
    const loadingSpan = document.querySelector(".data-loaded-info");
    loadingSpan?.remove();
  }

  renderUsersCards(cards) {
    cards.forEach((user) => {
      const userFragment = this.userTemplate.content.cloneNode(true);
      userFragment.querySelector(".username").textContent = `Имя: ${user.name}`;
      userFragment.querySelector(".surname").textContent = `Фамилия: ${user.surname}`;
      userFragment.querySelector(".email").textContent = `Почта: ${user.email}`;
      userFragment.querySelector(".age").textContent = `Возраст: ${user.age}`;
      userFragment.querySelector(".delete-user").dataset.id = user.id;
      this.userList.appendChild(userFragment);
    });
  }

  #initEvents() {
    this.userList.addEventListener("click", (event) => {
      const isDeleteBtn = event.target.closest(".delete-user");
      if (!isDeleteBtn) return;
      const card = isDeleteBtn.closest(".user-container");
      this.deleteUser(+isDeleteBtn.dataset.id, card);
    });

    const delAllBtn = document.querySelector(".delete-all-users");
    delAllBtn.addEventListener("click", () => this.deleteAllUsers());

    const showAllBtn = document.querySelector(".get-all-users");
    showAllBtn.addEventListener("click", () => this.getAllUsers());
  }

  deleteUser(id, card) {
    card.remove();
    this.users = this.users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  deleteAllUsers() {
    if 
    (this.users.length === 0) 
    {alert('Некого удалять')
      return;
    }
    this.userList.replaceChildren();
    this.users = [];
    localStorage.removeItem("users");
  }

  async getAllUsers() {
    localStorage.removeItem("users");
    const allusers = await this.fetchUsers();
    if (this.users.length >= allusers.length) {
      alert("Показаны все пользователи");
      return;
    }
    this.userList.replaceChildren();
    await this.loadUsers();
  }
}
