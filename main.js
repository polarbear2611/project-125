difference = 0;
leftwrist = 0;
rightwrist = 0;
function setup()
{
    video =createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550 , 550);
    canvas.position(560, 150);
    posenet  = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw()
{
    background("white");
    textSize(difference);
    text("Dhruv",40,250);
}


function modelLoaded()
{
    console.log("poseNet is initialized!")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        difference = floor(leftwrist - rightwrist);
    }
}