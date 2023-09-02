const colorTypeSelect = document.getElementById('colorType');

const basicColorSection = document.getElementById('basicColor');
const gradientColorSection = document.getElementById('gradientColor');

const basicColorInput = document.getElementById('basicColorInput');
const gradientColorInput1 = document.getElementById('gradientColorInput1');
const gradientColorInput2 = document.getElementById('gradientColorInput2');
const generateButton = document.getElementById('generateButton');
const colorCode = document.getElementById('colorCode');
const copyButton = document.getElementById('copyButton');

colorTypeSelect.addEventListener('change', () => {
    const selectedType = colorTypeSelect.value;
    if (selectedType === 'basic') {
        basicColorSection.style.display = 'block';
        gradientColorSection.style.display = 'none';
    } else if (selectedType === 'gradient') {
        basicColorSection.style.display = 'none';
        gradientColorSection.style.display = 'block';
    }
});

generateButton.addEventListener('click', () => {
    let generatedColor;
    if (colorTypeSelect.value === 'basic') {
        generatedColor = basicColorInput.value;
    } else {
        const color1 = gradientColorInput1.value;
        const color2 = gradientColorInput2.value;
        generatedColor = `linear-gradient(to right, ${color1}, ${color2})`;
    }
    document.body.style.background = generatedColor;
    colorCode.value = generatedColor;
});

copyButton.addEventListener('click', () => {
    colorCode.select();
    document.execCommand('copy');
    alert('Color code copied to clipboard');
});
