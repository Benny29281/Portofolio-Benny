import { mkdir, readFile, writeFile } from 'node:fs/promises';

const file = (path) => new URL(path, import.meta.url);
const projects = JSON.parse(await readFile(file('./projects.json'), 'utf8'));
const template = await readFile(file('./index.template.html'), 'utf8');
const originArg = process.argv[2];
const siteUrl = originArg ? new URL('./', originArg).href : '';
const github = 'https://github.com/Benny29281';
const categories = { backend: 'Backend', web: 'Web', ml: 'Machine learning', mobile: 'Mobile' };
const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const technologies = [
  ['Go', 'go'], ['C#', 'csharp'], ['PHP', 'php'], ['Python', 'python'], ['JavaScript', 'javascript'], ['Java', 'java'],
  ['ASP.NET Core', 'dotnetcore'], ['Laravel', 'laravel'], ['Flask', 'flask', true], ['Kafka', 'kafka', true], ['Next.js', 'nextjs', true], ['React', 'react'],
  ['Angular', 'angular'], ['React Native', 'react'], ['Expo', 'expo', true], ['LightGBM', 'lightgbm'], ['Scikit-learn', 'scikitlearn'], ['MySQL', 'mysql'],
  ['PostgreSQL', 'postgresql'], ['SQL Server', 'sqlserver', true], ['SQLite', 'sqlite'], ['Redis', 'redis'], ['Docker', 'docker'], ['Git', 'git'],
];

function escape(value) {
  return String(value).replace(/[&<>"']/g, (character) => entities[character]);
}

function renderTechnology([name, icon, needsLightBackground]) {
  const iconClass = needsLightBackground ? 'technology-icon technology-icon-light' : 'technology-icon';
  return `<li><span class="${iconClass}"><img src="./technology/${icon}.svg" width="26" height="26" alt="" loading="lazy" decoding="async"></span><span>${escape(name)}</span></li>`;
}

function renderResults(results) {
  return `<dl class="metrics">${results.map(({ label, value }) => (
    `<div><dt>${escape(label)}</dt><dd>${escape(value)}</dd></div>`
  )).join('')}</dl>`;
}

const coverDetails = {
  asthmascreen: (project) => `<div class="preview-metrics">${renderResults(project.results)}</div>`,
  'branding-request': () => '<div class="preview-tags"><span>Permintaan branding</span><div><span>Pengajuan</span><span>Pemantauan status</span></div></div>',
  'website-ipt': () => '<div class="preview-tags"><span>Website empat bahasa</span><div><span>Next.js</span><span>next-intl</span><span>Payload CMS</span></div></div>',
};

function renderFeatured(project) {
  const labels = project.categories.map((key) => categories[key]);
  const slug = escape(project.slug);
  const repo = project.featuredRepo;
  return `<article class="featured-project">
    <div class="project-cover cover-${slug}"><div class="preview-window">${coverDetails[project.slug](project)}</div></div>
    <div class="feature-content">
      <p class="feature-category">${escape(labels.join(' / '))}</p>
      <h3><a href="#${slug}">${escape(project.name)}</a></h3>
      <p class="feature-summary">${escape(project.summary)}</p>
      <ul class="feature-stack" aria-label="Teknologi">${project.stack.map((tech) => `<li>${escape(tech)}</li>`).join('')}</ul>${repo ? `
      <a class="feature-repo" href="${github}/${encodeURIComponent(repo)}">GitHub: ${escape(repo)}</a>` : ''}
    </div>
  </article>`;
}

function renderProject(project) {
  const categoryLabels = project.categories.map((key) => categories[key]);
  const highlights = project.highlights?.map((item) => `<li>${escape(item)}</li>`).join('');
  const links = project.repos?.map((repo) => (
    `<li><a href="${github}/${encodeURIComponent(repo)}">GitHub: ${escape(repo)}</a></li>`
  )).join('');

  return `<details class="project" id="${escape(project.slug)}" data-categories="${escape(project.categories.join(' '))}">
  <summary>
    <span><span class="project-title">${escape(project.name)}</span><span class="project-category">${escape(categoryLabels.join(' + '))}${project.year ? ` · ${escape(project.year)}` : ''}</span></span>
    <span class="project-stack">${escape(project.stack.join(' · '))}</span>
    <span class="project-toggle" aria-hidden="true"></span>
  </summary>
  <div class="project-body">
    <p>${escape(project.summary)}</p>
    ${highlights ? `<ul>${highlights}</ul>` : ''}
    ${project.results ? renderResults(project.results) : ''}
    ${links ? `<ul class="repo-links" aria-label="Repositori">${links}</ul>` : ''}
  </div>
</details>`;
}

const ordered = [...projects.filter(({ featured }) => featured), ...projects.filter(({ featured }) => !featured)];
const featuredMarkup = ordered.filter((project) => project.featured && Object.hasOwn(coverDetails, project.slug)).map(renderFeatured).join('\n');
const metadata = siteUrl ? `<link rel="canonical" href="${escape(siteUrl)}">\n  <meta property="og:url" content="${escape(siteUrl)}">` : '';
const html = template.replace('<!-- SITE_META -->', () => metadata)
  .replace('<!-- FEATURED_PROJECTS -->', () => featuredMarkup)
  .replace('<!-- TECHNOLOGY_ICONS -->', () => technologies.map(renderTechnology).join('\n'))
  .replace('<!-- PROJECT_TOTAL -->', () => String(projects.length))
  .replace('<!-- PROJECT_COUNT -->', () => `${projects.length} proyek`)
  .replace('<!-- PROJECT_LIST -->', () => ordered.map(renderProject).join('\n'));

await mkdir(file('./dist/'), { recursive: true });
await writeFile(file('./dist/index.html'), html);
if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(siteUrl)}</loc></url></urlset>\n`;
  await writeFile(file('./dist/sitemap.xml'), sitemap);
}
