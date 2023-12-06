import { cardTemplate } from "../index.js";
import { putLike, deleteLike, deleteCard as deleteCardApi } from "./api.js";

function createCard(card, deleteFnc, likeFnc, openImagePopup, user) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardElement.querySelector(".card__image");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const likeBtn = cardElement.querySelector(".card__like-button");
  const likeCounter = cardElement.querySelector(".card__like-counter");

  cardImg.src = card.link;
  cardImg.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardDeleteBtn.addEventListener("click", (evt) => deleteFnc(evt, card));
  likeBtn.addEventListener("click", (evt) => likeFnc(evt, card, likeCounter));

  likeCounter.textContent = card.likes.length;

  cardImg.addEventListener("click", (evt) => openImagePopup(card));

  if (card.owner._id !== user._id) {
    cardDeleteBtn.style.display = "None";
  }

  if (card.likes.some((like) => like._id === user._id)) {
    likeBtn.classList.add("card__like-button_is-active");
  }

  return cardElement;
}

function deleteCard(event, card) {
  deleteCardApi(card._id)
    .then(() => event.target.closest(".card").remove())
    .catch((err) => console.log(`Ошибка удаления карточки ${err}`));
}

function toggleLike(event, card, likeCounter) {
  if (event.target.classList.toggle("card__like-button_is-active")) {
    putLike(card._id)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
      })
      .catch((err) => console.log(`Ошибка лайка карточки ${err}`));
  } else {
    deleteLike(card._id)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
      })
      .catch((err) => console.log(`Ошибка удаления лайка карточки ${err}`));
  }
}

export { createCard, deleteCard, toggleLike };
