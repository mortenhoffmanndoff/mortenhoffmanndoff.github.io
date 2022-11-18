// collapse

const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        collapse(selector, 'toggle');
    }
}, false);


const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
};
const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList[fnmap[cmd]]('show');
    });
}

// Mobile menu

var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav");
var burgerClose = document.querySelector(".close-burger");

burger.addEventListener('click', function (burger) {
    event.preventDefault();
    nav.classList.add('active');
    document.body.classList.add('menu-active')
});

var links = document.querySelectorAll(".nav a");
for (const link of links) {
    link.addEventListener('click', function (event) {
        nav.classList.remove('active');
        document.body.classList.remove('menu-active')
    });
}

burgerClose.addEventListener('click', function (event) {
    nav.classList.remove('active');
    document.body.classList.remove('menu-active')
});