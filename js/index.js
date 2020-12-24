const resDecimalNum = document.getElementById('decimal-num'),
      resBinaryNum = document.getElementById('binary-num'),
      calcBtn = document.getElementById('calc-btn'),
      btn = document.getElementsByClassName('btn'),
      btn2 = document.getElementsByClassName('btn-del');

var arrDecimalNum = []; 

resDecimalNum.innerText = '0';
resBinaryNum.innerText = '0';

const calculate = () => {
    let decimalNum = parseInt(arrDecimalNum.join(''));
    resBinaryNum.innerText = (decimalNum >>> 0).toString(2)
}

const backspaceNum = () => {
    arrDecimalNum.pop();
    resDecimalNum.innerText = !arrDecimalNum.length ? '0' : arrDecimalNum.join('');
    if (!arrDecimalNum.length) {
        resBinaryNum.innerText = '0'
    }
}

const deleteNum = () => {
    arrDecimalNum = [];
    resDecimalNum.innerText = '0';
    resBinaryNum.innerText = '0'
}

const pressedAnimation = (btn) => {
    btn.style.animationName = 'pressed';
    setTimeout(() => {
        btn.style.animationName = '';
    }, 150)
}

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        calculate();
        pressedAnimation(calcBtn)
    } else if (e.keyCode === 8) {
        backspaceNum();
        pressedAnimation(btn2[0])
    } else if (e.keyCode === 46) {
        deleteNum();
        pressedAnimation(btn2[1])
    }
})

for (let i = 0; i < btn.length; i++) {
    const addNumber = () => {
        if (arrDecimalNum.length >= 9) {
            return arrDecimalNum
        } else {
            if (!arrDecimalNum.length && btn[i].value == 0) {
                arrDecimalNum = []
            } else {
                arrDecimalNum.push(btn[i].value);
                resDecimalNum.innerText = arrDecimalNum.join('')
            }
        }
    }

    btn[i].addEventListener('click', () => addNumber());
    
    document.addEventListener('keyup', (e) => {
        if (e.keyCode === parseInt(btn[i].value) + 96 || e.keyCode === parseInt(btn[i].value) + 48) {
            addNumber();
            pressedAnimation(btn[i])
        }
    })
}