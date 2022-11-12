import {getItemTemplate} from './getItemTemplate.js';
import {items} from './items.js'

const refs = {
    list: document.querySelector('.list'),
    form: document.querySelector('.form'),

  };

const render = () => {
  // const lis = items.map((item) => Item(item));

const lis = items.map(getItemTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', lis.join(''));
  
};

// ==================== ДЛИННО ПОНЯТНО

// const addItem =  (e) => {
//   e.preventDefault();
  
//   const {value} = e.target.elements.text
//   const payload = {
//     text: value,
//     isDone: false,
//   }
  
//   refs.form.reset();
//   items.push(payload);
//   render();
//   };

// render();

// refs.form.addEventListener('submit', addItem);

// ================== КОРОЧЕ ЧИЩЕ


const addItem =  (text) => {  
 
  const payload = {
    text,
    isDone: false,
  }
  
  items.push(payload);
  };

const handleSubmit = (e) => {
  const {value} = e.target.elements.text

  e.preventDefault();
  addItem (value);
  render();
  refs.form.reset();
};


render();



refs.form.addEventListener('submit', handleSubmit);



// ======================= ССЫЛКА РУКАМИ
// const link = document.createElement('a');
// link.href ='https://www.facebook.com/';
// link.textContent = 'Facebook';
// link.classList.add('link');

// const body = document.querySelector('body');
// body.appendChild(link);

// console.log(link.outerHTML);

// link.click();