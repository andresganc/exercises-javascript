import { App } from "./App.js";

const d = document,
  w = window;

d.addEventListener("DOMContentLoaded", App);

w.addEventListener("hashchange", App);

d.addEventListener("click", (e) => {
  if (e.target.matches(".post-card a")) {
    localStorage.setItem("wpPostId", e.target.dataset.id);
    console.log(e.target.dataset.id);
  }
});
