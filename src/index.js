function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.textContent = 'Hello webpack';

  btn.textContent = 'Click me';

  element.appendChild(btn);

  return element;
 }

 const parent =  document.querySelector('main')

parent.appendChild( component() );
