(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p:""};e.d({},{O:()=>y});const t=e.p+"6666407ac3aa5af1d5de.jpg";var n={baseURL:"https://mesto.nomoreparties.co/v1/wff-cohort-2",headers:{authorization:"05b13b30-59e2-48ae-8592-77aaf3426b66","Content-Type":"application/json"}},o={name:"Жак-Ив Кусто",about:"Исследователь океана",avatar:t,_id:"-1"},r=[{name:"Архыз",link:e.p+"156d07d84524cc942d68.jpg",owner:{_id:"-1"}},{name:"Челябинская область",link:e.p+"167b0005add1694393db.jpg",owner:{_id:"-1"}},{name:"Иваново",link:e.p+"50bb648b47735ffba9eb.jpg",owner:{_id:"-1"}},{name:"Камчатка",link:e.p+"e2daa86be296ebffd99c.jpg",owner:{_id:"-1"}},{name:"Холмогорский район",link:e.p+"d75cf55cc6dcd72e4e9a.jpg",owner:{_id:"-1"}},{name:"Байкал",link:e.p+"99b6e21b94798ec54759.jpg",owner:{_id:"-2"}}];function c(e,t,n,o,r){var c=y.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__delete-button"),i=c.querySelector(".card__like-button"),s=c.querySelector(".card__like-counter");return a.src=e.link,a.alt=e.name,c.querySelector(".card__title").textContent=e.name,u.addEventListener("click",(function(n){return t(n,e)})),i.addEventListener("click",(function(t){return n(t,e,s)})),s.textContent=e.likes.length,a.addEventListener("click",(function(t){return o(e)})),e.owner._id!==r._id&&(u.style.display="None"),e.likes.some((function(e){return e._id===r._id}))&&i.classList.add("card__like-button_is-active"),c}function a(e,t){var o;(o=t._id,fetch("".concat(n.baseURL,"/cards/").concat(o),{headers:n.headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){return e.target.closest(".card").remove()})).catch((function(e){return console.log("Ошибка удаления карточки ".concat(e))}))}function u(e,t,o){var r;e.target.classList.toggle("card__like-button_is-active")?(r=t._id,fetch("".concat(n.baseURL,"/cards/likes/").concat(r),{headers:n.headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){o.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка лайка карточки ".concat(e))})):function(e){return fetch("".concat(n.baseURL,"/cards/likes/").concat(e),{headers:n.headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(t._id).then((function(e){o.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка удаления лайка карточки ".concat(e))}))}function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s)}function s(e){"Escape"==e.key&&l(document.querySelector(".popup_is-opened"))}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}var d=/^[a-zа-яё\s\-]*$/i;function p(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n.inactiveButtonClass):t.classList.add(n.inactiveButtonClass)}function f(e,t,n){var o=e.querySelector(".".concat(t.name,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}function m(e,t){Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(n){return f(e,n,t)}))}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var y=document.querySelector("#card-template").content,v=document.querySelector(".places__list"),h=document.querySelector(".profile__avatar-button"),b=document.querySelector(".popup_type_edit_avatar"),S=document.forms["edit-avatar"],g=S.elements.link,k=document.querySelector(".profile__image"),C=b.querySelector(".popup__button"),L=document.querySelector(".profile__edit-button"),q=document.querySelector(".popup_type_edit"),j=document.forms["edit-profile"],E=j.elements.name,x=j.elements.description,w=q.querySelector(".popup__button"),A=document.querySelector(".profile__title"),P=document.querySelector(".profile__description"),O=document.querySelector(".profile__image"),U=document.querySelector(".profile__add-button"),R=document.querySelector(".popup_type_new-card"),T=document.forms["new-place"],I=T.elements["place-name"],B=T.elements.link,D=R.querySelector(".popup__button"),N=document.querySelector(".popup_type_image"),J=N.querySelector(".popup__image"),M=N.querySelector(".popup__caption"),z=(document.querySelector(".popup_type_remove_card"),document.forms["remove-card"],document.querySelectorAll(".popup")),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function V(e){J.src=e.link,J.alt=e.name,M.textContent=e.name,i(N)}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);p(n,o,e),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){["name","description","place-name"].includes(t.name)&&!d.test(t.value)?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.name,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(t,r,e),p(n,o,e)}))}))}))}(H),h.addEventListener("click",(function(e){g.value=k.style.backgroundImage.slice(4,-1).replace(/"/g,""),i(b),m(S,H)})),S.addEventListener("submit",(function(e){var t;e.preventDefault(),C.textContent="Сохранение...",(t=g.value,fetch("".concat(n.baseURL,"/users/me/avatar"),{headers:n.headers,method:"PATCH",body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){k.style.backgroundImage='url("'.concat(e.avatar,'")')})).catch((function(e){return console.log(e)})).finally((function(){l(b),C.textContent="Сохранить"}))})),L.addEventListener("click",(function(e){E.value=A.textContent,x.value=P.textContent,i(q),m(j,H)})),j.addEventListener("submit",(function(e){var t,o;e.preventDefault(),w.textContent="Сохранение...",(t=E.value,o=x.value,fetch("".concat(n.baseURL,"/users/me"),{headers:n.headers,method:"PATCH",body:JSON.stringify({name:t,about:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){A.textContent=e.name,P.textContent=e.about})).catch((function(e){return console.log(e)})).finally((function(){l(q),w.textContent="Сохранить"}))})),U.addEventListener("click",(function(e){i(R),m(T,H)})),T.addEventListener("submit",(function(e){var t,o;e.preventDefault(),D.textContent="Сохранение...",(t=I.value,o=B.value,fetch("".concat(n.baseURL,"/cards"),{headers:n.headers,method:"POST",body:JSON.stringify({name:t,link:o})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){v.prepend(c(e,a,u,V,e.owner))})).catch((function(e){return console.log(e)})).finally((function(){T.reset(),l(R),D.textContent="Сохранить"}))})),z.forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&l(e)}))})),Promise.all([fetch("".concat(n.baseURL,"/users/me"),{headers:n.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(n.baseURL,"/cards"),{headers:n.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];A.textContent=r.name,P.textContent=r.about,O.style.backgroundImage='url("'.concat(r.avatar,'")'),i.forEach((function(e){v.append(c(e,a,u,V,r))}))})).catch((function(e){console.error("Ошибка получения данных пользователя и карточек:",e),A.textContent=o.name,P.textContent=o.about,O.style.backgroundImage='url("'.concat(o.avatar,'")'),r.forEach((function(e){v.append(c(e,a,u,V,o))}))}))})();