let exampleShader;
let backgroundImage;
let paletteImage;
let palette_Size = 8;
let palette_Hue = true;
let palette_Saturation = true;
let palette_Value = true;

function Change_Image() {
  let userFile = document.getElementById("image-input").files;
  let userFileURL = URL.createObjectURL(userFile[0]);

  backgroundImage = loadImage(userFileURL, draw);  
}

function Change_Settings(){
  palette_Hue = document.getElementById("hue-check").checked;
  palette_Saturation = document.getElementById("saturation-check").checked;
  palette_Value = document.getElementById("value-check").checked;

  console.log(palette_Hue);
  draw();
}

function Change_Palette() {
  palette_Size = document.getElementById("palette-size").value
  let userFile = document.getElementById("palette-input").files;
  let userFileURL = URL.createObjectURL(userFile[0]);

  paletteImage = loadImage(userFileURL, draw);  
}

function preload(){
  exampleShader = loadShader("P5js/example.vert", "P5js/Palette.frag");
  backgroundImage = loadImage("P5js/elgbetta.jpg");
  paletteImage = loadImage("P5js/portfolio_Palette_8.png")
}

function setup() {
  var canvas = document.getElementById("main-canvas");
  createCanvas(400, 400, WEBGL, canvas);
  
  shader(exampleShader);
  
  exampleShader.setUniform("background", backgroundImage);

  noStroke();
}

function draw() {
  exampleShader.setUniform("background", backgroundImage);
  exampleShader.setUniform("palette_Img", paletteImage)
  exampleShader.setUniform("palette_Size", palette_Size)
  exampleShader.setUniform("palette_Hue", palette_Hue);
  exampleShader.setUniform("palette_Saturation", palette_Saturation);
  exampleShader.setUniform("palette_Value", palette_Value);
  
  //ellipse(0, 0, width, height, 150);
  rect(0, 0, width, height);
  noLoop();
}
