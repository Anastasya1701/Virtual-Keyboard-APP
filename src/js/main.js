import { Arrays } from './CharCode';

const arrays = Arrays();

const {
  arrCodeRow0, arrCodeRow1, arrCodeRow2, arrCodeRow3, arrCodeRow4,
  arrKeyCodeRow4, specialButtonsarr, specialButtonClass, specialButtonText,
  arrKeyCodeUpEng, arrKeyCodeRus, arrKeyCodeUpRus, arrKeyCodeEng,
} = arrays; // const arrCodeRow0 = arrays.arrCodeRow0

const textarea = document.createElement('textarea');
textarea.classList.add('input-display-field');
document.body.append(textarea);

const keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboard-box');
document.body.append(keyboardBox);

for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('div');
  row.classList.add(`row${i}`);
  document.querySelector('.keyboard-box').append(row);
}

const addKeys = (row, elem) => document.querySelector(row).append(elem);
const rowArr = ['.row0', '.row1', '.row2', '.row3'];
for (let i = 0; i < rowArr.length; i += 1) {
  for (let j = 0; j < 13; j += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    addKeys(rowArr[i], key);
  }
}

const rowArr2 = ['.row0', '.row1', '.row1'];
for (let i = 0; i < rowArr2.length; i += 1) {
  const key = document.createElement('div');
  key.classList.add('key');
  addKeys(rowArr2[i], key);
}

for (let i = 0; i < 9; i += 1) {
  const key = document.createElement('div');
  key.classList.add('key');
  document.querySelector('.row4').append(key);
}

// Add class and span text to keys of 4 row

for (let i = 0; i < specialButtonsarr.length; i += 1) {
  document.querySelector(specialButtonsarr[i]).classList.add(specialButtonClass[i]);
  document.querySelector(specialButtonsarr[i]).insertAdjacentHTML('beforeend',
    `<span>${specialButtonText[i]}</span>`);
}

// Final array of changing keys

const keyClass = [...arrCodeRow0.slice(0, arrCodeRow0.length - 1),
  ...arrCodeRow1.slice(1, arrCodeRow1.length - 1),
  ...arrCodeRow2.slice(1, arrCodeRow2.length - 1),
  ...arrCodeRow3.slice(1, arrCodeRow3.length - 2)];

// Function that add class to keys of 0-3 rows

function writeDemoClass() {
  for (let i = 0; i < arrCodeRow0.length - 1; i += 1) {
    document.querySelectorAll('.row0 .key')[i].classList.add(`${arrCodeRow0[i]}`);
  }
  for (let i = 1; i < arrCodeRow1.length - 1; i += 1) {
    document.querySelectorAll('.row1 .key')[i].classList.add(`${arrCodeRow1[i]}`);
  }
  for (let i = 1; i < arrCodeRow2.length - 1; i += 1) {
    document.querySelectorAll('.row2 .key')[i].classList.add(`${arrCodeRow2[i]}`);
  }
  for (let i = 1; i < arrCodeRow3.length - 2; i += 1) {
    document.querySelectorAll('.row3 .key')[i].classList.add(`${arrCodeRow3[i]}`);
  }
  for (let i = 0; i < arrCodeRow4.length; i += 1) {
    document.querySelectorAll('.row4 .key')[i].classList.add(`${arrCodeRow4[i]}`);
    document.querySelector(`.${arrCodeRow4[i]}`).innerHTML = `<span>${arrKeyCodeRow4[i]}</span>`;
  }
}
writeDemoClass();

// Function english Lower Case

function englishLowerCase() {
  for (let i = 1; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]} span`).remove();
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeEng[i])}</span>`;
  }
  document.querySelector('.keyboard-box').classList.add('engl');
  document.querySelector('.keyboard-box').classList.remove('rus');
  document.querySelector('.CapsLock').classList.add('off');
  document.querySelector('.CapsLock').classList.remove('on');
  localStorage.setItem('myKey', '1');
}

// Function english Upper Case

function englishUpperCase() {
  for (let i = 0; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]} span`).remove();
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpEng[i])}</span>`;
  }
  document.querySelector('.CapsLock').classList.add('on');
  document.querySelector('.CapsLock').classList.remove('off');
  localStorage.setItem('myKey', '2');
}

// Function russian lower Case

