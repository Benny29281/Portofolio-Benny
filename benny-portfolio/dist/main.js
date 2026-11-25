const themeButton = document.querySelector('.theme-button');
const themeColor = document.querySelector('meta[name="theme-color"]');
const root = document.documentElement;
const themeKey = 'portfolio-theme';
let chosenTheme;

try {
  chosenTheme = localStorage.getItem(themeKey);
} catch {
  chosenTheme = null;
}

function updateTheme() {
  const dark = chosenTheme !== 'light';
  root.dataset.theme = dark ? 'dark' : 'light';
  themeButton.setAttribute('aria-label', dark ? 'Gunakan tema terang' : 'Gunakan tema gelap');
  themeButton.title = themeButton.getAttribute('aria-label');
  themeColor.content = dark ? '#141011' : '#f8efe7';
}

themeButton.hidden = false;
updateTheme();
themeButton.addEventListener('click', () => {
  chosenTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  updateTheme();
  try {
    localStorage.setItem(themeKey, chosenTheme);
  } catch {
    // The theme still works for the current page when storage is unavailable.
  }
});

const filters = document.querySelector('.filters');
const filterButtons = [...filters.querySelectorAll('button')];
const projects = [...document.querySelectorAll('.project')];
const projectCount = document.querySelector('#project-count');

function filterProjects(category) {
  filterButtons.forEach((button) => button.setAttribute('aria-pressed', button.dataset.filter === category));
  const visible = projects.filter((project) => {
    project.classList.remove('is-last-visible');
    project.hidden = category !== 'all' && !project.dataset.categories.split(' ').includes(category);
    return !project.hidden;
  });
  visible.at(-1)?.classList.add('is-last-visible');
  projectCount.textContent = `${visible.length} proyek`;
}

filters.hidden = false;
filterButtons.forEach((button) => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
document.querySelectorAll('[data-category-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    filterProjects(link.dataset.categoryLink);
  });
});

function openProject(hash) {
  const selected = projects.find((project) => `#${project.id}` === hash);
  if (!selected) return;
  if (selected.hidden) filterProjects('all');
  selected.open = true;
  selected.scrollIntoView({ block: 'start' });
  return selected;
}

window.addEventListener('hashchange', () => openProject(location.hash));
document.querySelectorAll('.featured-project h3 a').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    openProject(link.hash)?.querySelector('summary').focus({ preventScroll: true });
  });
});
openProject(location.hash);
