const regex = /^[a-zа-яё\s\-]*$/i;

export function enableValidation(validationConfig) {
  const forms = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  forms.forEach((formElement) => {
    const formInputs = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
    const formBtn = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
    toggleButtonState(formInputs, formBtn, validationConfig);
    formInputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(formElement, inputElement, validationConfig);
        toggleButtonState(formInputs, formBtn, validationConfig);
      });
    });
  });
}
function toggleButtonState(inputList, buttonElement, validationConfig) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => !input.validity.valid);
}

function checkInputValidity(formElement, inputElement, validationConfig) {
  if (
    ["name", "description", "place-name"].includes(inputElement.name) &&
    !regex.test(inputElement.value)
  ) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      validationConfig
    );
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
}

function showInputError(
  formElement,
  inputElement,
  errorMessage,
  validationConfig
) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
}

function hideInputError(formElement, inputElement, validationConfig) {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = "";
}

export function clearValidation(form, validationConfig) {
  const formInputs = Array.from(
    form.querySelectorAll(validationConfig.inputSelector)
  );
  formInputs.forEach((input) => hideInputError(form, input, validationConfig));
}
