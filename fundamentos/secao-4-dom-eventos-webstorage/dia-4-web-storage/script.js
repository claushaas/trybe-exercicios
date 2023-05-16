window.onload = () => {
  const bgButtons = document.getElementsByClassName("bg-color");
  const fontColorButtons = document.getElementsByClassName("font-color");
  const fontSizeButtons = document.getElementsByClassName("font-size");
  const lineHeightButtons = document.getElementsByClassName("line-height");
  const fontFamilyButtons = document.getElementsByClassName("font-family");
  const body = document.querySelector("body");
  const storage = localStorage;

  if (storage.getItem('backgroundColor')) {
    body.style.backgroundColor = storage.getItem('backgroundColor')
  }

  if (storage.getItem('color')) {
    body.style.color = storage.getItem('color')
  }
  
  if (storage.getItem('fontSize')) {
    body.style.fontSize = storage.getItem('fontSize')
  }

  if (storage.getItem('lineHeight')) {
    body.style.lineHeight = storage.getItem('lineHeight')
  }

  if (storage.getItem('fontFamily')) {
    body.style.fontFamily = storage.getItem('fontFamily')
  }

  for (const bgButton of bgButtons) {
    bgButton.addEventListener("click", () => {
      // console.log(bgButton.innerText);
      body.style.backgroundColor = bgButton.innerText;
      storage.setItem('backgroundColor', bgButton.innerText)
    });
  }

  for (const fontColorButton of fontColorButtons) {
    fontColorButton.addEventListener("click", () => {
      body.style.color = fontColorButton.innerText;
      storage.setItem('color', fontColorButton.innerText)
    });
  }

  for (const fontSizeButton of fontSizeButtons) {
    fontSizeButton.addEventListener("click", () => {
      body.style.fontSize = fontSizeButton.innerText;
      storage.setItem('fontSize', fontSizeButton.innerText)
    });
  }

  for (const lineHeightButton of lineHeightButtons) {
    lineHeightButton.addEventListener("click", () => {
      body.style.lineHeight = lineHeightButton.innerText;
      storage.setItem('lineHeight', lineHeightButton.innerText)
    });
  }

  for (const fontFamilyButton of fontFamilyButtons) {
    fontFamilyButton.addEventListener("click", () => {
      body.style.fontFamily = fontFamilyButton.innerText;
      storage.setItem('fontFamily', fontFamilyButton.innerText)
    });
  }
};
