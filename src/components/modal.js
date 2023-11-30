export function openPopup(popup) {   
    popup.classList.add("popup_is-opened");
    document.addEventListener('keydown', closeByEscape);
}

export function closePopupClick(evt) {
    if (
        evt.target.classList.contains('popup')
        ||
        evt.target.classList.contains('popup__close')
    ){
        closePopup(evt.currentTarget);
    }
}

function closeByEscape(evt){
    if (evt.key == 'Escape'){
        const openedPopup = document.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
}

export function closePopup(popup){
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
}