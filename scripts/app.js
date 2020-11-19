const enText = {
  title: 'My Portfolio',
  buttonTitle: {
    home: 'Home',
    work: 'Work',
    projects: 'Projects',
    about: 'About Me',
    contact: 'Contact'
  },
  about: {
    title: 'About Me', 
    text: 'Hello! Welcome to my portfolio. My name is Lucas and I hope you enjoy my work.',
  },
};

const ptText = {
  title: 'Meu Portifolio',
  buttonTitle: {
    home: 'Início',
    work: 'Trabalho',
    projects: 'Projetos',
    about: 'Sobre Mim',
    contact: 'Contato'
  },
  about: {
    title: 'Sobre mim',
    text: `Olá! Bem vindo(a) ao meu portifólio. Me chamo Lucas, sou estudante de Engenharia Química e sou facinado por tecnologia. Gosto muito de programar, tocar meu violão e de experimentar coisas novas.
    Sou focado e gosto muito de ajudar os outros no que eu posso, pois sei que a melhor forma de aprender é ensinando. Costumo ter ótimas relacões interpessoais e trabalhar e conjunto, sempre tentando aprender
    e analisar novos pontos de vista.`,
  },
};

function setTexts(language='PT-BR') {
  const title = document.querySelector('#page-name.title');
  const subtitleAbout = document.querySelector('.subtitle-about');

  const homeButton = document.querySelector('.button[name=home]');
  const aboutButton = document.querySelector('.button[name=about]');
  const projectsButton = document.querySelector('.button[name=projects]');
  const contactButton = document.querySelector('.button[name=contact]');
  const workButton = document.querySelector('.button[name=work]');

  const aboutText = document.querySelector('.about-text');


  if (language.toUpperCase() === 'EN') {
    title.innerHTML = enText.title;
    subtitleAbout.innerHTML = enText.about.title;
    console.log(subtitleAbout.innerHTML)

    homeButton.innerHTML = enText.buttonTitle.home;
    aboutButton.innerHTML = enText.buttonTitle.about;
    projectsButton.innerHTML = enText.buttonTitle.projects;
    contactButton.innerHTML = enText.buttonTitle.contact;
    workButton.innerHTML = enText.buttonTitle.work;

    aboutText.innerHTML = enText.about.text
  } else {
    title.innerHTML = ptText.title;
    subtitleAbout.innerHTML = ptText.about.title;

    homeButton.innerHTML = ptText.buttonTitle.home;
    aboutButton.innerHTML = ptText.buttonTitle.about;
    projectsButton.innerHTML = ptText.buttonTitle.projects;
    contactButton.innerHTML = ptText.buttonTitle.contact;
    workButton.innerHTML = ptText.buttonTitle.work;

    aboutText.innerHTML = ptText.about.text
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
