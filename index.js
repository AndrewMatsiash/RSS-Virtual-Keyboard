//main an array of objects of keys
let keyboard = [
  {
    key: "`",
    keyRu: "ё",
    code: "Backquote",
    shiftUp: "~",
    class: "shiftUp",
  },
  {
    key: "1",
    code: "Digit1",
    shiftUp: "!",
    class: "shiftUp",
  },
  {
    key: "2",
    code: "Digit2",
    shiftUp: "@",
    class: "shiftUp",
  },
  {
    key: "3",
    code: "Digit3",
    shiftUp: "#",
    class: "shiftUp",
  },
  {
    key: "4",
    code: "Digit4",
    shiftUp: "$",
    class: "shiftUp",
  },
  {
    key: "5",
    code: "Digit5",
    shiftUp: "%",
    class: "shiftUp",
  },
  {
    key: "6",
    code: "Digit6",
    shiftUp: "^",
    class: "shiftUp",
  },
  {
    key: "7",
    code: "Digit7",
    shiftUp: "&",
    class: "shiftUp",
  },
  {
    key: "8",
    code: "Digit8",
    shiftUp: "*",
    class: "shiftUp",
  },
  {
    key: "9",
    code: "Digit9",
    shiftUp: "(",
    class: "shiftUp",
  },
  {
    key: "0",
    code: "Digit0",
    shiftUp: ")",
    class: "shiftUp",
  },
  {
    key: "-",
    code: "Minus",
    shiftUp: "_",
    class: "shiftUp",
  },
  {
    key: "=",
    code: "Equal",
    shiftUp: "+",
    class: "shiftUp",
  },
  {
    key: "Backspace",
    code: "Backspace",
    class: "other-btn",
  },
  {
    key: "Tab",
    code: "Tab",
    class: "other-btn",
  },
  {
    key: "q",
    keyRu: "й",
    code: "KeyQ",
  },
  {
    key: "w",
    keyRu: "ц",
    code: "KeyW",
  },
  {
    key: "e",
    keyRu: "у",
    code: "KeyE",
  },
  {
    key: "r",
    keyRu: "к",
    code: "KeyR",
  },
  {
    key: "t",
    keyRu: "е",
    code: "KeyT",
  },
  {
    key: "y",
    keyRu: "н",
    code: "KeyY",
  },
  {
    key: "u",
    keyRu: "г",
    code: "KeyU",
  },
  {
    key: "i",
    keyRu: "ш",
    code: "KeyI",
  },
  {
    key: "o",
    keyRu: "щ",
    code: "KeyO",
  },
  {
    key: "p",
    keyRu: "з",
    code: "KeyP",
  },
  {
    key: "[",
    keyRu: "х",
    code: "BracketLeft",
    shiftUp: "{"
  },
  {
    key: "]",
    keyRu: "ъ",
    code: "BracketRight",
    shiftUp: "}"
  },
  {
    key: "\\",
    code: "Backslash",
    shiftUp: "|"
  },
  {
    key: "Del",
    code: "Delete",
    class: "other-btn",
  },
  {
    key: "CapsLock",
    code: "CapsLock",
    class: "other-btn",
  },
  {
    key: "a",
    keyRu: "ф",
    code: "KeyA",
  },
  {
    key: "s",
    keyRu: "ы",
    code: "KeyS",
  },
  {
    key: "d",
    keyRu: "в",
    code: "KeyD",
  },
  {
    key: "f",
    keyRu: "а",
    code: "KeyF",
  },
  {
    key: "g",
    keyRu: "п",
    code: "KeyG",
  },
  {
    key: "h",
    keyRu: "р",
    code: "KeyH",
  },
  {
    key: "j",
    keyRu: "о",
    code: "KeyJ",
  },
  {
    key: "k",
    keyRu: "л",
    code: "KeyK",
  },
  {
    key: "l",
    keyRu: "д",
    code: "KeyL",
  },
  {
    key: ";",
    keyRu: "ж",
    code: "Semicolon",
    shiftUp: ":"
  },
  {
    key: "'",
    keyRu: "э",
    code: "Quote",
    shiftUp: '"'
  },
  {
    key: "Enter",
    code: "Enter",
    class: "other-btn",
  },
  {
    key: "Shift",
    code: "ShiftLeft",
    class: "other-btn",
  },
  {
    key: "z",
    keyRu: "я",
    code: "KeyZ",
  },
  {
    key: "x",
    keyRu: "ч",
    code: "KeyX",
  },
  {
    key: "c",
    keyRu: "с",
    code: "KeyC",
  },
  {
    key: "v",
    keyRu: "м",
    code: "KeyV",
  },
  {
    key: "b",
    keyRu: "и",
    code: "KeyB",
  },
  {
    key: "n",
    keyRu: "т",
    code: "KeyN",
  },
  {
    key: "m",
    keyRu: "ь",
    code: "KeyM",
  },
  {
    key: ",",
    keyRu: "б",
    code: "Comma",
    shiftUp: "<"
  },
  {
    key: ".",
    keyRu: "ю",
    code: "Period",
    shiftUp: ">"
  },
  {
    key: "/",
    keyRu: ".",
    code: "Slash",
    shiftUp: "?"
  },
  {
    key: "↑",
    code: "ArrowUp",
  },
  {
    key: "Shift",
    code: "ShiftRight",
    class: "other-btn",
  },
  {
    key: "Ctrl",
    code: "ControlLeft",
    class: "other-btn",
  },
  {
    key: "Win",
    code: "MetaLeft",
    class: "other-btn",
  },
  {
    key: "Alt",
    code: "AltLeft",
    class: "other-btn",
  },
  {
    key: " ",
    code: "Space",
    class: "other-btn",
  },
  {
    key: "Alt",
    code: "AltRight",
    class: "other-btn",
  },
  {
    key: "←",
    code: "ArrowLeft",
  },
  {
    key: "↓",
    code: "ArrowDown",
  },
  {
    key: "→",
    code: "ArrowRight",
  },
  {
    key: "Ctrl",
    code: "ControlRight",
    class: "other-btn",
  },
];
// textArea.focus()
//found element
let body = document.querySelector(".body");

