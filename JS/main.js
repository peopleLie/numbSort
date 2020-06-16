let widthTextarea = document.querySelector('.tel').getBoundingClientRect().width
document.querySelector('.button').style.width = widthTextarea + 'px';

const info = [];
function createEl() {
    const txt = document.createElement('span');
    txt.classList.add('text');
    document.body.appendChild(txt);
    return txt;
};

function insertText(array) {
    const span = createEl();
    const text = array.join(`</br>`);
    span.innerHTML += `${text}</br>`;
    insertResult();
};

function insertResult() {
    const out = createEl();
    info[2] = info[2].join(' ');
    out.innerHTML = info.join('</br>');
};

function filterByBase(base, editNumbers) {
    let final = [];
    info[2] = ['совпадений:', 0];
    editNumbers.forEach(el => {
        for (let i = 0; i < base.length; i++) {
            if (el === base[i]) {
                info[2][1] += 1;
                return;
            };
        }
        final.push(el);
    });
    insertText(final);
};

const button = document.querySelector('.button');
button.addEventListener('click', e => {
    const userData = document.querySelector('.tel');
    const editNumbers = [];
    const data = userData.value.split('\n');

    data.forEach((el, i) => {
        if (el === '\n' || el === '' || el[0] === 'н') return;

        const output = el.split('');//замена всего кроме цифр на undefined
        let sorted = output.map(item => {
            if (!isNaN(item) && item !== ' ') return item;
        });
        sorted = sorted.join('');// return если номер меньше 10 цифр
        if (sorted.length < 10) {
            console.log(i, el, sorted);            
            return;
        };

        editNumbers.push(`+38${sorted.substr(-10, 10)}`);
    });

    info[0] = `вход: ${data.length}`;
    info[1] = `ред.: ${editNumbers.length}`;

    // fetch("js/telbase.txt")
    fetch("js/telbase.txt", {
headers: {
        'Content-Type': 'application/json'
    },})
        .then(response => response.text())
        .then(text => text.split('\r\n'))
        .then(base => {
            button.style.display = 'none';
            userData.style.display = 'none';

            info[3] = `Base: ${base.length}`;
            filterByBase(base, editNumbers);
        });
}
);