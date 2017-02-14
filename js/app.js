// var cBox = document.querySelector("#c-box");
//
// var cAudio = document.querySelector("#c_audio")
//
// cBox.addEventListener("click", function() {
//     cAudio.currentTime = 0;
//     cAudio.play();
// });

var notes = ["c", "d", "e", "f", "g", "a", "b"];

for(var i = 0; i < 7; i++) {
    (function() {

        var box = document.querySelector("#" + notes[i] + "-box");

        var audio = document.querySelector("#" + notes[i] + "_audio");

        box.addEventListener("click", function() {
            audio.currentTime = 0;
            audio.play();
        });


    })()
}


window.addEventListener("keypress", function(event) {
    if(event.keyCode === 97) {
        document.querySelector("#c_audio").currentTime = 0;
        document.querySelector("#c_audio").play();
    }
    if(event.keyCode === 115) {
        document.querySelector("#d_audio").currentTime = 0;
        document.querySelector("#d_audio").play();
    }
    if(event.keyCode === 100) {
        document.querySelector("#e_audio").currentTime = 0;
        document.querySelector("#e_audio").play();
    }
    if(event.keyCode === 102) {
        document.querySelector("#f_audio").currentTime = 0;
        document.querySelector("#f_audio").play();
    }
    if(event.keyCode === 103) {
        document.querySelector("#g_audio").currentTime = 0;
        document.querySelector("#g_audio").play();
    }
    if(event.keyCode === 104) {
        document.querySelector("#a_audio").currentTime = 0;
        document.querySelector("#a_audio").play();
    }
    if(event.keyCode === 106) {
        document.querySelector("#b_audio").currentTime = 0;
        document.querySelector("#b_audio").play();
    }
});