function rusLowerCase() {
  for (let i = 0; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]} span`).remove();
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRus[i])}</span>`;
  }
  document.querySelector('.keyboard-box').classList.add('rus');
  document.querySelector('.keyboard-box').classList.remove('engl');
  document.querySelector('.CapsLock').classList.add('off');
  document.querySelector('.CapsLock').classList.remove('on');
  localStorage.setItem('myKey', '3');
}

// Function russian Upper Case

function rusUpperCase() {
  for (let i = 0; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]} span`).remove();
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpRus[i])}</span>`;
  }
  document.querySelector('.CapsLock').classList.add('on');
  document.querySelector('.CapsLock').classList.remove('off');
  localStorage.setItem('myKey', '4');
}

// Demo functions to set language

function demoEnglishLowerCase() {
  for (let i = 0; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeEng[i])}</span>`;
  }
  document.querySelector('.keyboard-box').classList.add('engl');
  document.querySelector('.CapsLock').classList.add('off');
  localStorage.setItem('myKey', '1');
}

function demoEnglishUpperCase() {
  for (let i = 0; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpEng[i])}</span>`;
  }
  document.querySelector('.keyboard-box').classList.add('engl');
  document.querySelector('.CapsLock').classList.add('on');
  localStorage.setItem('myKey', '2');
}

