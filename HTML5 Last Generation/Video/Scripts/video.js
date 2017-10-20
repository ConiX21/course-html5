(function () {
    
    document.addEventListener("DOMContentLoaded", function () {
        var video = document.querySelector("video");
        var buttonMenu = document.querySelector("input.menuControls");
        var buttonPlayPause = document.querySelector("input[value^='d']");
        var buttonStop = document.querySelector("input[value*='i']");
        var buttonBack = document.querySelector("input[value$='f']");
        var buttonForward = document.querySelector("input[value='e']");
        var buttonMute = document.querySelector("input.Mute");
        var rangeVolume = document.querySelector("input[type='range']");
        var progress = document.querySelector("progress");
        var buttonSave = document.querySelector("input[value='j']");
        var rangePlay = document.querySelector(".Interrupteur");
        var labelInterrupteur = document.querySelector("#labelInterrupteur");
        var position; 
        var vitesse = 20;
        var inter;
        var taille;
        


        console.log(rangePlay);
        buttonMenu.addEventListener("click", function (evt) {
            var div = evt.currentTarget.parentNode;

            if (div.className == "") {
                div.className = "Down"
            }
            else {
                div.className = "";
            }

        });
        buttonPlayPause.addEventListener("click", function () {

            if (video.paused) {
                video.play();
            }
            else {
                video.pause();
            }


        });
        buttonStop.addEventListener("click", function () {
            video.pause();
            video.currentTime = 0;
        });
        buttonBack.addEventListener("mousedown", onMouseDown);
        buttonBack.addEventListener("mouseup", onMouseUp);
        buttonForward.addEventListener("mousedown", onMouseDown);
        buttonForward.addEventListener("mouseup", onMouseUp);
        buttonMute.addEventListener("click", function () {
            if (video.muted) {
                video.muted = false;
                this.value = "o";
            }
            else {
                video.muted = true;
                this.value = " ";
            }
        });
        rangeVolume.addEventListener("change", onChangeVolume);
        video.addEventListener("volumechange", onChangeVolume);
        video.addEventListener("loadedmetadata", function () {
            taille = this.duration;
            progress.max = taille;
            rangeVolume.value = this.volume;

            if(localStorage.getItem("temps"))
            {
                video.currentTime = localStorage.getItem("temps");
            }

        });
        video.addEventListener("timeupdate", function () {
            progress.value = this.currentTime;
        });
        buttonSave.addEventListener("click", function () {
            localStorage.temps = video.currentTime;
        });
        rangePlay.addEventListener("change", function () {
            if (this.value == 1) {
                this.classList.add("On");
                labelInterrupteur.innerHTML = "d";
                localStorage.play = "On";
            }
            else {
                this.classList.remove("On");
                labelInterrupteur.innerHTML = "i";
                localStorage.play = "Off";
            }

            labelInterrupteur.style.opacity = "1";
        });
       
        labelInterrupteur.addEventListener('webkitTransitionEnd', function (e) {
            labelInterrupteur.style.opacity = "0";
        });
        function onChangeVolume(evt)
        {
            if (evt.currentTarget == video) {
                rangeVolume.value = video.volume;
            }
            else {
                 video.volume = rangeVolume.value;
            }

        }
        function onMouseUp(evt)
        {
            clearInterval(inter);
        }
        function onMouseDown(evt)
        {
            if (evt.currentTarget == buttonBack)
            {
                position = (vitesse * -1);
            }
            else {
                position = (vitesse * 1);
            }
            
            inter = setInterval(seek, 400);
        }
        function seek() {
            video.currentTime += position;
        }

    });


})()