import { cardTemplate } from "../scripts/index.js";

function createCard(card, deleteFnc, likeFnc, openImagePopup) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardElement.querySelector(".card__image");

  cardImg.src = card.link;
  cardImg.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteFnc);
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", likeFnc);

  cardImg.addEventListener("click", (evt) => openImagePopup(card));

  return cardElement;
}

function deleteCard(event) {
  event.target.closest(".card").remove();
}

function toggleLike(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, toggleLike };
