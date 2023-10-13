const endpoint = `https://dummyjson.com/products`;

async function test() {
    const teste = await fetch(endpoint);
    const converte = await teste.json();
}

test();

const input = document.getElementById('teste');
const label = document.getElementById('teste2')

input.addEventListener('focus', () => {
    label.style.fontSize = `12px`;
})

input.addEventListener('focusout', () => {
    label.style.fontSize = `16px`;
})

//login button
const width = window.innerWidth;
const logBtn = document.getElementById('loginButton');

if (width >= 768) {
    logBtn.classList.remove('secondary_mobile_button');
    logBtn.classList.add('secondary_button');
    logBtn.style.minWidth = `182px`;
} else {
    logBtn.classList.remove('secondary_button');
    logBtn.classList.add('secondary_mobile_button');
    logBtn.style.minWidth = `auto`;
}