function demoRusLowerCase() {
  for (let i = 0; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeRus[i])}</span>`;
  }
  document.querySelector('.keyboard-box').classList.add('rus');
  document.querySelector('.CapsLock').classList.add('off');
  localStorage.setItem('myKey', '3');
}

function demoRusUpperCase() {
  for (let i = 0; i < keyClass.length; i += 1) {
    document.querySelector(`.${keyClass[i]}`).innerHTML = `<span>${String.fromCharCode(arrKeyCodeUpRus[i])}</span>`;
  }
  document.querySelector('.keyboard-box').classList.add('engl');
  document.querySelector('.CapsLock').classList.add('on');
  localStorage.setItem('myKey', '4');
}

// Load saved language

switch (localStorage.getItem('myKey')) {
  case '1':
    demoEnglishLowerCase();
    break;
  case '2':
    demoEnglishUpperCase();
    break;
  case '3':
    demoRusLowerCase();
    break;
  case '4':
    demoRusUpperCase();
    break;
  default:
    demoEnglishLowerCase();
    break;
}

// Function that sets text in textarea

function text(value) {
  const textareaVal = document.querySelector('.input-display-field').value;
  document.querySelector('.input-display-field').value = `${textareaVal + value}`;
}

// Keydown Events

const keydownEvent = (event) => {
  textarea.blur();
  const engl = document.querySelector('.engl');
  const rus = document.querySelector('.rus');
  const off = document.querySelector('.off');
  const on = document.querySelector('.on');

  document.querySelector(`.${event.code}`).classList.add('active');
  if ((event.ctrlKey && event.altKey)) {
    if (event.repeat) return;
    if (engl) {
      rusLowerCase();
    } else if (rus) {
      englishLowerCase();
    }
  } else if (event.key === 'CapsLock') {
    if (event.repeat) return;
    if (engl) {
      if (off) {
        englishUpperCase();
      } else if (on) {
        englishLowerCase();
      }
    } else if (rus) {
      if (off) {
        rusUpperCase();
      } else if (on) {
        rusLowerCase();
      }
    }
  } else if (event.key === 'Shift') {
    // if (event.repeat) return;
    if (engl) {
      if (off) {
        englishUpperCase();
      } else if (on) {
        englishLowerCase();
      }
    } else if (rus) {
      if (off) {
        rusUpperCase();
      } else if (on) {
        rusLowerCase();
      }
    }
  } else if (event.key === 'Tab') {
    event.preventDefault();
    text('  ');
  } else if (event.key === 'Control' || event.key === 'Meta' || event.key === 'Alt'
  || event.key === 'Delete' || event.key === 'ArrowRight' || event.key === 'ArrowLeft'
  || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    text('');
  } else if (event.code === 'Space') {
    event.preventDefault();
    text(' ');
  } else if (event.code === 'Enter') {
    text('\n');
  } else if (event.code === 'Backspace') {
    const textareaVal = document.querySelector('.input-display-field').value;
    document.querySelector('.input-display-field').value = textareaVal.substr(0, textareaVal.length - 1);
  } else {
    const letter = document.querySelector(`.${event.code} span`).innerText;
    text(letter);
  }
};

// KeyUp Events
const keyupEvent = (event) => {
  const engl = document.querySelector('.engl');
  const rus = document.querySelector('.rus');
  const off = document.querySelector('.off');
  const on = document.querySelector('.on');
  document.querySelectorAll('.key').forEach((element) => {
    element.classList.remove('active');
  });
  if (event.key === 'Shift') {
    if (engl) {
      if (off) {
        englishUpperCase();
      } else if (on) {
        englishLowerCase();
      }
    } else if (rus) {
      if (off) {
        rusUpperCase();
      } else if (on) {
        rusLowerCase();
      }
    }
  }
};

// Click events
const clickEvent = (event) => {
  const engl = document.querySelector('.engl');
  const rus = document.querySelector('.rus');
  const off = document.querySelector('.off');
  const on = document.querySelector('.on');
  const CapsLock = document.querySelector('.CapsLock span');
  const AltLeft = document.querySelector('.AltLeft span');
  const AltRight = document.querySelector('.AltRight span');
  const ControlLeft = document.querySelector('.ControlLeft span');
  const ControlRight = document.querySelector('.ControlRight span');
  const Win = document.querySelector('.MetaLeft span');
  const ShiftLeft = document.querySelector('.ShiftLeft span');
  const ShiftRight = document.querySelector('.ShiftRight span');
  const Delete = document.querySelector('.Delete span');
  const arrowRight = document.querySelector('.ArrowRight span');
  const arrowLeft = document.querySelector('.ArrowLeft span');
  const arrowDown = document.querySelector('.ArrowDown span');
  const arrowUp = document.querySelector('.ArrowUp span');
  const tab = document.querySelector('.Tab span');
  const enter = document.querySelector('.Enter span');
  const backspace = document.querySelector('.Backspace span');

  if (event.target === CapsLock) {
    if (event.repeat) return;
    if (engl) {
      if (off) {
        englishUpperCase();
      } else if (on) {
        englishLowerCase();
      }
    } else if (rus) {
      if (off) {
        rusUpperCase();
      } else if (on) {
        rusLowerCase();
      }
    }
  } else if (event.target === tab) {
    event.preventDefault();
    text('  ');
  } else if (event.target === AltLeft || event.target === AltRight
    || event.target === ControlLeft || event.target === ControlRight || event.target === Win
    || event.target === ShiftLeft || event.target === ShiftRight || event.target === Delete
    || event.target === arrowRight || event.target === arrowLeft || event.target === arrowUp
    || event.target === arrowDown) {
    event.preventDefault();
    text('');
  } else if (event.target === backspace) {
    event.preventDefault();
    const textareaVal = document.querySelector('.input-display-field').value;
    document.querySelector('.input-display-field').value = textareaVal.substr(0, textareaVal.length - 1);
  } else if (event.target === enter) {
    event.preventDefault();
    text('\n');
  } else {
    const letter = event.target.closest('span').innerHTML;
    text(letter);
  }
};

// Mousedown events
const mouseDownEvents = () => {
  const engl = document.querySelector('.engl');
  const rus = document.querySelector('.rus');
  const off = document.querySelector('.off');
  const on = document.querySelector('.on');


  if (engl) {
    if (off) {
      englishUpperCase();
    } else if (on) {
      englishLowerCase();
    }
  } else if (rus) {
    if (off) {
      rusUpperCase();
    } else if (on) {
      rusLowerCase();
    }
  }
  text('');
};

// Mouseup events
const mouseUpEvents = () => {
  const engl = document.querySelector('.engl');
  const rus = document.querySelector('.rus');
  const off = document.querySelector('.off');
  const on = document.querySelector('.on');

  if (engl) {
    if (off) {
      englishUpperCase();
    } else if (on) {
      englishLowerCase();
    }
  } else if (rus) {
    if (off) {
      rusUpperCase();
    } else if (on) {
      rusLowerCase();
    }
  }
  text('');
};

document.querySelectorAll('.key').forEach((element) => {
  element.addEventListener('click', clickEvent);
});
document.addEventListener('keydown', keydownEvent);
document.addEventListener('keyup', keyupEvent);
document.querySelector('.ShiftLeft').addEventListener('mousedown', mouseDownEvents);
document.querySelector('.ShiftLeft').addEventListener('mouseup', mouseUpEvents);
