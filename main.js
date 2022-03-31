canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
nasaimgarray=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
roverX=10;
roverY=10;
background_image=nasaimgarray[random_number];
console.log("Background="+background_image);
rover_image="rover.png";

function add(){
    background_img_new=new Image();
    background_img_new.onload=uploadBackground;
    background_img_new.src=background_image;

    rover_img_new=new Image();
    rover_img_new.onload=uploadRover;
    rover_img_new.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_img_new,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img_new,roverX,roverY,rover_width,rover_height);
}

window.addEventListener("keydown",Mykeydown);

function Mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);

if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}

}

function up(){
    if(roverY>=0){
        roverY=roverY-10;
    console.log("When Up Arrow is pressed, x="+roverX+"y="+roverY);
    uploadBackground();
    uploadRover();
    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
    console.log("When Down Arrow is pressed, x="+roverX+"y="+roverY);
    uploadBackground();
    uploadRover();
    }
}
function left(){
    if(roverX>=0){
        roverX=roverX-10;
    console.log("When Left Arrow is pressed, x="+roverX+"y="+roverY);
    uploadBackground();
    uploadRover();
    }
}
function right(){
    if(roverX<=700){
        roverX=roverX+10;
    console.log("When RIght Arrow is pressed, x="+roverX+"y="+roverY);
    uploadBackground();
    uploadRover();
    }
}



