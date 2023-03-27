// Wbecam settings
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

// Attaching the webcam to the web page
Webcam.attach("#camera");

// Function take_snapshot() (to take a snap of the user's hand gesture)
function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'/>";
    })
}

// Checking if ml5.js is imported
console.log("Ml5.js version: " + ml5.version);

// Adding the classifier to the javascript code to make predictions
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iG1jliOjy/model.json", modelLoaded);

// modelLoaded function
function modelLoaded() {
    console.log("The teachable machine model has been loaded into the ml5");
} 

// Function speak
function speak() {
    synth = window.speechSynthesis;
    var speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction made by the AI was" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1, + speak_data_2);
    synth.speak(utterThis);
}
