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

const pageBody = document.querySelector('body');
const pageMain = document.createElement('main');
pageMain.classList.add('main');
pageBody.append(pageMain);

const pageTitle = document.createElement('h1');
pageTitle.textContent = 'Virtual keyboard';
pageTitle.classList.add('main__title');
pageMain.append(pageTitle);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  keyboard.append(row);
}
const buttons = {
  tilde: new Button(1, 'Backquote', '`', '`', '`', '`'),
  number1: new Button(1, 'Digit1', '1', '1', '1', '1'),
  number2: new Button(1, 'Digit2', '2', '2', '2', '2'),
  number3: new Button(1, 'Digit3', '3', '3', '3', '3'),
  number4: new Button(1, 'Digit4', '4', '4', '4', '4'),
  number5: new Button(1, 'Digit5', '5', '5', '5', '5'),
  number6: new Button(1, 'Digit6', '6', '6', '6', '6'),
  number7: new Button(1, 'Digit7', '7', '7', '7', '7'),
  number8: new Button(1, 'Digit8', '8', '8', '8', '8'),
  number9: new Button(1, 'Digit9', '9', '9', '9', '9'),
  number0: new Button(1, 'Digit0', '0', '0', '0', '0'),
  operation1: new Button(1, 'Minus', '-', '-', '-', '-'),
  operation2: new Button(1, 'Equal', '=', '=', '=', '='),
  backspace: new Button(1, 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'),
  tab: new Button(2, 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'),
  alphabet1: new Button(2, 'KeyQ', 'q', 'q', 'q', 'q'),
  alphabet2: new Button(2, 'KeyW', 'w', 'w', 'w', 'w'),
  alphabet3: new Button(2, 'KeyE', 'e', 'e', 'e', 'e'),
  alphabet4: new Button(2, 'KeyR', 'r', 'r', 'r', 'r'),
  alphabet5: new Button(2, 'KeyT', 't', 't', 't', 't'),
  alphabet6: new Button(2, 'KeyY', 'y', 'y', 'y', 'y'),
  alphabet7: new Button(2, 'KeyU', 'u', 'u', 'u', 'u'),
  alphabet8: new Button(2, 'KeyI', 'i', 'i', 'i', 'i'),
  alphabet9: new Button(2, 'KeyO', 'o', 'o', 'o', 'o'),
  alphabet10: new Button(2, 'KeyP', 'p', 'p', 'p', 'p'),
  alphabet11: new Button(2, 'BracketLeft', '[', '[', '[', '['),
  alphabet12: new Button(2, 'BracketRight', ']', ']', ']', ']'),
  alphabet13: new Button(2, 'Backslash', '\\', '\\', '\\', '\\'),
  delete: new Button(2, 'Delete', 'Del', 'Del', 'Del', 'Del'),
  capsLock: new Button(3, 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'),
  alphabet14: new Button(3, 'KeyA', 'a', 'a', 'a', 'a'),
  alphabet15: new Button(3, 'KeyS', 's', 's', 's', 's'),
  alphabet16: new Button(3, 'KeyD', 'd', 'd', 'd', 'd'),
  alphabet17: new Button(3, 'KeyF', 'f', 'f', 'f', 'f'),
  alphabet18: new Button(3, 'KeyG', 'g', 'g', 'g', 'g'),
  alphabet19: new Button(3, 'KeyH', 'h', 'h', 'h', 'h'),
  alphabet20: new Button(3, 'KeyJ', 'j', 'j', 'j', 'j'),
  alphabet21: new Button(3, 'KeyK', 'k', 'k', 'k', 'k'),
  alphabet22: new Button(3, 'KeyL', 'l', 'l', 'l', 'l'),
  alphabet23: new Button(3, 'Semicolon', ';', ';', ';', ';'),
  alphabet24: new Button(3, 'Quote', '\'', '\'', '\'', '\''),
  enter: new Button(3, 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'),
  leftShift: new Button(4, 'ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'),
  alphabet25: new Button(4, 'KeyZ', 'z', 'z', 'z', 'z'),
  alphabet26: new Button(4, 'KeyX', 'x', 'x', 'x', 'x'),
  alphabet27: new Button(4, 'KeyC', 'c', 'c', 'c', 'c'),
  alphabet28: new Button(4, 'KeyV', 'v', 'v', 'v', 'v'),
  alphabet29: new Button(4, 'KeyB', 'b', 'b', 'b', 'b'),
  alphabet30: new Button(4, 'KeyN', 'n', 'n', 'n', 'n'),
  alphabet31: new Button(4, 'KeyM', 'm', 'm', 'm', 'm'),
  alphabet32: new Button(4, 'Comma', ',', ',', ',', ','),
  alphabet33: new Button(4, 'Period', '.', '.', '.', '.'),
  alphabet34: new Button(4, 'Slash', '/', '/', '/', '/'),
  up: new Button(4, 'ArrowUp', '▲', '▲', '▲', '▲'),
  rightShift: new Button(4, 'ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'),
  leftCtrl: new Button(5, 'ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
  win: new Button(5, 'MetaLeft', 'Win', 'Win', 'Win', 'Win'),
  leftAlt: new Button(5, 'AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'),
  space: new Button(5, 'Space', 'Space', 'Space', 'Space', 'Space'),
  rightAlt: new Button(5, 'AltRight', 'Alt', 'Alt', 'Alt', 'Alt'),
  left: new Button(5, 'ArrowLeft', '◄', '◄', '◄', '◄'),
  down: new Button(5, 'ArrowDown', '▼', '▼', '▼', '▼'),
  right: new Button(5, 'ArrowRight', '►', '►', '►', '►'),
  rightCtrl: new Button(5, 'ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
};
Object.values(buttons).forEach((button) => {
  const buttonItem = document.createElement('div');
  buttonItem.classList.add('button');
  buttonItem.textContent = button.textEn;
  buttonItem.dataset.keyCode = button.event;
  keyboard.querySelectorAll('.row')[button.row - 1].append(buttonItem);
});
pageMain.append(keyboard);

document.addEventListener('keydown', (event) => {
  const button = keyboard.querySelector(`div[data-key-code="${event.code}"]`);
  button.classList.add('active');
});

document.addEventListener('keyup', (event) => {
  const button = keyboard.querySelector(`div[data-key-code="${event.code}"]`);
  button.classList.remove('active');
});
