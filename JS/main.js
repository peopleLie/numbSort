// let info = [];
// function createEl(el) {
//     const tag = el || 'span';
//     const txt = document.createElement(tag);
//     txt.classList.add('text');
//     document.body.appendChild(txt);
//     return txt;
// };

// function insertText(array) {
//     const span = createEl();
//     const text = array.join(`</br>`);
//     span.innerHTML += `${text}</br>`;
//     insertResult();
// };

// function insertResult() {
//     const out = createEl();
//     info[2] = info[2].join(' ');
//     out.innerHTML = info.join('</br>');
// };

// function filterByBase(base, editNumbers) {
//     let final = [];
//     info[2] = ['совпадений:', 0];
//     editNumbers.forEach(el => {
//         for (let i = 0; i < base.length; i++) {
//             if (el === base[i]) {
//                 info[2][1] += 1;
//                 return;
//             };
//         }
//         final.push(el);
//     });
//     insertText(final);
// };

// const button = document.querySelector('.button');
// button.addEventListener('click', e => {
//     const userData = document.querySelector('.tel');
//     const editNumbers = [];
//     const data = userData.value.split('\n');
    
//     data.forEach(el => {
//         if (el === '\n' || el === '' || el[0] === 'н') return;
//         editNumbers.push(`+38${el.substr(-10, 10)}`);
//     });
    
//     info[0] = `вход: ${data.length}`;
//     info[1] = `ред.: ${editNumbers.length}`;
    
//     fetch("../telbase.txt")
//     .then(response => response.text())
//     .then(text => text.split('\r\n'))
//     .then(base => {
//             button.style.display = 'none';
//             document.querySelector('.container').classList.add('none');
//             // userData.style.display = 'none';
            
//             info[3] = `Base: ${base.length}`;
//             filterByBase(base, editNumbers);
//         });
// }
// );

// const xls = document.querySelector('.xlsButton');
// xls.addEventListener('click', e => {
//     const userData = document.querySelector('.xls');
//     const data = JSON.parse(userData.value)['Виписки'];
//     const editData = [];
//     const income = [];

//     data.forEach(el => {
//     if (el.length > 1 && el[4].split(' ')[0] === 'Рекламні' && el[8] === 'дол') {
//     const tmp = [];
//     tmp.push(el[0]);
//     tmp.push(el[7]);
//     tmp.push(el[8]);
//     editData.push(tmp);
//   }
//   if (el.length > 1 && el[4].split(' ')[0] === 'Рекламні' && el[8] === 'євро') {
//     const tmp = [];
//     tmp.push(el[0]);
//     tmp.push(el[7]);
//     tmp.push(el[8]);
//     editData.push(tmp);
//   }
//   if (el.length > 1 && el[4].split(' ')[0] === 'Зарахування' && el[8] === 'дол') {
//     const tmp2 = [];
//     tmp2.push(el[0]);
//     tmp2.push(el[7]);
//     tmp2.push(el[8]);
//     income.push(tmp2);
//   }
//   if (el.length > 1 && el[4].split(' ')[0] === 'Зарахування' && el[8] === 'євро') {
//     const tmp2 = [];
//     tmp2.push(el[0]);
//     tmp2.push(el[7]);
//     tmp2.push(el[8]);
//     income.push(tmp2);
//   }
// });
  
//     const output = [];
//     let dollar = 0;
//     let euro = 0;
//     let check = editData[0][0];


    // for (let i = 0; i < editData.length; i++) {
    //     if (editData[i][0] === check) {
    //         dollar += +editData[i][1];
    //     } else {
    //         output.push([check, (+dollar.toFixed(2))]);
    //         check = editData[i][0];
    //         dollar = editData[i][1];
    //     };

    // };
    
    // output.push([check, dollar]);
    // info = output.reverse();

    // function insertTxt(array) {
    //     const span = createEl();
    //     const span2 = createEl();
    //     const span3 = createEl();
    //     const box = createEl('div');
    //     span.classList.add('table');
    //     span2.classList.add('table');
    //     span3.classList.add('table');
    //     box.classList.add('box');
    //     span3.style.marginTop = '10px';
    //     span3.style.display = 'inline-block';
    //     span.innerHTML = data[2][3].split(' ')[2] + '</br>' + '</br>';

    //     array.forEach(el => {
    //     span.innerHTML += `${el[0]} ${el[1]}</br>`;
    //     span2.innerHTML += `${el[1]}</br>`;
    //     span3.innerHTML += `${el[0]}</br>`;
    // });
    // box.appendChild(span); 
    // document.body.appendChild(box); 
    // document.body.appendChild(span2); 
    // document.body.appendChild(span3); 

    // };

    // insertTxt(info);
    // document.querySelector('.container').classList.add('none');

// });



// fetch("../base.txt")
// .then(response => response.text())
// .then(text => text.split('\r\n'))
// .then(base => {
//     base.forEach((el, iter) => {
//         console.log(iter);        
//         for (let i = 0; i < base.length; i++) {        
//             if (el === base[i] && iter !== i) console.log(el);                        
//         }
//     });
// }); 

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

const xls = document.querySelector('.xlsButton');
xls.addEventListener('click', e => {
    const userData = document.querySelector('.xls');
    const data = JSON.parse(userData.value)['Виписки'];
    const editData = [];

    data.forEach(el => {
        if (el.length > 1 && el[4].split(' ')[0] === 'Рекламні' && el[8] === 'дол') {
            const tmp = [];
            tmp.push(el[0]);
            tmp.push(el[7]);
            editData.push(tmp);
        }
    });

    const output = [];
    let counter = 0;
    let check = editData[0][0];

    for (let i = 0; i < editData.length; i++) {
        if (editData[i][0] === check) {
            counter += +editData[i][1];
            // console.log(i, check, counter);
        } else {
            output.push([check, +counter.toFixed(2)]);
            check = editData[i][0];
            counter = editData[i][1];
        };

    };
    output.push([check, counter]);
    console.log(output.reverse());
    
});

