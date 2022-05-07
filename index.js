//main an array of objects of keys
let keyboard = [{
  "key": "`",
  "keyRu": "ё",
  "code": "Backquote",
},
{
  "key": "1",
  "code": "Digit1",
},
{
  "key": "2",
  "code": "Digit2",
}
  ,
{
  "key": "3",
  "code": "Digit3",
},
{
  "key": "4",
  "code": "Digit4",
}
  ,
{
  "key": "5",
  "code": "Digit5",
},
{
  "key": "6",
  "code": "Digit6",
},
{
  "key": "7",
  "code": "Digit7",
},
{
  "key": "8",
  "code": "Digit8",
},
{
  "key": "9",
  "code": "Digit9",
},
{
  "key": "0",
  "code": "Digit0",
},
{
  "key": "-",
  "code": "Minus",
},
{
  "key": "=",
  "code": "Equal",
},
{
  "key": "Backspace",
  "code": "Backspace",
  "class": "other-btn"
},
{
  "key": "Tab",
  "code": "Tab",
  "class": "other-btn"
},
{
  "key": "q",
  "keyRu": "й",
  "code": "KeyQ",
},
{
  "key": "w",
  "keyRu": "ц",
  "code": "KeyW",
},
{
  "key": "e",
  "keyRu": "у",
  "code": "KeyE",
},
{
  "key": "r",
  "keyRu": "к",
  "code": "KeyR",
},
{
  "key": "t",
  "keyRu": "е",
  "code": "KeyT",
},
{
  "key": "y",
  "keyRu": "н",
  "code": "KeyY",
},
{
  "key": "u",
  "keyRu": "г",
  "code": "KeyU",
},
{
  "key": "i",
  "keyRu": "ш",
  "code": "KeyI",
},
{
  "key": "o",
  "keyRu": "щ",
  "code": "KeyO",
},
{
  "key": "p",
  "keyRu": "з",
  "code": "KeyP",
},
{
  "key": "[",
  "keyRu": "х",
  "code": "BracketLeft",
},
{
  "key": "]",
  "keyRu": "ъ",
  "code": "BracketRight",
},
{
  "key": "\\",
  "code": "Backslash",
},
{
  "key": "Delete",
  "code": "Delete",
  "class": "other-btn"
},
{
  "key": "CapsLock",
  "code": "CapsLock",
  "class": "other-btn"
},
{
  "key": "a",
  "keyRu": "ф",
  "code": "KeyA",
},
{
  "key": "s",
  "keyRu": "ы",
  "code": "KeyS",
},
{
  "key": "d",
  "keyRu": "в",
  "code": "KeyD",
},
{
  "key": "f",
  "keyRu": "а",
  "code": "KeyF",
},
{
  "key": "g",
  "keyRu": "п",
  "code": "KeyG",
},
{
  "key": "h",
  "keyRu": "р",
  "code": "KeyH",
},
{
  "key": "j",
  "keyRu": "о",
  "code": "KeyJ",
},
{
  "key": "k",
  "keyRu": "л",
  "code": "KeyK",
},
{
  "key": "l",
  "keyRu": "д",
  "code": "KeyL",
},
{
  "key": ";",
  "keyRu": "ж",
  "code": "Semicolon",
},
{
  "key": "'",
  "keyRu": "э",
  "code": "Quote",
},
{
  "key": "Enter",
  "code": "Enter",
  "class": "other-btn"
},
{
  "key": "Shift",
  "code": "ShiftLeft",
  "class": "other-btn"
},
{
  "key": "z",
  "keyRu": "я",
  "code": "KeyZ",
},
{
  "key": "x",
  "keyRu": "ч",
  "code": "KeyX",
},
{
  "key": "c",
  "keyRu": "с",
  "code": "KeyC",
},
{
  "key": "v",
  "keyRu": "м",
  "code": "KeyV",
},
{
  "key": "b",
  "keyRu": "и",
  "code": "KeyB",
},
{
  "key": "n",
  "keyRu": "т",
  "code": "KeyN",
},
{
  "key": "m",
  "keyRu": "ь",
  "code": "KeyM",
},
{
  "key": ",",
  "keyRu": "б",
  "code": "Comma",
},
{
  "key": ".",
  "keyRu": "ю",
  "code": "Period",
},
{
  "key": "/",
  "keyRu": ".",
  "code": "Slash",
},
{
  "key": "↑",
  "code": "ArrowUp",
},
{
  "key": "Shift",
  "code": "ShiftRight",
  "class": "other-btn"
},
{
  "key": "Control",
  "code": "ControlLeft",
  "class": "other-btn"
},
{
  "key": "Meta",
  "code": "MetaLeft",
  "class": "other-btn"
},
{
  "key": "Alt",
  "code": "AltLeft",
  "class": "other-btn"
},
{
  "key": " ",
  "code": "Space",
  "class": "other-btn"
},
{
  "key": "Alt",
  "code": "AltRight",
  "class": "other-btn"
},
{
  "key": "←",
  "code": "ArrowLeft",

},
{
  "key": "↓",
  "code": "ArrowDown",
},
{
  "key": "→",
  "code": "ArrowRight",
},
{
  "key": "Control",
  "code": "ControlRight",
  "class": "other-btn"
}
]

