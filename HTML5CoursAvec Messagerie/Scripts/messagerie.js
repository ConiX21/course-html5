socket = new WebSocket("ws://127.0.0.1:9000/html5cours/server.php");

socket.onopen = function (evt) {
    $("#messages").html("Connexion OK !");
}

socket.onmessage = function () {
    objMessage = JSON.parse(event.data);

    placeMessage(objMessage);
}

socket.onclose = function () {
    $("#messages").html("Déconnexion !");
}

socket.onerror = function (evt) {
    $("#messages").html(evt.error);
}

$("svg").click(function () {
    objMessage = {
        name : $("#txtPseudo").val(),
        message: $("#txtMessage").val()
    }

    //placeMessage(objMessage);

    socket.send(JSON.stringify(objMessage));


});

function placeMessage(obj)
{
    afficheMessage = "<br /><span style='color:#3498DB'>" + obj.name + "</span> : <span style='color:#207cca'>" + obj.message + "</span>";

    $("#messages").append(afficheMessage);
}