var searchingButton = document.querySelector(".searching-button");

var form = document.querySelector(".modal-searching");

form.classList.remove("modal-form-show");

searchingButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("modal-form-show");
});
