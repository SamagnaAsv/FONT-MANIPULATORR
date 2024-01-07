LeftWristX = 0;
RightWristX = 0;
difference = 0;

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.position(900, 200);
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.position(200, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    background("lightblue");
    textSize(difference);
    fill("blue");
    text("samagna", 50, 200);
    document.getElementById("font_size").innerHTML = "Text Size is " + difference + "px";
}

function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        RightWrist = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("LeftWristX = ", + LeftWristX + ", RightWristX = " + RightWristX + ", difference" + difference);       
    }
}