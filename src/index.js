import './style.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello World';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());