//created element div class = 'keyboard__wrapper'
let keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("keyboard__wrapper");

//added an element to the beginning of an element body
body.prepend(keyboardWrapper);

//created element textarea class = 'use-keyboard-input'
let textArea = document.createElement("textarea");
textArea.classList.add("use-keyboard-input");
textArea.setAttribute("rows", 20);

//created element div class = 'keyboard__body'
let keyboardBody = document.createElement("div");
keyboardBody.classList.add("keyboard__body");

//created element div class = 'message'
let message = document.createElement("div");
message.classList.add("message");
message.innerText = 
'Клавиатура создана в операционной системе Windows \n Для переключения языка комбинация: левыe ctrl + alt'
//added an element to the end of an element keyboardWrapper
keyboardWrapper.append(textArea, keyboardBody,message);

//function creates div class = 'k-key and keys.code' + data-atribute
//added element to the keyboardBody
function init() {
  let out = "";
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].class === "other-btn") {
      out += `<div class = 'k-key ${keyboard[i].code} ${keyboard[i].class}' data= ${keyboard[i].code}>${keyboard[i].key}</div>`;
    } else if (keyboard[i].shiftUp !== undefined) {
      out += `<div class = 'k-key ${keyboard[i].code} shiftUp simvol_keys' data= ${keyboard[i].code}>${keyboard[i].key}</div>`;
    } else {
      out += `<div class = 'k-key ${keyboard[i].code} simvol_keys' data= ${keyboard[i].code}>${keyboard[i].key}</div>`;
    }
  }

  keyboardBody.innerHTML = out;
}

init();



// find all keys with a class
const kKeysSimvol = document.querySelectorAll(".simvol_keys");
const allKeys = document.querySelectorAll(".k-key");
const otherKeys = document.querySelectorAll(".other-btn");
let textAreaValue = textArea.value;

