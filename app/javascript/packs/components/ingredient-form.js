
const test = () => {

  const button = document.querySelector('.add-ingredient');

  const clickButton = button.addEventListener('click', (event) => {
    const newDose = document.querySelector('#new-dose');
    newDose.classList.remove('unvisible');
    console.log('toto')
  });

}

export { test };
