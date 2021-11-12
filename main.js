nosex="";
nosey="";
function preload(){
    Mushtashe=loadImage("https://i.postimg.cc/3x3QzSGq/m.jpg")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
    fill("red");
    //stroke("red");
    //circle(nosex,nosey,20);
    image(Mushtashe,nosex,nosey,30,30);

}
function take_snapshot()
{
    save('Image.png')
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;

}
} 