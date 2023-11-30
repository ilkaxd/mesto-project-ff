import "../pages/index.css";

import { initialCards } from "../components/cards.js";
import { createCard, toggleLike, deleteCard } from "../components/card.js";
import { openPopup, closePopup } from "../components/modal.js";

export const cardTemplate = document.querySelector("#card-template").content;

const placesList = document.querySelector(".places__list");

const profileEditBtn = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const editProfileForm = document.forms["edit-profile"];
const nameInput = editProfileForm.elements.name;
const descriptionInput = editProfileForm.elements.description;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardAddBtn = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardForm = document.forms["new-place"];
const placeNameInput = newCardForm.elements["place-name"];
const imageSrcInput = newCardForm.elements.link;

const imagePopup = document.querySelector(".popup_type_image");
const image = imagePopup.querySelector(".popup__image");
const caption = imagePopup.querySelector(".popup__caption");

const popups = document.querySelectorAll(".popup");

profileEditBtn.addEventListener("click", (evt) => {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(editProfilePopup);
});

cardAddBtn.addEventListener("click", (evt) => {
  openPopup(newCardPopup);
});

editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closePopup(editProfilePopup);
});

function viewImagePopup(card) {
  image.src = card.link;
  image.alt = card.name;
  caption.textContent = card.name;

  openPopup(imagePopup);
}

newCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  placesList.prepend(
    createCard(
      {
        name: placeNameInput.value,
        link: imageSrcInput.value,
      },
      deleteCard,
      toggleLike,
      viewImagePopup
    )
  );
  newCardForm.reset();
  closePopup(newCardPopup);
});

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_is-opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});

initialCards.forEach((card) => {
  placesList.append(createCard(card, deleteCard, toggleLike, viewImagePopup));
});
