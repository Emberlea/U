Webcam.set({
    width:355,
    height:295,
    image_format:'png',
    png_quality:100
});

var one= document.getElementById("webcamview");
Webcam.attach(one);

function snappic(){
    Webcam.snap(function(data_uri){
        document.getElementById("img").innerHTML= '<img id="imaging" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
var classify=ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/8NbYOM9bg/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model has been Loaded!");
}

function find(){
    image=document.getElementById("imaging");
    classify.classifier(image, gotResult);
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("p1t").innerHTML=result[0].label;
        document.getElementById("p2t").innerHTML=result[1].label;
        predict1=result[0].label;
        predict2=result[1].label;
        speak();

        if(result[0].label=="A"){
            document.getElementById("p1e").innerHTML="A";
        }
        if(result[0].label=="Y"){
            document.getElementById("p1e").innerHTML="Y";
        }
        if(result[0].label=="U"){
            document.getElementById("p1e").innerHTML="U";
        }
        if(result[0].label=="D"){
            document.getElementById("p1e").innerHTML="D";
        }
        if(result[0].label=="V"){
            document.getElementById("p1e").innerHTML="V";
        }
        if(result[1].label=="A"){
            document.getElementById("p2e").innerHTML="A";
        }
        if(result[1].label=="Y"){
            document.getElementById("p2e").innerHTML="Y";
        }
        if(result[1].label=="U"){
            document.getElementById("p2e").innerHTML="U";
        }
        if(result[1].label=="D"){
            document.getElementById("p2e").innerHTML="D";
        }
        if(result[1].label=="V"){
            document.getElementById("p2e").innerHTML="V";
        }
    }
}

var predict1="";
var predict2="";

function speak(){
    var synth= window.speechSynthesis;
    var speke1= "Prediction 1: You are" + predict1;
    var speke2= "Prediction 2: You are" +predict2;
    var utterThis= new SpeechSynthesisUtterance(speke1 + speke2);
    synth.speak(utterThis);
}