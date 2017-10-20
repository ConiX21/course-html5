/**
 * Created by ConiRepublic on 22/12/2015.
 */
(function () {
    document.addEventListener("DOMContentLoaded", function () {

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        var W = window.innerWidth;
        var H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
        var mp = 5;
        var particles = [];

        for (var i = 0; i < mp; i++) {
            particles.push({
                x: Math.random() * W, //x-coordinate
                y: Math.random() * H, //y-coordinate
                r: Math.random() * 24 + 1, //radius
                d: Math.random() * mp //density
            })
        }

        function draw() {
            ctx.clearRect(0, 0, W, H);
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.beginPath();

            for (var i = 0; i < mp; i++) {
                var p = particles[i];
                ctx.moveTo(p.x, p.y);
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
            }
            ctx.fill();
            update();

            requestAnimationFrame(draw);
        }

        var angle = 0;

        function update() {
            angle += 0.01;

            for (var i = 0; i < mp; i++) {
                var p = particles[i];
                //p.y += Math.cos(angle+p.d) + 1 + p.r/2;
                p.y += Math.cos(angle + p.d) ;

                if (i == 1) {
                    p.x += Math.sin(angle) * 2;
                }

                if (p.x > W + 5 || p.x < -5 || p.y > H) {
                    particles[i] = {x: Math.random() * W, y: -10, r: p.r, d: p.d};
                }
            }
        }

        requestAnimationFrame(draw);


        canvas.addEventListener('click', function (e) {
            console.log('click: ' + e.offsetX + '/' + e.offsetY);
            var p = collides(particles, e.offsetX, e.offsetY);
            if (p != 0) {
                console.log('collision: ' + p);

                particles.splice(p, 1);
                mp--;

                console.log(particles.length);

            } else {
                console.log('no collision');
            }
        }, false);



        function collides(p, x, y) {
            var isCollision = false;
            var ind = 0;
            for (var i = 0, len = p.length; i < len; i++) {

                var left = p[i].x;
                var right = p[i].x + p[i].r;
                var top = p[i].y;
                var bottom = p[i].y + p[i].r;


                //console.log(left, right, top, bottom);
                if (right >= x && left <= x && bottom >= y && top <= y) {
                    isCollision = p[i];
                    ind = i;
                    break;
                }
            }
            return i;
        }

    });
})();