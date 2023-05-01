class Button {
  constructor(row, textEnm, textEnShift, textRu, textRuShift) {
    this.textEn = textEnm;
    this.textEnShift = textEnShift;
    this.textRu = textRu;
    this.textRuShift = textRuShift;
    this.row = row;
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
  tilde: new Button(1, '`', '`', '`', '`'),
  number1: new Button(1, '1', '1', '1', '1'),
  number2: new Button(1, '2', '2', '2', '2'),
  number3: new Button(1, '3', '3', '3', '3'),
  number4: new Button(1, '4', '4', '4', '4'),
  number5: new Button(1, '5', '5', '5', '5'),
  number6: new Button(1, '6', '6', '6', '6'),
  number7: new Button(1, '7', '7', '7', '7'),
  number8: new Button(1, '8', '8', '8', '8'),
  number9: new Button(1, '9', '9', '9', '9'),
  number0: new Button(1, '0', '0', '0', '0'),
  operation1: new Button(1, '-', '-', '-', '-'),
  operation2: new Button(1, '=', '=', '=', '='),
  backspace: new Button(1, 'Backspace', 'Backspace', 'Backspace', 'Backspace'),
  tab: new Button(2, 'Tab', 'Tab', 'Tab', 'Tab'),
  alphabet1: new Button(2, 'q', 'q', 'q', 'q'),
  alphabet2: new Button(2, 'w', 'w', 'w', 'w'),
  alphabet3: new Button(2, 'e', 'e', 'e', 'e'),
  alphabet4: new Button(2, 'r', 'r', 'r', 'r'),
  alphabet5: new Button(2, 't', 't', 't', 't'),
  alphabet6: new Button(2, 'y', 'y', 'y', 'y'),
  alphabet7: new Button(2, 'u', 'u', 'u', 'u'),
  alphabet8: new Button(2, 'i', 'i', 'i', 'i'),
  alphabet9: new Button(2, 'o', 'o', 'o', 'o'),
  alphabet10: new Button(2, 'p', 'p', 'p', 'p'),
  alphabet11: new Button(2, '[', '[', '[', '['),
  alphabet12: new Button(2, ']', ']', ']', ']'),
  alphabet13: new Button(2, '\\', '\\', '\\', '\\'),
  delete: new Button(2, 'Del', 'Del', 'Del', 'Del'),
  capsLock: new Button(3, 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'),
  alphabet14: new Button(3, 'a', 'a', 'a', 'a'),
  alphabet15: new Button(3, 's', 's', 's', 's'),
  alphabet16: new Button(3, 'd', 'd', 'd', 'd'),
  alphabet17: new Button(3, 'f', 'f', 'f', 'f'),
  alphabet18: new Button(3, 'g', 'g', 'g', 'g'),
  alphabet19: new Button(3, 'h', 'h', 'h', 'h'),
  alphabet20: new Button(3, 'j', 'j', 'j', 'j'),
  alphabet21: new Button(3, 'k', 'k', 'k', 'k'),
  alphabet22: new Button(3, 'l', 'l', 'l', 'l'),
  alphabet23: new Button(3, ';', ';', ';', ';'),
  alphabet24: new Button(3, '\'', '\'', '\'', '\''),
  enter: new Button(3, 'Enter', 'Enter', 'Enter', 'Enter'),
  leftShift: new Button(4, 'Shift', 'Shift', 'Shift'),
  alphabet25: new Button(4, 'z', 'z', 'z', 'z'),
  alphabet26: new Button(4, 'x', 'x', 'x', 'x'),
  alphabet27: new Button(4, 'c', 'c', 'c', 'c'),
  alphabet28: new Button(4, 'v', 'v', 'v', 'v'),
  alphabet29: new Button(4, 'b', 'b', 'b', 'b'),
  alphabet30: new Button(4, 'n', 'n', 'n', 'n'),
  alphabet31: new Button(4, 'm', 'm', 'm', 'm'),
  alphabet32: new Button(4, ',', ',', ',', ','),
  alphabet33: new Button(4, '.', '.', '.', '.'),
  alphabet34: new Button(4, '/', '/', '/', '/'),
  up: new Button(4, '▲', '▲', '▲', '▲'),
  rightShift: new Button(4, 'Shift', 'Shift', 'Shift', 'Shift'),
  leftCtrl: new Button(5, 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
  win: new Button(5, 'Win', 'Win', 'Win', 'Win'),
  leftAlt: new Button(5, 'Alt', 'Alt', 'Alt', 'Alt'),
  space: new Button(5, 'Space', 'Space', 'Space', 'Space'),
  rightAlt: new Button(5, 'Alt', 'Alt', 'Alt', 'Alt'),
  left: new Button(5, '◄', '◄', '◄', '◄'),
  down: new Button(5, '▼', '▼', '▼', '▼'),
  right: new Button(5, '►', '►', '►', '►'),
  rightCtrl: new Button(5, 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'),
};
Object.values(buttons).forEach((button) => {
  const buttonItem = document.createElement('div');
  buttonItem.classList.add('button');
  buttonItem.textContent = button.textEn;
  keyboard.querySelectorAll('.row')[button.row - 1].append(buttonItem);
});
pageMain.append(keyboard);
