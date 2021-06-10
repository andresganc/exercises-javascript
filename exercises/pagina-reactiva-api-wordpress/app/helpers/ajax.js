export function ajax(props) {
  let { url, cbSuccess, cbError } = props;

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      document.getElementById("root").innerHTML = `
      <div class="error">
        <p>Error ${err.status}: ${err.statusText}</p>
      </div>
    `;
      console.log(err);
      cbError();
    });
}
