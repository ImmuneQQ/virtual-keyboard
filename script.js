class Button {
  constructor(row, event, textEn, textEnShift, textRu, textRuShift) {
    this.textEn = textEn;
    this.textEnShift = textEnShift;
    this.textRu = textRu;
    this.textRuShift = textRuShift;
    this.row = row;
    this.event = event;
  }
}

let caps = false;

const pageBody = document.querySelector('body');
const pageMain = document.createElement('main');
pageMain.classList.add('main');
pageBody.append(pageMain);

const pageTitle = document.createElement('h1');
pageTitle.textContent = 'Virtual keyboard';
pageTitle.classList.add('main__title');
pageMain.append(pageTitle);

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
pageMain.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  keyboard.append(row);
}
const buttons = {
  Backquote: new Button(1, 'Backquote', '`', '~', 'ё', 'Ё'),
  Digit1: new Button(1, 'Digit1', '1', '!', '1', '!'),
  Digit2: new Button(1, 'Digit2', '2', '@', '2', '"'),
  Digit3: new Button(1, 'Digit3', '3', '#', '3', '№'),
  Digit4: new Button(1, 'Digit4', '4', '$', '4', ';'),
  Digit5: new Button(1, 'Digit5', '5', '%', '5', '%'),
  Digit6: new Button(1, 'Digit6', '6', '^', '6', ':'),
  Digit7: new Button(1, 'Digit7', '7', '&', '7', '?'),
  Digit8: new Button(1, 'Digit8', '8', '*', '8', '*'),
  Digit9: new Button(1, 'Digit9', '9', '(', '9', '('),
  Digit0: new Button(1, 'Digit0', '0', ')', '0', ')'),
  Minus: new Button(1, 'Minus', '-', '_', '-', '_'),
  Equal: new Button(1, 'Equal', '=', '+', '=', '+'),
  Backspace: new Button(1, 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'),
  Tab: new Button(2, 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'),
  KeyQ: new Button(2, 'KeyQ', 'q', 'Q', 'й', 'Й'),
  KeyW: new Button(2, 'KeyW', 'w', 'W', 'ц', 'Ц'),
  KeyE: new Button(2, 'KeyE', 'e', 'E', 'у', 'У'),
  KeyR: new Button(2, 'KeyR', 'r', 'R', 'к', 'К'),
  KeyT: new Button(2, 'KeyT', 't', 'T', 'е', 'Е'),
  KeyY: new Button(2, 'KeyY', 'y', 'Y', 'н', 'Н'),
  KeyU: new Button(2, 'KeyU', 'u', 'U', 'г', 'Г'),
  KeyI: new Button(2, 'KeyI', 'i', 'I', 'ш', 'Ш'),
  KeyO: new Button(2, 'KeyO', 'o', 'O', 'щ', 'Щ'),
  KeyP: new Button(2, 'KeyP', 'p', 'P', 'з', 'З'),
  BracketLeft: new Button(2, 'BracketLeft', '[', '{', 'х', 'Х'),
  BracketRight: new Button(2, 'BracketRight', ']', '}', 'ъ', 'Ъ'),
  Backslash: new Button(2, 'Backslash', '\\', '|', '\\', '/'),
  Delete: new Button(2, 'Delete', 'Del', 'Del', 'Del', 'Del'),
  CapsLock: new Button(3, 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'),
  KeyA: new Button(3, 'KeyA', 'a', 'A', 'ф', 'Ф'),
  KeyS: new Button(3, 'KeyS', 's', 'S', 'ы', 'Ы'),
  KeyD: new Button(3, 'KeyD', 'd', 'D', 'в', 'В'),
  KeyF: new Button(3, 'KeyF', 'f', 'F', 'а', 'А'),
  KeyG: new Button(3, 'KeyG', 'g', 'G', 'п', 'П'),
  KeyH: new Button(3, 'KeyH', 'h', 'H', 'р', 'Р'),
  KeyJ: new Button(3, 'KeyJ', 'j', 'J', 'о', 'О'),
  KeyK: new Button(3, 'KeyK', 'k', 'K', 'л', 'Л'),
  KeyL: new Button(3, 'KeyL', 'l', 'L', 'д', 'Д'),
  Semicolon: new Button(3, 'Semicolon', ';', ':', 'ж', 'Ж'),
  Quote: new Button(3, 'Quote', '\'', '"', 'э', 'Э'),
  Enter: new Button(3, 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'),
  ShiftLeft: new Button(4, 'ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'),
  KeyZ: new Button(4, 'KeyZ', 'z', 'Z', 'я', 'Я'),
  KeyX: new Button(4, 'KeyX', 'x', 'X', 'ч', 'Ч'),
  KeyC: new Button(4, 'KeyC', 'c', 'C', 'с', 'С'),
  KeyV: new Button(4, 'KeyV', 'v', 'V', 'м', 'М'),
  KeyB: new Button(4, 'KeyB', 'b', 'B', 'и', 'И'),
  KeyN: new Button(4, 'KeyN', 'n', 'N', 'т', 'Т'),
  KeyM: new Button(4, 'KeyM', 'm', 'M', 'ь', 'Ь'),
  Comma: new Button(4, 'Comma', ',', '<', 'б', 'Б'),
  Period: new Button(4, 'Period', '.', '>', 'ю', 'Ю'),
  Slash: new Button(4, 'Slash', '/', '?', '.', ','),
  ArrowUp: new Button(4, 'ArrowUp', '▲', '▲', '▲', '▲'),
  ShiftRight: new Button(4, 'ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'),
  ControlLeft: new Button(5, 'ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
  MetaLeft: new Button(5, 'MetaLeft', 'Win', 'Win', 'Win', 'Win'),
  AltLeft: new Button(5, 'AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'),
  Space: new Button(5, 'Space', 'Space', 'Space', 'Space', 'Space'),
  AltRight: new Button(5, 'AltRight', 'Alt', 'Alt', 'Alt', 'Alt'),
  ArrowLeft: new Button(5, 'ArrowLeft', '◄', '◄', '◄', '◄'),
  ArrowDown: new Button(5, 'ArrowDown', '▼', '▼', '▼', '▼'),
  ArrowRight: new Button(5, 'ArrowRight', '►', '►', '►', '►'),
  ControlRight: new Button(5, 'ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
};
const enAlphabet = [
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
];
Object.values(buttons).forEach((button) => {
  const buttonItem = document.createElement('div');
  buttonItem.classList.add('button');
  buttonItem.textContent = button.textEn;
  buttonItem.dataset.keyCode = button.event;
  keyboard.querySelectorAll('.row')[button.row - 1].append(buttonItem);
});
pageMain.append(keyboard);

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  const buttonElem = keyboard.querySelector(`div[data-key-code="${event.code}"]`);

  const cursorIndex = textarea.selectionStart;

  if (event.code === 'CapsLock') {
    const keyboardElems = keyboard.querySelectorAll('.button');
    keyboardElems.forEach((keyboardElem) => {
      if (enAlphabet.includes(keyboardElem.dataset.keyCode)) {
        if (caps === false) {
          const keyboardElemNew = keyboardElem;
          keyboardElemNew.textContent = buttons[keyboardElem.dataset.keyCode].textEnShift;
        } else {
          const keyboardElemNew = keyboardElem;
          keyboardElemNew.textContent = buttons[keyboardElem.dataset.keyCode].textEn;
        }
      }
    });
    if (caps === true) {
      caps = false;
      buttonElem.classList.remove('active');
    } else {
      caps = true;
      buttonElem.classList.add('active');
    }

    return;
  }

  if (event.code === 'Tab') {
    textarea.value = `${textarea.value.slice(0, cursorIndex)}    ${textarea.value.slice(cursorIndex)}`;
    textarea.selectionStart = cursorIndex + 4;
    textarea.selectionEnd = cursorIndex + 4;
    return;
  }

  if (event.code === 'Space') {
    textarea.value = `${textarea.value.slice(0, cursorIndex)} ${textarea.value.slice(cursorIndex)}`;
    textarea.selectionStart = cursorIndex + 1;
    textarea.selectionEnd = cursorIndex + 1;
    return;
  }

  if (event.code === 'Enter') {
    textarea.value = `${textarea.value.slice(0, cursorIndex)}\n${textarea.value.slice(cursorIndex)}`;
    textarea.selectionStart = cursorIndex + 1;
    textarea.selectionEnd = cursorIndex + 1;
    return;
  }

  if (event.code === 'Backspace') {
    if (cursorIndex > 0) {
      textarea.value = textarea.value
        .slice(0, cursorIndex - 1) + textarea.value.slice(cursorIndex);
      textarea.selectionStart = cursorIndex - 1;
      textarea.selectionEnd = cursorIndex - 1;
    }

    return;
  }

  if (event.code === 'Delete') {
    if (cursorIndex < textarea.value.length) {
      textarea.value = textarea.value
        .slice(0, cursorIndex) + textarea.value.slice(cursorIndex + 1);
      textarea.selectionStart = cursorIndex;
      textarea.selectionEnd = cursorIndex;
    }

    return;
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'MetaLeft') {
    buttonElem.classList.add('active');
    return;
  }

  buttonElem.classList.add('active');
  textarea.value = textarea.value
    .slice(0, cursorIndex) + buttonElem.textContent + textarea.value.slice(cursorIndex);
  textarea.selectionStart = cursorIndex + 1;
  textarea.selectionEnd = cursorIndex + 1;
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    return;
  }

  const button = keyboard.querySelector(`div[data-key-code="${event.code}"]`);
  button.classList.remove('active');
});

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('button')) {
    event.target.classList.add('active');
  }
});

document.addEventListener('mouseup', () => {
  const keyboardButtons = keyboard.querySelectorAll('.button');
  keyboardButtons.forEach((keyboardButton) => {
    if (keyboardButton.dataset.keyCode !== 'CapsLock') {
      keyboardButton.classList.remove('active');
    }
  });
});
