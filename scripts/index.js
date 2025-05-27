const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editCloseButton = editProfileModal.querySelector(".modal__close-btn");
const profileFormElement = editProfileModal.querySelector(".modal__form");
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
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

const addCardFormElement = newPostModal.querySelector(".modal__form");
const cardImageInput = addCardFormElement.querySelector("#card-image-input");
const cardCaptionInput = addCardFormElement.querySelector(
  "#card-caption-input"
);

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
});

editCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostAddButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;

  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(cardImageInput.value);
  console.log(cardCaptionInput.value);
  closeModal(newPostModal);
  addCardFormElement.reset();
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
