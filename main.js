function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add(`scroll`);
    scroll;
  } else {
    navigation.classList.remove(`scroll`);
  }
}

function openMenu() {
  document.body.classList.add(`menu-expanded`);
}
