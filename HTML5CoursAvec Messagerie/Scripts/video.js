var video = $("video");

$("button span.glyphicon-play").parent().click(function () {
    if (video.get(0).paused) {
        video.get(0).play();
    }
    else {
        video.get(0).pause();
    }

    $("button span.glyphicon-play").toggleClass("glyphicon-pause");
});


$("button span.glyphicon-stop").parent().click(function () {
    video.get(0).pause();
    video.get(0).currentTime = 0;
});



$("button span.glyphicon-volume-up").parent().click(function () {
    video.get(0).muted = !video.get(0).muted;

    if (video.get(0).muted) {
        $("button span.glyphicon-volume-up").addClass("glyphicon-volume-off");
        $("button span.glyphicon-volume-up").removeClass("glyphicon-volume-up");
    }
    else {
        $("button span.glyphicon-volume-off").addClass("glyphicon-volume-up");
        $("button span.glyphicon-volume-off").removeClass("glyphicon-volume-off");
    }

    
});

video.on('loadedmetadata',function () {
    $("progress").attr("max", this.duration);
    this.currentTime = localStorage.temps;
});

video.on("timeupdate", function () {
    $("progress").val(this.currentTime);
});


$("button span.glyphicon-tasks").parent().click(function () {
    $(this.parentNode).toggleClass("Down");
});

var inter;

$("input[value='f'], input[value='e']").mousedown(function () {

    sens = (this.value == "f") ? -1 : 1;

    inter = setInterval(function () {
        video.get(0).currentTime += 10 * sens;
    }, 400);
});

$("input[value='f'], input[value='e']").mouseup(clearInter);
$("input[value='f'], input[value='e']").mouseleave(clearInter);

function clearInter() {
    clearInterval(inter);
}


$("button span.glyphicon-record").parent().click(function () {
    localStorage.temps = video.get(0).currentTime;
    localStorage.setItem("temps", video.get(0).currentTime);
    //localStorage.clear();
    //localStorage.removeItem("temps");
    //localStorage.length;
    //localStorage.getItem("temps");
    //localStorage.temps;
    //localStorage.key(0);
    console.log(video.get(0).currentTime);

    sessionStorage.temps = video.get(0).currentTime;
    sessionStorage.setItem("temps", video.get(0).currentTime);
    //sessionStorage.clear();
    //sessionStorage.removeItem("temps");
    //sessionStorage.length;
    //sessionStorage.getItem("temps");
    //sessionStorage.temps;
    //sessionStorage.key(0);
    
});

