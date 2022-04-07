function toggle(){
    let start = document.querySelector('.start');
    let end = document.querySelector('.end');
    start.setAttribute('class','sr-only');
    end.classList.remove('sr-only');
}

let value = 0;

let rating = document.querySelector('span'); 
function rate(){
    rating.innerHTML = value;
}

let submit = document.querySelector(".submit");
submit.addEventListener('pointerover', () => {
    submit.style.backgroundColor = 'white';
    submit.style.color = 'hsl(25, 97%, 53%)';
});
submit.addEventListener('pointerout', () => {
    submit.style.backgroundColor = 'hsl(25, 97%, 53%)';
    submit.style.color = 'white';
});
submit.addEventListener('click', () => {
    rate();
    toggle();
});

/*Click event on <p> elemetn*/

let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');

one.addEventListener('pointerover', () => {
    one.classList.add('hover');
})
one.addEventListener('pointerout', () => {
    one.classList.remove('hover');
})
one.addEventListener('click', () => {
    removeClicked()
    value = 1;
    one.classList.remove('hover');
    one.classList.add('clicked');
})

two.addEventListener('pointerover', () => {
    two.classList.add('hover');
})
two.addEventListener('pointerout', () => {
    two.classList.remove('hover');
})
two.addEventListener('click', () => {
    removeClicked()
    value = 2;
    two.classList.remove('hover');
    two.classList.add('clicked');
})

three.addEventListener('pointerover', () => {
    three.classList.add('hover');
})
three.addEventListener('pointerout', () => {
    three.classList.remove('hover');
})
three.addEventListener('click', () => {
    removeClicked()
    value = 3;
    three.classList.remove('hover');
    three.classList.add('clicked');
})

four.addEventListener('pointerover', () => {
    four.classList.add('hover');
})
four.addEventListener('pointerout', () => {
    four.classList.remove('hover');
})
four.addEventListener('click', () => {
    removeClicked()
    value = 4;
    four.classList.remove('hover');
    four.classList.add('clicked');
})

five.addEventListener('pointerover', () => {
    five.classList.add('hover');
})
five.addEventListener('pointerout', () => {
    five.classList.remove('hover');
})
five.addEventListener('click', () => {
    removeClicked()
    value = 5;
    five.classList.remove('hover');
    five.classList.add('clicked');
})

function removeClicked(){
    one.classList.remove('clicked');
    two.classList.remove('clicked');
    three.classList.remove('clicked');
    four.classList.remove('clicked');
    five.classList.remove('clicked');
}