//found element
let body = document.querySelector('.body')


//created element div class = 'keyboard__wrapper'
let keyboardWrapper = document.createElement('div')
keyboardWrapper.classList.add('keyboard__wrapper')

//added an element to the beginning of an element body
body.prepend(keyboardWrapper)


//created element textarea class = 'use-keyboard-input'
let textArea = document.createElement('textarea')
textArea.classList.add('use-keyboard-input')
textArea.setAttribute("rows", 20)


//created element div class = 'keyboard__body'
let keyboardBody = document.createElement('div')
keyboardBody.classList.add('keyboard__body')

//added an element to the end of an element keyboardWrapper
keyboardWrapper.append(textArea, keyboardBody)

//function creates div class = 'k-key and keys.code' + data-atribute
//added element to the keyboardBody
function init() {
  let out = ''
  for (let i = 0; i < keyboard.length; i++) {
    if (keyboard[i].class === "other-btn") {

      out += `<div class = 'k-key ${keyboard[i].code} ${keyboard[i].class}' data= ${keyboard[i].code}>${keyboard[i].key}</div>`
    } else {

      out += `<div class = 'k-key ${keyboard[i].code} simvol_keys' data= ${keyboard[i].code}>${keyboard[i].key}</div>`

    }

  }
  keyboardBody.innerHTML = out
}

init()


// find all keys with a class
let kKeysSimvol = document.querySelectorAll('.simvol_keys')
let allKeys = document.querySelectorAll('.k-key')
let otherKeys = document.querySelectorAll('.other-btn')
let textAreaValue = textArea.value

//I hang the listener on the document on pressing on the keyboard
document.onkeydown = (event) => {
  textArea.focus();

  console.log(event.code);
  document.querySelectorAll(`.k-key`).forEach(element => {
    element.classList.remove('active')
  });
  document.querySelector(`.k-key[data =${event.code}]`).classList.add('active');
  textArea.textContent += event.key
}

document.onkeyup = (event) => {
  document.querySelectorAll(`.k-key`).forEach(element => {
    element.classList.remove('active')
  });
}




//I hang the listener on the keys on click mouse
allKeys.forEach(element => {
  element.addEventListener('click', (event) => {
    console.log(event.target);
    allKeys.forEach(element => {
      element.classList.remove('active')
    });
    event.target.classList.add('active')
  })
});

function pushSimvolTextarea() {
  textArea.focus();
  textArea.value += event.target.textContent
}

let flag = false
kKeysSimvol.forEach(element => {
  element.addEventListener('click', pushSimvolTextarea)
});

otherKeys.forEach(element => {
  if (element.classList.contains('Backspace')) {
    element.addEventListener('click', Backspace)
  }
  if (element.classList.contains('Space')) {
    element.addEventListener('click', SpaceText)
  }

  if (element.classList.contains('Delete')) {
    element.addEventListener('click', Delete)
  }

  if (element.classList.contains('Enter')) {
    element.addEventListener('click', Enter)
  }

  if (element.classList.contains('Tab')) {
    element.addEventListener('click', Tab)
  }

  if (element.classList.contains('CapsLock')) {
    element.addEventListener('click',CapsLock )
  }

})












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
    rc.setEndPoint('EndToStart', re);

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
    range.moveStart('character', currentPos);
    range.select();
  }
}


function Backspace() {
  let currentPos = getCaret(textArea);
  console.log(getCaret(textArea));
  let text = textArea.value;

  let backSpace = text.substr(0, currentPos - 1) + text.substr(currentPos, text.length);

  textArea.value = backSpace;

  resetCursor(textArea, currentPos - 1);
}

function SpaceText() {
  let currentPos = getCaret(textArea);
  console.log(getCaret(textArea));
  let text = textArea.value
  let space = ' ';
  let Space = text + space
  textArea.value = Space;
  resetCursor(textArea, currentPos + 1);
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
  textArea.focus()
  let currentPos = getCaret(textArea);
  let text = textArea.value;

  if (currentPos === text.length) {
    textArea.value += "\r\n";
  }
  if (currentPos < text.length) {
    text2 = (text.substr(0, currentPos - 1) + "\r\n") + text.substr(currentPos, text.length)
    textArea.value = text2;
    resetCursor(textArea, currentPos);
  }
}

function Tab() {
  let currentPos = getCaret(textArea);
  console.log(getCaret(textArea));
  let text = textArea.value
  let tabSimvol = '\t';
  let Tab = text + tabSimvol
  textArea.value = Tab;
  resetCursor(textArea, currentPos + 1);
}

function CapsLock() {
    if (flag == false) {
      kKeysSimvol.forEach((el) => {
        el.textContent = el.textContent.toUpperCase();
        flag = true;
      })
    } else {
      kKeysSimvol.forEach((el) => {
        el.textContent = el.textContent.toLowerCase();
        flag = false;
      })
    }
  }