//I hang the listener on the document on pressing on the keyboard
document.onkeydown = (event) => {
  textArea.focus();
  console.log(event);
  if (event.code === "Tab") {
    event.preventDefault();
    Tab()
  }
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }
  if (event.code === "CapsLock") {
    event.preventDefault();
    CapsLock()
  }
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    event.preventDefault();
    shiftDown()
  }
  console.log(event.code);
  document.querySelectorAll(`.k-key`).forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(`.k-key[data =${event.code}]`).classList.add("active");
};

document.onkeyup = (event) => {
  document.querySelectorAll(`.k-key`).forEach((element) => {
    element.classList.remove("active");
  });
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    event.preventDefault();
    shiftUp()
  }
};

//I hang the listener on the keys on click mouse

keyboardBody.addEventListener("mousedown", (event) => {
  if (event.target.closest(".k-key")) {
    event.target.classList.add("active");
  }
});

keyboardBody.addEventListener("mouseup", (event) => {
  if (event.target.classList.contains("k-key")) {
    event.target.classList.remove("active");
  }
});


keyboardBody.addEventListener("mouseout", (event) => {
  if (event.target.closest(".k-key")) {
    event.target.classList.remove("active");
  }
});




function pushSimvolTextarea() {
  textArea.focus();
  let currentPos = getCaret(textArea);
  if (currentPos === textArea.value.length || currentPos === 0) {
    textArea.value += event.target.textContent;
  } else {
    console.log(getCaret(textArea));
    let text = textArea.value;
    let backSpace = text.substr(0, currentPos) + event.target.textContent + text.substr(currentPos, text.length);
    textArea.value = backSpace;
    resetCursor(textArea, currentPos + 1);
  }

}

kKeysSimvol.forEach((element) => {
  element.addEventListener("click", pushSimvolTextarea);
});


let flag = false; //flag capsLock
otherKeys.forEach((element) => {
  if (element.classList.contains("Backspace")) {
    element.addEventListener("click", Backspace);
  }
  if (element.classList.contains("Space")) {
    element.addEventListener("click", SpaceText);
  }

  if (element.classList.contains("Delete")) {
    element.addEventListener("click", Delete);
  }

  if (element.classList.contains("Enter")) {
    element.addEventListener("click", Enter);
  }

  if (element.classList.contains("Tab")) {
    element.addEventListener("click", Tab);
  }

  if (element.classList.contains("CapsLock")) {
    element.addEventListener("click", CapsLock);
  }
  if (element.classList.contains("ShiftLeft") || element.classList.contains("ShiftRight")) {
    element.addEventListener("mouseup", shiftUp);
    element.addEventListener("mousedown", shiftDown);
  }
});


function Backspace() {
  let currentPos = getCaret(textArea);
  console.log(getCaret(textArea));
  let text = textArea.value;
  let backSpace = text.substr(0, currentPos - 1) + text.substr(currentPos, text.length);
  textArea.value = backSpace;
  resetCursor(textArea, currentPos - 1);
}

function createsTextFromTheCursor(key){
  textArea.focus();
  let currentPos = getCaret(textArea);
  console.log(currentPos);
  if (currentPos === textArea.value.length) {
    textArea.value += key;
  } else {
    let text= textArea.value;
    let newText = text.substr(0, currentPos) + key + text.substr(currentPos, text.length);
    textArea.value = newText;
    resetCursor(textArea, currentPos + 1);
  }
}

function SpaceText() {
  let space = " "
  createsTextFromTheCursor(space)
}

function Delete() {
  let currentPos = getCaret(textArea);
  console.log(getCaret(textArea));
  let text = textArea.value;
  let backSpace = text.substr(0, currentPos) + text.substr(currentPos + 1, text.length);
  textArea.value = backSpace;
  resetCursor(textArea, currentPos);
}

function Enter() {
  let enter = "\r\n"
  createsTextFromTheCursor(enter)
}

