let white_keys = [];
let black_keys = [];
let k = 0;
let u = 40;
let p = 220;
let button;

function preload(){
  note_C = loadSound("libraries/notes/C key.mp3");
  note_C_sharp = loadSound("libraries/notes/C_sharp_key.mp3");
  note_D = loadSound("libraries/notes/D key.mp3");
  note_D_sharp = loadSound("libraries/notes/D_sharp_key.mp3");
  note_E = loadSound("libraries/notes/E key.mp3");
  note_F = loadSound("libraries/notes/F key.mp3");
  note_F_sharp = loadSound("libraries/notes/F_sharp_key.mp3");
  note_G = loadSound("libraries/notes/G key.mp3");
  note_G_sharp = loadSound("libraries/notes/G_sharp_key.mp3");
  note_A = loadSound("libraries/notes/A key.mp3");
  note_A_sharp = loadSound("libraries/notes/A_sharp_key.mp3");
  note_B = loadSound("libraries/notes/B key.mp3");
  note_C2 = loadSound("libraries/notes/C6 key.mp3");
  
}

function setup() {
  createCanvas(480,300);
  for (let i = 0; i<8;i++){
    white_keys[i] = new Key (k,0,60,300,255)
    k = k+60;
  }
  
  for (let j = 0; j<2;j++){
    black_keys[j] = new Key (u,0,30,150,0);
    u = u+70
  }
  
  for (let m = 2; m<5;m++){
    black_keys[m] = new Key (p,0,30,150,0)
    p = p + 65;
  }
}

function draw() {
  background(220);
  for (let i = 0; i< white_keys.length; i++){
    white_keys[i].show();
    white_keys[i].collision_white(mouseX,mouseY);
  }
  for (let j = 0; j<black_keys.length;j++){
    black_keys[j].show();
  }
   for (let m = 0; m<black_keys.length;m++){
    black_keys[m].show();
    black_keys[m].collision_black(mouseX,mouseY);
  }
  
 
  if (white_keys[0].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_C.play();
  }
  if (white_keys[1].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_D.play();
  }
  if (white_keys[2].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_E.play();
  }
  if (white_keys[3].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_F.play();
  }
  if (white_keys[4].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_G.play();
  }
  if (white_keys[5].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_A.play();
  }
  if (white_keys[6].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_B.play();
  }
  if (white_keys[7].collision_white(mouseX,mouseY)==true && mouseIsPressed){
    note_C2.play();
  }
  if (black_keys[0].collision_black(mouseX,mouseY)==true && mouseIsPressed){
    note_C_sharp.play();
  }
  if (black_keys[1].collision_black(mouseX,mouseY)==true && mouseIsPressed){
    note_D_sharp.play();
  }
  if (black_keys[2].collision_black(mouseX,mouseY)==true && mouseIsPressed){
    note_F_sharp.play();
  }
  if (black_keys[3].collision_black(mouseX,mouseY)==true && mouseIsPressed){
    note_G_sharp.play();
  }
  if (black_keys[4].collision_black(mouseX,mouseY)==true && mouseIsPressed){
    note_A_sharp.play();
  }
 

  
}

class Key {
  constructor(x,y,w,h,c){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.colour = c;
  }
  
  show(){
    fill(this.colour);
    rect(this.x,this.y,this.width,this.height)
  }
  
  collision_white(px,py){
    if (px >= this.x && py >= this.y && px <= this.x+this.width && py <= this.y+this.height && py>=this.height/2){
      this.colour = 200;
      return true;
  }
    else{
      this.colour = 255;
      return false;
  }
  
  }
  collision_black(px,py){
    if (px >= this.x && py >= this.y && px <= this.x+this.width && py>=this.width && py <= this.y+this.height ){
      this.colour = 50;
      return true;
  }
    else{
      this.colour = 0;
      return false;
    }
  
  }
}


