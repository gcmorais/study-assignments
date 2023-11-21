/* eslint-disable no-undef */
$(document).ready(() => {
  const endpoint = 'https://api.github.com/users/gcmorais';

  fetch(endpoint)
    .then((res) => res.json())
    .then((json) => {
      const {
        avatar_url,
        name,
        login,
        public_repos,
        followers,
        following,
        html_url,
      } = json;

      const header = document.querySelector('header');

      header.innerHTML = `
        <div class="container">
            <img class="profile-avatar" src=${avatar_url} alt=".">
            <h1 class="profile-name">${name}</h1>
            <h2 class="profile-username">@${login}</h2>
            <ul class="numbers">
                <li class="numbers-item">
                    <h4>Repositórios</h4>
                    ${public_repos}
                </li>
                <li class="numbers-item">
                    <h4>Seguidores</h4>
                    ${followers}
                </li>
                <li class="numbers-item">
                    <h4>Seguindo</h4>
                    ${following}
                </li>
            </ul>
            <a href=${html_url} class="profile-link">Ver no Github</a>
        </div>
      `;
    });
});
