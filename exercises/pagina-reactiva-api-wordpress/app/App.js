import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";
import { PostCard } from "./components/PostCard.js";
import { Loader } from "./components/Loader.js";
import { PostTemplate } from "./components/PostTemplate.js";

export function App() {
  const d = document,
    $root = d.getElementById("root"),
    $posts = d.createElement("section");

  let { hash } = window.location,
    html = "";

  $posts.id = "posts";
  $posts.classList.add("grid-fluid");

  //console.log("Hola Mundo");
  console.log(hash);

  if (!hash || hash === "#/") {
    $root.innerHTML = "";
    $root.appendChild(Title());
    $root.appendChild($posts);
    $root.appendChild(Loader());

    ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        posts.forEach((post) => (html += PostCard(post)));
        $posts.innerHTML = html;
        d.querySelector(".loader").style.display = "none";
      },
    });
  } else {
    $root.innerHTML = "";
    $root.appendChild(Loader());
    ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log("info del Post Solicitado");
        console.log(post);
        $root.innerHTML = PostTemplate(post);
      },
    });
  }
}
