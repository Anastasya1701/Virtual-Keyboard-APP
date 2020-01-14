export const Arrays = () => {
// Arrays of keyCodes(charCode) / special class names
  const arrays = {
    arrCodeRow0: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4',
      'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
      'Minus', 'Equal', 'Backspace'], // static event.code

    arrCodeRow1: ['', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT',
      'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
      'BracketLeft', 'BracketRight', 'Backslash', 'Delete'], // static

    arrCodeRow2: ['', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
      'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],

    arrCodeRow3: ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN',
      'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight'],

    arrCodeRow4: ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft',
      'ArrowDown', 'ArrowRight', 'ControlRight'],

    arrKeyCodeRow4: ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],

    specialButtonsarr: ['.row0 .key:last-child', '.row1 .key:first-child',
      '.row1 .key:last-child', '.row2 .key:first-child', '.row2 .key:last-child',
      '.row3 .key:first-child', '.row3 .key:last-child', '.row3 .key:nth-child(12)',
    ],
    specialButtonClass: ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter',
      'ShiftLeft', 'ShiftRight', 'ArrowUp',
    ],
    specialButtonText: ['Back Space', 'Tab', 'DEL', 'Caps Lock', 'ENTER',
      'Shift', 'Shift', '▲',
    ],
    // event.keyCode == charCode
    arrKeyCodeEng: [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113,
      119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103,
      104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 46, 44, 47],

    arrKeyCodeUpEng: [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95,
      43, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124,
      65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 90, 88, 67,
      86, 66, 78, 77, 60, 62, 63],

    arrKeyCodeRus: [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
      1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92,
      1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095,
      1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],

    arrKeyCodeUpRus: [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95,
      43, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066,
      47, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071,
      1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44],
  };
  return arrays;
};

export default Arrays;
