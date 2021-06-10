
export function PostTemplate(props) {
  let { content, title } = props;

  return `
    <section class="post-page">
      <aside>
        <h2>${title.rendered}</h2>
        <a href="#/">Regresar</a>
      </aside>
      <hr>
      <article>${content.rendered}</article>
    </section>
  `;
}
