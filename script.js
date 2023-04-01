const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');
const previewDiv = document.getElementById('preview');
const hexValueSpan = document.getElementById('hex-value');
const copyButton = document.getElementById('copy-button');
const hexTitle = document.getElementById('hex-title');
convertButton.addEventListener('click', () => {
  const redValue = parseInt(document.getElementById('red').value);
  const greenValue = parseInt(document.getElementById('green').value);
  const blueValue = parseInt(document.getElementById('blue').value);

  if (isNaN(redValue) || isNaN(greenValue) || isNaN(blueValue)) {
    resultDiv.innerHTML = 'Please enter valid RGB values.';
    return;
  }

  if (redValue < 0 || redValue > 255 ||
      greenValue < 0 || greenValue > 255 ||
      blueValue < 0 || blueValue > 255) {
    resultDiv.innerHTML = 'RGB values must be between 0 and 255.';
    return;
  }

  // Convert RGB values to HEX
  const redHex = redValue.toString(16).padStart(2, '0');
  const greenHex = greenValue.toString(16).padStart(2, '0');
  const blueHex = blueValue.toString(16).padStart(2, '0');
  const hexValue = `#${redHex}${greenHex}${blueHex}`;

  // Update result display
  hexTitle.innerHTML = "HEX value:";
  hexValueSpan.innerHTML = ` ${hexValue}`;;
  // Update preview display
  previewDiv.style.backgroundColor = hexValue;
  copyButton.style.display = "block";
  copyButton.innerHTML = "Copy";
});

copyButton.addEventListener('click', () => {
  const hexValue = hexValueSpan.innerHTML;
  navigator.clipboard.writeText(hexValue);
  copyButton.innerHTML = "Copied";
});