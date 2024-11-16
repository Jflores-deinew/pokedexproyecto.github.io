const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

inputElement.addEventListener("input",()=>{handleInputChange(inputElement);});
search_icon.addEventListener("click", handleSearchCloseOnClick);
sort_wrapper.addEventListener("click", handleSortIconOnClick);

function handleInputChange(inputElement) {
  const inputValue = inputElement.value;
  /*const closeIcon = document.querySelector("#search-close-icon");

  if (inputValue) {
    closeIcon.classList.add("search-close-icon-visible");
  } else {
    closeIcon.classList.remove("search-close-icon-visible");
  }
  **/
  if (inputValue !== "") {
    document
      .querySelector("#search-close-icon")
      .classList.add("search-close-icon-visible");
  } else {
    document
      .querySelector("#search-close-icon")
      .classList.remove("search-close-icon-visible");
  }
}


function handleSearchCloseOnClick() {
	/*
if (inputValue) { closeIcon.classList.add("search-close-icon-visible");
 } else {
    closeIcon.classList.remove("search-close-icon-visible");
*/
const inputValue = inputElement.value;

  if (inputValue !== "") {
    document
    .querySelector("#search-close-icon")
    .classList.add("search-close-icon-visible");
  } else {
    document
    .querySelector("#search-close-icon")
    .classList.remove("search-close-icon-visible");
  }
}
function handleSortIconOnClick() {
  document
  .querySelector(".filter-wrapper")
  .classList.toggle("filter-wrapper-open");
  document.querySelector("body").classList.toggle("filter-wrapper-overlay");}
