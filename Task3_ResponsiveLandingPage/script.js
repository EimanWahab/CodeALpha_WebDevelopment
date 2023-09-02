const textElement = document.getElementById("typing-text");
const texts = ["Luxe Living", "Smart and Simple"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];
  const typingSpeed = isDeleting ? 50 : 100; // Adjust typing speed as needed

  if (charIndex < currentText.length) {
    textElement.innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, 1000); // Delay before erasing
  }
}

function eraseText() {
  const currentText = texts[textIndex];
  const erasingSpeed = 50; // Adjust erasing speed as needed

  if (charIndex > 0) {
    textElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 500); // Delay before typing the next text
  }
}

// Start the typing animation
typeText();


