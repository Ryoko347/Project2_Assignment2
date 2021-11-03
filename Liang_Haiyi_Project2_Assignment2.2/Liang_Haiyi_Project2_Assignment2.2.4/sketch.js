// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let button;
let image1, image2, image3, image4, image5, image6;
var a1 = 0, a2=0, a3=0, a4 =0, a5 =0;
var x1=0 ,x2=0,x3=0,x4=0,x5=0,x0=0;
var y1=0,y2=0,y3=0,y4=0,y5=0, y0=0;
var index = 0;
var src = 'Click The Button To Start';
var buttonText = 'Start Game';

function preload()
{
    image1 = loadImage('asset/Nose.png');
        image2 = loadImage('asset/RightEye.png');
        image3 = loadImage('asset/LeftEye.png');
        image4 = loadImage('asset/RightEar.png');
        image5 = loadImage('asset/LeftEar.png');
    image6 = loadImage('asset/NoFace.png');
}


function setup() {
  createCanvas(1500, 800);
  video = createCapture(VIDEO);
  video.size(width, height);

    
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, {outputStride:8, quantBytes:4}, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
 // select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function increase()
{   
    index ++;
}


function draw() {
  image(video, x0+150, y0, 1176, 840);
    noStroke();
    fill(255,255,255,a5);
    rect(0, 0, 1500,1000);
    fill(0,0,0);
    text(src,750,500);
        image(image6, 150,0,1176,840);
        button = createButton(buttonText);
        button.size(200,50);
    button.position(1400,800);
    button.mousePressed(increase);

    if(index == 0 )
    {
        a1 = 0;
        a2 = 0;
        a3 = 0;
        buttonText = 'Start Game';
    }
    else if(index == 1)
    {
        buttonText = 'Position Confirm';
        src = 'Move Your Nose';
        a1 = 255;
    }
        else if(index == 2)
    {
                src = 'Move Your Eyes';
        a1 = 0;
        a2 = 255;
    }
            else if(index == 3)
    {
                src = 'Move Your Ears';
        a1 = 0;
        a2 = 0;
        a3 = 255;
    }
            else if(index == 4)
    {
        src = 'Review Your Works';
                buttonText = 'Review Your New Face';
        a1 = 0;
        a2 = 0;
        a3 = 0;
    }
            else if(index == 5)
    {
                        src = '';
       buttonText = 'Try it again!'
        a4 = 255;
        a5 = 255;


      //fill(255,0,0,a4);
      //ellipse(x1, y1, 20, 20 );
      //ellipse(x2, y2, 20, 20 );
      //ellipse(x3, y3, 20, 20 );
      //ellipse(x4, y4, 20, 20 );
      //ellipse(x5, y5, 20, 20 );
        image(image1,x1-110,y1-60,220,220);
                image(image2,x2-60,y2-60,120,120);
                image(image3,x3-60,y3-60,120,120);
                image(image4,x4-75,y4-75,150,150);
                image(image5,x5-75,y5-75,150,150);

    }
    else if(index >= 6)
    {
        index = 0;
        a1 = 0;
        a2 = 0;
        a3 = 0;
         a4 = 0;
        a5 =0;
        x1 = 0;
        y1 = 0;
                x2 = 0;
        y2 = 0;
                x3 = 0;
        y3 = 0;
                x4 = 0;
        y4 = 0;
                x5 = 0;
        y5 = 0;
        
    }
    
  // For one pose only (use a for loop for multiple poses!)

  if (poses.length > 0) {
    const pose = poses[0].pose;
      console.log(pose);

    // Create a pink ellipse for the nose
    fill(213, 0, 143, a1);
    const nose = pose.nose;
    ellipse(nose.x, nose.y, 20, 20);

    // Create a yellow ellipse for the right eye
    fill(255, 215, 0,a2);
    const rightEye = pose.rightEye;
    ellipse(rightEye.x, rightEye.y, 20, 20);

    // Create a yellow ellipse for the right eye
    fill(255, 215, 0,a2);
    const leftEye = pose.leftEye;
    ellipse(leftEye.x, leftEye.y, 20, 20);
      
    fill(0,255,0,a3);
      const rightEar = pose.rightEar;
    ellipse(rightEar.x, rightEar.y, 20, 20 );  
      
          fill(0,255,0,a3);
      const leftEar = pose.leftEar;
    ellipse(leftEar.x, leftEar.y, 20, 20 );  
      
          if(index == 2)
    {
        x1 = nose.x;
        y1 = nose.y;
    }
    else if(index == 3)
    {
        x2 = rightEye.x;
        y2 = rightEye.y;
        x3 = leftEye.x;
        y3 = leftEye.y;
    }
        else if(index == 4)
    {
        x4 = rightEar.x;
        y4 = rightEar.y;
        x5 = leftEar.x;
        y5 = leftEar.y;
    }
  }
    
    
}