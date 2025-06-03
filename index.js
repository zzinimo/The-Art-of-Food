import Product, { initialProducts } from "./constants.js";

const popupOverlay = document.querySelector(".popup-overlay");
const closeButton = document.querySelector(".close__button");
const submitButton = document.querySelector(".submit__button");
const openButton = document.querySelector(".image__button");
const emailInput = document.getElementById("email");
const form = document.querySelector(".form");

const openModal = (modal) => {
  modal.classList.add("popup-overlay-opened");
};

const closeModal = (modal) => {
  modal.classList.remove("popup-overlay-opened");
};

const showError = (inputElement, errorMessage) => {
  const emailError = document.getElementById("emailError");
  emailError.classList.add("error");
  emailError.textContent = errorMessage;
  inputElement.classList.remove("input-success");
  inputElement.classList.add("input-error");
};

const hideError = (inputElement) => {
  const emailError = document.getElementById("emailError");
  emailError.textContent = "";
  inputElement.classList.remove("input-error");
  inputElement.classList.add("input-success");
};

const checkValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showError(emailInput, "Please enter a valid email.");
  } else {
    hideError(emailInput);
  }
};

const changeButtonState = (buttonElement, inputElement) => {
  if (inputElement.validity.valid) {
    buttonElement.disabled = false;
    buttonElement.classList.remove("disabled");
  } else {
    buttonElement.disabled = true;
    buttonElement.classList.add("disabled");
  }
};

const handleEscapeClose = (event) => {
  if (event.key === "Escape") {
    closeModal(popupOverlay);
    form.reset();
  }
};

emailInput.addEventListener("input", () => {
  checkValidity(emailInput);
  changeButtonState(submitButton, emailInput);
});

openButton.addEventListener("click", () => {
  openModal(popupOverlay);
  changeButtonState(submitButton, emailInput);
});

closeButton.addEventListener("click", () => {
  closeModal(popupOverlay);
  form.reset();
});

submitButton.addEventListener("click", () => {
  form.reset();
  closeModal(popupOverlay);
  alert("Thank you for subscribing!");
});

document.addEventListener("keydown", handleEscapeClose);

popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    closeModal(popupOverlay);
    form.reset();
  }
});

initialProducts.forEach((product) => {
  const newProduct = new Product(product);
  const productElement = newProduct._getProduct();
  document.querySelector(".products__list").append(productElement);
});