function Tab() {
  let tab = "\t"
createsTextFromTheCursor(tab)
}

function CapsLock() {
  if (flag == false) {
    kKeysSimvol.forEach((el) => {
      el.textContent = el.textContent.toUpperCase();
      flag = true;
    });
  } else {
    kKeysSimvol.forEach((el) => {
      el.textContent = el.textContent.toLowerCase();
      flag = false;
    });
  }
}

const allElemShiftUp = document.querySelectorAll('.shiftUp')
let arrayKeyShiftUp = [];
function sortArrayToKeyShiftUp() {
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].shiftUp !== undefined) {
      arrayKeyShiftUp.push(keyboard[i])
    }
  }
}
sortArrayToKeyShiftUp()

function shiftUp() {
  if (flaglang == true) {
    allElemShiftUp[0].textContent = arrayKeyShiftUp[0].keyRu;
    for (let i = 1; i < arrayKeyShiftUp.length; i++) {
      allElemShiftUp[i].textContent = arrayKeyShiftUp[i].key;
    }
    kKeysSimvol.forEach((el) => {
      el.textContent = el.textContent.toLowerCase();
    });
  } else {
    for (let i = 0; i < arrayKeyShiftUp.length; i++) {
      allElemShiftUp[i].textContent = arrayKeyShiftUp[i].key;
    }
    kKeysSimvol.forEach((el) => {
      el.textContent = el.textContent.toLowerCase();
    })
  }
};

function shiftDown() {
  if (flaglang == true) {
    allElemShiftUp[0].textContent = arrayKeyShiftUp[0].keyRu;
    for (let i = 1; i < arrayKeyShiftUp.length; i++) {
      allElemShiftUp[i].textContent = arrayKeyShiftUp[i].shiftUp;
    }
    kKeysSimvol.forEach((el) => {
      el.textContent = el.textContent.toUpperCase();
    });
  } else {
    for (let i = 0; i < arrayKeyShiftUp.length; i++) {
      allElemShiftUp[i].textContent = arrayKeyShiftUp[i].shiftUp;
    }
    kKeysSimvol.forEach((el) => {
      el.textContent = el.textContent.toUpperCase();
    })
  }
};


function langRu() {
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].keyRu === undefined) {
      allKeys[i].textContent = keyboard[i].key;
    } else {
      allKeys[i].textContent = keyboard[i].keyRu;
    }
  }
}

function langEng() {
  for (let i = 0; i < keyboard.length; i++) {
    allKeys[i].textContent = keyboard[i].key;
  }
}

let flaglang = JSON.parse(localStorage.getItem("lang"));
function localStorageLang() {
  if (flaglang === true) {
    langRu()
  } else {
    langEng()
  }
}
localStorageLang()


function langToggle() {
  if (flaglang == true) {
    langEng();
    flaglang = false;
    localStorage.setItem("lang", JSON.stringify(flaglang))
  } else {
    langRu();
    flaglang = true;
    localStorage.setItem("lang", JSON.stringify(flaglang))
  }
}


function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener("keydown", function (event) {
    pressed.add(event.code);

    for (let code of codes) {
      // все ли клавиши из набора нажаты?
      if (!pressed.has(code)) {
        return;
      }
    }

    // да, все

    // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
    // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
    // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
    pressed.clear();

    func();
  });

  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
}

runOnKeys(
  langToggle,
  'ControlLeft',
  'AltLeft'
);

function getCaret(el) {
  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    el.focus();

    let r = document.selection.createRange();
    if (r == null) {
      return 0;
    }

    let re = el.createTextRange(),
      rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint("EndToStart", re);

    return rc.text.length;
  }
  return 0;
}

function resetCursor(txtElement, currentPos) {
  if (txtElement.setSelectionRange) {
    txtElement.focus();
    txtElement.setSelectionRange(currentPos, currentPos);
  } else if (txtElement.createTextRange) {
    var range = txtElement.createTextRange();
    range.moveStart("character", currentPos);
    range.select();
  }
}

