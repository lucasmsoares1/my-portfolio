/*====================\
Typewriter Effect
/====================*/
const typeWriter = (element) => {
  const splitedElement = element.innerHTML.split("");
  element.innerText = "";

  splitedElement.forEach((character, index) => {
    setTimeout(() => {
      element.innerHTML += character;
    }, index * 75);
  });
};
typeWriter(document.querySelector(".home__ocupation"));

/*====================\
Reveal Animation
/====================*/
const targets = document.querySelectorAll("[data-anime]");

const animeOnScroll = () => {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

  targets.forEach((element) => {
    const showElement = windowTop > element.offsetTop;
    if (showElement) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

// Reveal when scroll page
window.addEventListener("scroll", animeOnScroll);

// Reveal when load finish
window.addEventListener("DOMContentLoaded", animeOnScroll);

/*====================\
Projects
/====================*/
// adding projects into DOM
let projects = [
  {
    id: 0,
    title: "Omnifood",
    description: `
        Omnifood é um website que proporciona planos de delivery baseados na dieta dos clientes.<br><br>
        Esse projeto foi feito com o objetivo de praticar Grid, Flexbox, e a responsividade em CSS3.
      `,
    type: "Website",
    demo: "https://omnifoodlms.vercel.app/",
    git: "https://github.com/lucasmsoares1/omnifood",
    src: "./assets/images/omnifood.png",
    stacks: ["HTML5", "CSS3", "Vanilla JS"],
  },
  {
    id: 1,
    title: "Camp.in",
    description: `
      Tela de login responsiva para um website de camping <br><br>
      Esse projeto foi feito com o objetivo de praticar CSS e aprimorar meu conhecimento em responsividade.
    `,
    type: "Website",
    demo: "https://camp-in-loginscreen.vercel.app/",
    git: "https://github.com/lucasmsoares1/camp.in-loginscreen",
    src: "./assets/images/campindesktop.png",
    stacks: ["HTML5", "CSS3"],
  },
  {
    id: 2,
    title: "Controle Financeiro",
    description: `
      Aplicação de controle financeiro feita com Javascript Vanilla, com o objetivo de auxiliar o usuario a controlar gastos <br><br>
      Esse projeto foi feito com o objetivo de praticar Javascript puro, melhorando meu conhecimento de métodos de array, delegação de eventos e CRUD.
    `,
    type: "Webapp",
    demo: "https://expensetrackerlms.vercel.app/",
    git: "https://github.com/lucasmsoares1/expense-tracker",
    src: "./assets/images/expensetracker.png",
    stacks: ["HTML5", "CSS3", "Javascript"],
  },
];

const projectsArea = document.querySelector(".projects__grid");
projects.map((project) => {
  const { id, title, demo, git, src, stacks, description } = project;
  let html = `
  <div class="project__card" data-id="${id}">
  <img src=${src} class="project__image">
  <h3 class="project__title">${title}</h3>
  <div class="project__description">
    <p>     
      ${description}
    </p>
  </div>
  <div class="project__stacks">${stacks.join('&nbsp; &nbsp; &nbsp;')}</div>
  <div class="home__links">
    <a href="${demo}" class="home__link" target="_blank">
      Repositório
    </a>
    <a href="${git}" class="home__link" target="_blank">
      Projeto
    </a>
  </div>
</div>
</div>
    `;
  projectsArea.innerHTML += html;
});
// adding projects into DOM
