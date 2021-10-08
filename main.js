//main.js
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 400);
    canvas.position(600, 100);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    canvas.background("#FF0000");
}

function modelLoaded(){
    console.log("Posenet is Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}