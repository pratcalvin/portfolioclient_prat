// Crée le HTML d'une carte projet
function createCard(project, large) {
  const card = document.createElement("a");
  card.className = "card" + (large ? " card--large" : "");
  card.href = project.url;
  card.target = "_blank";
  card.rel = "noopener";
  card.dataset.category = project.category;

  card.innerHTML = `
    <div class="card__media">
      <img src="${project.image}" alt="Aperçu du site ${project.name}"
           width="1200" height="750" loading="lazy" decoding="async">
    </div>
    <div class="card__body">
      <div class="card__head">
        <h3 class="card__name">${project.name}</h3>
        <span class="card__sector">${project.sector}</span>
      </div>
      <p class="card__desc">${project.description}</p>
      <span class="card__link">Voir le projet <span class="arrow" aria-hidden="true">→</span><span class="visually-hidden"> (nouvel onglet)</span></span>
    </div>
  `;
  return card;
}

// Projets sélectionnés
const featuredGrid = document.getElementById("featured-grid");
PROJECTS.filter((p) => p.featured).forEach((project, index) => {
  featuredGrid.appendChild(createCard(project, index === 0));
});

// Tous les projets
const projectsGrid = document.getElementById("projects-grid");
PROJECTS.forEach((project) => {
  projectsGrid.appendChild(createCard(project, false));
});
document.getElementById("project-count").textContent = PROJECTS.length;

// Filtres
const filterButtons = document.querySelectorAll(".filter");
const filterStatus = document.getElementById("filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => {
      const active = b === button;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active);
    });

    let visible = 0;
    projectsGrid.querySelectorAll(".card").forEach((card) => {
      const show = filter === "Tous" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visible++;
    });

    filterStatus.textContent = visible + (visible > 1 ? " projets affichés" : " projet affiché");
  });
});
