const container = document.getElementById('container');
const button = document.querySelector('button');

container.addEventListener('click', () => {
    alert('Hola! Soy el div')
})

button.addEventListener('click', event => {
    event.stopPropagation();
    alert('Hola!')
});