import {Item} from './Item.js';
import {items} from './items.js'

const refs = {
    list: document.querySelector('.list'),
    form: document.querySelector('.form'),

  };

const render = () => {
  // const lis = items.map((item) => Item(item));

const lis = items.map(Item);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', lis.join(''));
  
};

const addItem =  (e) => {
  e.preventDefault();
  
  const {value} = e.target.elements.text
  const payload = {
    text: value,
    isDone: false,
  }
  
  refs.form.reset();
  items.push(payload);
  render();
  };

render();

refs.form.addEventListener('submit', addItem);