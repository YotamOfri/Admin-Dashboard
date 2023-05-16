// def vars
const menu_btn = document.querySelector(".bx-menu");
const menu_text = document.querySelectorAll("span");
const hero_section = document.querySelector(".hero");
const header_section = document.querySelector(".header-c");
const sidebar_section = document.querySelector(".sidebar-contianer");
const add_page_container = document.querySelector(".add-page-container");
const add_page = document.querySelector(".add-page");
const new_btn = document.querySelector(".btns").firstElementChild;
const input_number_value = document.querySelector("#pages");
const card_container = document.querySelector(".card-container");
const bookslist = [];
// sidebar Function
menu_btn.addEventListener("click", () => {
  menu_text.forEach((span) => {
    span.classList.toggle("a-text");
  });
  hero_section.classList.toggle("ch-layout-right");
  header_section.classList.toggle("ch-layout-right");
  sidebar_section.classList.toggle("ch-layout-left");
});
// add_page function
new_btn.addEventListener("click", () => {
  add_page_container.style.display = "block";
});
if (!add_page_container.checkVisibility()) {
  add_page_container.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-page-container")) {
      add_page_container.style.display = "none";
    }
  });
}
// change input number increment and decrement

document.querySelector(".decrease").addEventListener("click", () => {
  if (parseInt(input_number_value.value).toString() === "NaN")
    input_number_value.value = 0;
  if (input_number_value.value === "0") return;
  input_number_value.value -= 1;
});
document.querySelector(".increase").addEventListener("click", () => {
  if (parseInt(input_number_value.value).toString() === "NaN")
    input_number_value.value = 0;
  else input_number_value.value = parseInt(input_number_value.value) + 1;
});
// books functions
function createbook() {
  book = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    pages: document.querySelector("#pages").value,
    checkbox: document.querySelector("#checkbox").value,
  };
  bookslist.push(book);
}
function addBook() {
  while (card_container.firstElementChild)
    card_container.firstElementChild.remove();
  bookslist.forEach((book, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("h1");
    title.innerText = book.title;
    let author = document.createElement("h1");
    author.innerText = book.author;
    let pages = document.createElement("p");
    pages.innerText = book.pages;
    let card_btns = document.createElement("div");
    card_btns.classList.add("card-btns");
    let checkbox = document.createElement("button");
    checkbox.classList.add("haveread-card");
    checkbox.innerText = "Read";
    let remove = document.createElement("button");
    remove.classList.add("remove-card");
    remove.addEventListener("click", () => {
      bookslist.splice(index, 1);
      while (card_container.firstElementChild)
        card_container.firstElementChild.remove();
      addBook();
    });
    remove.innerText = "Remove";
    card_btns.appendChild(checkbox);
    card_btns.appendChild(remove);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(card_btns);
    card_container.appendChild(card);
  });
}
function clearform() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#checkbox").value = "off";
}
document
  .querySelector(".add-page-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    createbook();
    addBook(book);
    clearform();
  });
