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
let image1, image2, image3, image4, image5;
var a1 = 0, a2=0, a3=0, a4 =0, a5 =0;
var x1=0 ,x2=0,x3=0,x4=0,x5=0,x0=0;
var y1=0,y2=0,y3=0,y4=0,y5=0, y0=0;
var index = 0;
var src = 'Click The Button To Start';
var buttonText = 'Start Game';


function setup() {
  createCanvas(1500, 1000);
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
  select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function increase()
{   
    index ++;
}


function draw() {
  image(video, x0, y0, width, height);
    noStroke();
    
    fill(255,255,255,a5);
    rect(0, 0, 1500,1000);
    fill(0,0,0);
    text(src,750,500);
    
        button = createButton(buttonText);
    button.position(1200,800);
    button.mousePressed(increase);
    
    if(index == 0 )
    {
        a1 = 0;
        a2 = 0;
        a3 = 0;
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
  }
    
    
}