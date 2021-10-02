const projectUrl =
  'https://noroffcors.herokuapp.com/https://portfolio.postal.one/wp-json/wp/v2/posts';
const projectContainer = document.querySelector('.proContainer');
const loading = document.querySelector('.loading');

async function getProjects(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    getProjectCards(result);
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'Could not find projects :c',
      'danger'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 10000);
  }
}

getProjects(projectUrl);

function getProjectCards(result) {
  loading.innerHTML = ``;
  for (let i = 0; i < result.length; i++) {
    projectContainer.innerHTML += `
      <div class="proCard">
      <div class="proCard__left">
        <div class="proCard__left--img projectImg${[i]}"></div>
      </div>
      <div class="proCard__right">
        <h2 class="proCard__right--h2">${result[i].title.rendered}</h2>
        ${result[i].excerpt.rendered}
      </div>
    </div>
      `;
    document.querySelector(
      `.projectImg${[i]}`
    ).style.backgroundImage = `url(${result[i].better_featured_image.source_url})`;
  }
}
