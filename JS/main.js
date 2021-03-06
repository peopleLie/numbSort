const button = document.querySelector('.button');
const btnCopy = document.getElementById("copyText");
const info = [];
let resultSort;
let widthTextarea = document.querySelector('.tel').getBoundingClientRect().width
document.querySelector('.button').style.width = widthTextarea + 'px';

function createEl() {
    const txt = document.createElement('span');
    txt.classList.add('text');
    document.body.appendChild(txt);
    return txt;
};

function insertText(array) {
    const span = createEl();
    span.id = 'telList'; // id для span
    span.classList.add('telList'); // класс для span списка номеров
    resultSort = array;    // вынос в глобальную переменную
    const text = array.join(`</br>`);
    span.innerHTML += `${text}</br>`;
    insertResult();
};

function insertResult() {
    const out = createEl();
    out.classList.add('statistic'); // класс для span итога сортировки
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
        info[4] = `итог: ${final.length}`; // добавлен пункт ИТОГ
       
        final.push(el);
    });
    insertText(final);
};

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

    fetch("js/telbase.txt", {
headers: {
        'Content-Type': 'application/json'
    },})
        .then(response => response.text())
        .then(text => text.split('\r\n'))
        .then(base => {
            button.style.display = 'none';
            userData.style.display = 'none';
            btnCopy.style.display = 'block'; // показать\скрыть кнопку Copy

            info[3] = `Base: ${base.length}`;
            filterByBase(base, editNumbers);
        });
}
);

btnCopy.onclick = function () {
    let span = document.getElementById("telList");
    let area = document.getElementById("buffer");
    area.style.display = 'block';
    area.value = span.innerText; 
    area.select();
    document.execCommand('copy');
    area.style.display = 'none';
}