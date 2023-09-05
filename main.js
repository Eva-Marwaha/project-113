function preload(){
}

function setup()
{
    canvas = CreateCanvas(740, 580)
    canvas.position(110, 250);
    video = CreateCapture;
    video.hide;
}

function draw() {
    image(video, 0, 0, 640, 480)
}

function take_snapshot() {
    save('student_name.png');
}