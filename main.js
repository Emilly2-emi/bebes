var som=""

function preload(){
 som =loadSound("bom_dia.mp3");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}

function draw(){
    image(video,0,0,400,400);
    objectDetector.detect(video,gotResult);
    for(i=0;i<objects.length;i++){
        if(objects[i].label=="person"){
            console.log("pessoa detectada")
            som.play();
        }
        else{
            som.stop();
        }
    }
    
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
     console.log(results);
     objects=results;
}