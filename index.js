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
},
{
  "key": "Tab",
  "code": "Tab",
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
},
{
  "key": "CapsLock",
  "code": "CapsLock",
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
},
{
  "key": "Shift",
  "code": "ShiftLeft",
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
},
{
  "key": "Control",
  "code": "ControlLeft",
},
{
  "key": "Meta",
  "code": "MetaLeft",
},
{
  "key": "Alt",
  "code": "AltLeft",
},
{
  "key": " ",
  "code": "Space",
},
{
  "key": "Alt",
  "code": "AltRight",
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
let textarea = document.createElement('textarea')
textarea.classList.add('use-keyboard-input')

//created element div class = 'keyboard__body'
let keyboardBody = document.createElement('div')
keyboardBody.classList.add('keyboard__body')

//added an element to the end of an element keyboardWrapper
keyboardWrapper.append(textarea,keyboardBody)

//function creates div class = 'k-key and keys.code' + data-atribute
//added element to the keyboardBody
function init() {
  let out = ''
  for (let i = 0; i < keyboard.length; i++) {
    // let divKey = document.createElement('div')
    // divKey.classList.add('k-key',`${keyboard[i].code}`)
    // divKey.innerText = keyboard[i].key
    // keyboardBody.appendChild(divKey)
    out += `<div class = 'k-key ${keyboard[i].code}' data= ${keyboard[i].code}>${keyboard[i].key}</div>`
  }
  keyboardBody.innerHTML = out
}

init()

// find all keys with a class
let kKeys = document.querySelectorAll('.keyboard__body .k-key')

//I hang the listener on the document on pressing on the keyboard
document.onkeydown = (event)=>{
  console.log(event.code);
  document.querySelectorAll(`.k-key`).forEach(element => {
    element.classList.remove('active')
  });
   document.querySelector(`.k-key[data =${event.code}]`).classList.add('active');
  textarea.textContent += event.key
  
}

//I hang the listener on the keys on click mouse
kKeys.forEach(element => {
  element.addEventListener('click',(event)=>{
    console.log(event.target);
  kKeys.forEach(element => {
      element.classList.remove('active')
      
    });
    event.target.classList.add('active')
    textarea.textContent += event.target.innerText
  })
});



