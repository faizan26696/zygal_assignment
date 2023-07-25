function createCharacter() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const character = "F";
  const fontColor = "blue";

  ctx.font = "bold 20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = fontColor;

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  ctx.fillText(character, centerX, centerY);
}

function canvasDataToHexCode() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let pixelHexData = "";

  for (let i = 0; i < imageData.length; i += 4) {
    const r = imageData[i].toString(16).padStart(2, "0");
    const g = imageData[i + 1].toString(16).padStart(2, "0");
    const b = imageData[i + 2].toString(16).padStart(2, "0");
    pixelHexData += `#${r}${g}${b}\n`;
  }

  return pixelHexData;
}

function downloadPixelData() {
  const hexCodeData = canvasDataToHexCode();
  const blob = new Blob([hexCodeData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = url;
  downloadLink.download = "pixel_data.txt";
}

createCharacter();

const link = document.getElementById("downloadLink");
link.addEventListener("click", downloadPixelData);
