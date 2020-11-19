const enText = {
  title: "My Portfolio",
  buttonTitle: {
    home: 'Home',
    work: 'Work',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact'
  },
  about: "Here will be put things about me"
};

const ptText = {
  title: "Meu Portifolio",
  buttonTitle: {
    home: 'Início',
    work: 'Trabalho',
    projects: 'Projetos',
    about: 'Sobre Mim',
    contact: 'Contato'
  },
  about: "Aqui será colocado coisas sobre mim"
};

function setTexts(language='PT-BR') {
  const title = document.querySelector('#page-name.title');
  const homeButton = document.querySelector('.button[name=home]');
  const aboutButton = document.querySelector('.button[name=about]');
  const projectsButton = document.querySelector('.button[name=projects]');
  const contactButton = document.querySelector('.button[name=contact]');
  const workButton = document.querySelector('.button[name=work]');

  if (language.toUpperCase() === 'EN') {
    title.innerHTML = enText.title;
    homeButton.innerHTML = enText.buttonTitle.home;
    aboutButton.innerHTML = enText.buttonTitle.about;
    projectsButton.innerHTML = enText.buttonTitle.projects;
    contactButton.innerHTML = enText.buttonTitle.contact;
    workButton.innerHTML = enText.buttonTitle.work;
  } else {
    title.innerHTML = ptText.title;
    homeButton.innerHTML = ptText.buttonTitle.home;
    aboutButton.innerHTML = ptText.buttonTitle.about;
    projectsButton.innerHTML = ptText.buttonTitle.projects;
    contactButton.innerHTML = ptText.buttonTitle.contact;
    workButton.innerHTML = ptText.buttonTitle.work;
  }
}

const changeLanguage = () => {
  const buttons = document.querySelectorAll('.option-button');
  const title = document.querySelector('.current-language');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonTitle = button.innerHTML;
      title.innerHTML = buttonTitle;
    })
  });
};

const openSidebar = () => {
  const sidebarButton =  document.querySelector('.tab-button-container');
  const tabbar = document.querySelector('.button-container');

  sidebarButton.addEventListener('click', () => {
    tabbar.classList.toggle('tabbar-transition');
  });
};

const showButtons = () => {
  const sidebarButton =  document.querySelector('.tab-button-container');
  const tabButtons = document.querySelectorAll('.button');

  sidebarButton.addEventListener('click', () => {
    
    tabButtons.forEach((button, index) => {
      if (button.style.animation.indexOf('tabButtonsShows') !== -1) {
        button.style.animation = 'tabButtonsHide 0.5s ease';
      } else {
        button.style.animation = `tabButtonsShows 0.5s ease forwards ${(index + 1) / 5}s`
      };
    });

    sidebarButton.classList.toggle('toggle');
  });
};

const toggleLanguage = () => {
  const selectButton = document.querySelector('.select-button');
  const languageOptions = document.querySelector('.option-container');
  const languages = document.querySelectorAll('.option-button');

  selectButton.addEventListener('click', () => {
    selectButton.classList.toggle('toggle');
    languageOptions.classList.toggle('show-language-options');
  });

  languages.forEach((button) => {
    button.addEventListener('click', () => {
      setTexts(button.innerHTML)
    })
  })
}


const App = () => {
  setTexts();
  openSidebar();
  showButtons();
  toggleLanguage();
  changeLanguage();
};

App();
