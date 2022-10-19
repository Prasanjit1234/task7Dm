var itemlist = document.querySelector('#items');
// console.log(itemlist);
// parentNode

// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode);

// parent element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement);

// childNodes
// console.log(itemlist.childNodes);
// console.log(itemlist.children);

// itemlist.children[2].style.backgroundColor = 'yellow';

// first child
// console.log(itemlist.firstChild);

// firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'hello 1';

// // Last child
// console.log(itemlist.lastChild);

// // lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'hello 1';

// next sibling
// console.log(itemlist.nextSibling);
//next element sibling
// console.log(itemlist.nextElementSibling);

//  previos sibling
// console.log(itemlist.previousSibling);
//  previous element sibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'purple';


// create Element
// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello 1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('hello world');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);