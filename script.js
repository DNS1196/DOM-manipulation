// 1 
const container = document.getElementById('container');

//2
const container1 = document.querySelector('#container');

//3
const second = document.getElementsByClassName('second');

//4
const ol = document.querySelector('ol');
const thirdEl = ol.lastElementChild

//5
const h2 = document.createElement('h2');
h2.textContent = "Hello!"
container.prepend(h2);

//6
const header = document.querySelector('div');
const footer = header.nextElementSibling.nextElementSibling;
footer.classList.add('main');

//7
footer.classList.remove('main');

//8,9,10 
const newLi = document.createElement('li');
newLi.textContent = 'four';
const ul = document.querySelector('ul');
ul.append(newLi);

//11
const lis = ol.children;
for (li of lis) {
    li.classList.add('style');
}

//12
footer.remove();


