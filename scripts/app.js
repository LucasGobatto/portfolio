const changeTitle = () => {
  const buttons = document.querySelectorAll('.button');
  const title = document.querySelector('.title');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonTitle = button.innerHTML;
      const currentTitle = title.innerHTML
      button.innerHTML = currentTitle;
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

const App = () => {
  changeTitle();
  openSidebar();
  showButtons();

  console.log(document.querySelector('#page-name').innerHTML)
  if (document.querySelector('#page-name').innerHTML !== 'Home') {
    document.querySelector('.welcome-container').style.display = 'none';
  }
};

App();