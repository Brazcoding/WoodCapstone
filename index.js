import { Header, Nav, Main, Footer } from "./Components"
import { GalleryPictures, AddPicturesToGallery } from "./lib";

function render (st) {
  document.querySelector("#root").innerHTML=`
  ${Header(st)}
  ${Nav(Nav.Links)}
  ${Footer()}
  ${Main(st)}`;
  addEventListener()
}
render(state.Home)
// add menu toggle to bars icon in nav bar
function addEventListener() {
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
})};

// handle form submission
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});
