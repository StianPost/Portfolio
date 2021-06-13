const projectUrl = 'http://portfolio.postal.one/wp-json/wp/v2/posts';
const projectContainer = document.querySelector('.proContainer');

async function getProjects(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    getProjectCards(result);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

getProjects(projectUrl);

function getProjectCards(result) {
  for (let i = 0; i < 5; i++) {
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
