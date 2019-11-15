const info = [];
function createEl() {
    const txt = document.createElement('span');
    txt.classList.add('text');
    document.body.appendChild(txt);
    return txt;
};

function insertText(array) {
    // const sepr = confirm('разделитель запятая?') ? ',' : "";
    const span = createEl();
    const text = array.join(`</br>`); // разделитель ${sepr}
    span.innerHTML += text; 
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
    
    data.forEach(el => {
        if (el === '\n' || el === '' || el[0] === 'н') return;
        editNumbers.push(`+38${el.substr(-10, 10)}`);
    });
    
    info[0] = `вход: ${data.length}`;
    info[1] = `ред.: ${editNumbers.length}`;
    
    fetch("../telbase.txt")
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
