const getItemTemplate = (text) => 
`<li class = "item">
<div>
  <input type="checkbox"/>
  <span> ${text} </span>
</div>
<button type="button">x</button>
</li>
`
const refs = {
    list: document.querySelector('.list'),
};

const items = ['item 1', 'item 2', 'item 3'];

const list = items.map((item) =>getItemTemplate(item));
refs.list.insertAdjacentHTML('beforeend', list.join(''));