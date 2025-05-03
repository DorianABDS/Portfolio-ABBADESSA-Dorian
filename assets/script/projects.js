const academicContainer = document.getElementById("academic-projects");
const sidesContainer = document.getElementById("sides-projects");

function createCard(project) {
  // Récupérer les tags depuis le tableau et créer les éléments HTML
  const tags = project.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join("");

  // On crée les boutons, avec une vérification de l'état en ligne
  const showWebsiteBtnClass = project.isOnline ? '' : 'disabled-btn';
  const showRepoBtnClass = '';

  return `
    <div class="card">
      <img src="${project.image}" alt="${project.name}" />
      <h3 class="card-title">${project.name}</h3>
      <p class="card-description">${project.description}</p>
      <div class="tags">${tags}</div>
      <div class="card-content">
        <div class="project-links">
          <a class="project-link ${showWebsiteBtnClass}" href="${project['lien-site']}" target="_blank">
            Voir le site
          </a>
          <a class="project-link ${showRepoBtnClass}" href="${project['lien-repo']}" target="_blank">
            <img src="/assets/src/img/github-brands-solid.svg" alt="GitHub" class="github-icon" width="25" height="25">
          </a>
        </div>
      </div>
    </div>
  `;
}

async function loadProjects() {
  try {
    const response = await fetch('assets/data/projects.json');
    const projects = await response.json();

    projects.forEach(project => {
      const cardHTML = createCard(project);
      if (project.type === "projet-academique") {
        academicContainer.innerHTML += cardHTML;
      } else if (project.type === "side-project") {
        sidesContainer.innerHTML += cardHTML;
      }
    });
  } catch (error) {
    console.error('Erreur lors du chargement des projets :', error);
  }
}

document.getElementById('show-academics-projects').addEventListener('click', () => {
  academicContainer.classList.remove('hidden');
  academicContainer.classList.add('visible');
  sidesContainer.classList.remove('visible');
  sidesContainer.classList.add('hidden');
});

document.getElementById('show-sides-projects').addEventListener('click', () => {
  sidesContainer.classList.remove('hidden');
  sidesContainer.classList.add('visible');
  academicContainer.classList.remove('visible');
  academicContainer.classList.add('hidden');
});

loadProjects();
