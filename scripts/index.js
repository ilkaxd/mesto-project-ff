// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function creatCard(card, deleteFnc) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImg = cardElement.querySelector('.card__image');

    cardImg.src = card.link;
    cardImg.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteFnc);

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteFnc(card) {
    card.target.parentElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(card => {
    placesList.append(creatCard(card, deleteFnc));
});