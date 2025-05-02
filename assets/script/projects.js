const webContainer = document.getElementById('academic-projects');
const modelContainer = document.getElementById('sides-projects');

function createProjectCard(projet) {
const link = document.createElement('a');
link.href = projet["lien-repo"];

const card = document.createElement('div');
card.className = 'project-card';

const img = document.createElement('img');
img.src = projet.image;
img.alt = '';
img.className = 'project-image';

const title = document.createElement('h3');
title.className = 'project-title';
title.textContent = projet.name;

const desc = document.createElement('p');
desc.className = 'project-description';
desc.textContent = projet.description;

const tagsContainer = document.createElement('div');
tagsContainer.className = 'project-tags';

for (let i = 1; i <= 4; i++) {
    const tag = projet[`tags-${i}`];
    if (tag) {
    const span = document.createElement('span');
    span.className = 'project-tag';
    span.textContent = tag;
    tagsContainer.appendChild(span);
    }
}

card.appendChild(img);
card.appendChild(title);
card.appendChild(desc);
card.appendChild(tagsContainer);
link.appendChild(card);

const article = document.createElement('article');
article.className = 'project-card';
article.appendChild(link);

return article;
}

async function loadProjets() {
try {
    const response = await fetch('assets/data/projects.json');
    const projets = await response.json();

    projets.forEach(projet => {
        const card = createProjectCard(projet);
        if (projet.type === 'projet-academique') {
          webContainer.appendChild(card);
        } else if (projet.type === 'side-project') {
          modelContainer.appendChild(card);
        }
      });
      
} catch (error) {
    console.error('Erreur lors du chargement des projets :', error);
}
}

document.getElementById('show-academics-projects').addEventListener('click', () => {
webContainer.classList.remove('hidden');
webContainer.classList.add('visible');
modelContainer.classList.remove('visible');
modelContainer.classList.add('hidden');
});

document.getElementById('show-sides-projects').addEventListener('click', () => {
modelContainer.classList.remove('hidden');
modelContainer.classList.add('visible');
webContainer.classList.remove('visible');
webContainer.classList.add('hidden');
});

// Appel initial
loadProjets();