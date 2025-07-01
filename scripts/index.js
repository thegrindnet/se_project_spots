const modalSelection = document.querySelectorAll(".modal");

const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");

const profileFormElement = document.forms["edit-profile-form"];
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);
const editProfileNameInput = profileFormElement.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = profileFormElement.querySelector(
  "#profile-description-input"
);

const newPostAddButton = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");

const addCardFormElement = document.forms["new-post-form"];
const cardImageInput = addCardFormElement.querySelector("#card-image-input");
const cardCaptionInput = addCardFormElement.querySelector(
  "#card-caption-input"
);

const cardSubmitBtn = document.querySelectorAll(".modal__submit-btn");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-modal");
const previewCloseBtn = previewModal.querySelector(
  ".modal__close-btn_type_preview"
);
const previewImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

const closeButtons = document.querySelectorAll(".modal__close-btn");

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", function () {
    closeModal(modal);
  });
});

function getCardElement(data) {
  let cardElement = cardTemplate.cloneNode(true);

  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = data.name;
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  cardLikeBtnEl.addEventListener("click", function () {
    cardLikeBtnEl.classList.toggle("card__like-btn_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-btn");
  cardDeleteBtnEl.addEventListener("click", function () {
    cardElement.remove();
    cardElement = null;
  });

  cardImageEl.addEventListener("click", function () {
    openModal(previewModal);
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
  });

  return cardElement;
}

previewCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  resetValidation(profileFormElement, [
    editProfileNameInput,
    editProfileDescriptionInput,
  ]);
  openModal(editProfileModal);
});

newPostAddButton.addEventListener("click", function () {
  openModal(newPostModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;

  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const inputValues = {
    name: cardCaptionInput.value,
    link: cardImageInput.value,
  };
  const cardElement = getCardElement(inputValues);

  cardsList.prepend(cardElement);
  addCardFormElement.reset();
  disabledButton(cardSubmitBtn[1], settings);
  closeModal(newPostModal);
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  modal.addEventListener("click", closeModalOnOverlay);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);

  function renderCard(item, method = "append") {
    cardsList.append(item);
  }

  renderCard(cardElement);
});

function closeModalOnOverlay(evt) {
  if (!evt.target.classList.contains(".modal")) {
    closeModal(evt.target);
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    const activeModal = this.document.querySelector(".modal_is-opened");
    if (activeModal) {
      closeModal(activeModal);
    }
  }
});
