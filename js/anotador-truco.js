$(document).ready(function () {
    var team1, team2, gameType;

    $("#screenTwo").hide();

    for (var i = 0; i < 3; i++) {
        $(".top").append('<img src="img/0.png">');
    }

    //./img/0.png
    // Screen One
    // ----------------------------------------------------------------------------------

    $(".sel").on("click", function () {
        if ($(this).hasClass("blur")) $(".sel").toggleClass("blur");
    });

    $(".init").on("click", function () {
        team1 = $("#team1").val() || $("#team1").attr("placeholder");
        team2 = $("#team2").val() || $("#team2").attr("placeholder");
        gameType = $("input.blur").val() == "a 30" ? 24 : 30;

        $(".inline").text("a " + gameType);

        $(".one > div > p").text(team1);
        $(".two > div > p").text(team2);

        $("#screenOne").hide();
        $("#screenTwo").show();
    });

    // Screen Two

    var punto1 = $(".punto1");
    var punto2 = $(".punto2");

    $(".puntos1").on("click", function () {
        if ($(this).val() == "+" && parseInt(punto1.text()) < gameType) {
            punto1.text(parseInt(punto1.text()) + 1);
        } else if ($(this).val() == "-" && parseInt(punto1.text()) > 0) {
            punto1.text(parseInt(punto1.text()) - 1);
        }
        for (var i = 0; i <= parseInt(punto1.text()); i++) {
            if (i <= 5) {
                $(".1 img")[0].setAttribute("src", `./img/${i}.png`);
                $(".1 img")[1].setAttribute("src", `./img/0.png`);
            } else if (i <= 10) {
                $(".1 img")[1].setAttribute("src", `./img/${i - 5}.png`);
                $(".1 img")[2].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType / 2) {
                $(".1 img")[2].setAttribute("src", `./img/${i - 10}.png`);
                $(".2 img")[0].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType / 2 + 5) {
                $(".2 img")[0].setAttribute("src", `./img/${i - gameType / 2}.png`);
                $(".2 img")[1].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType / 2 + 10) {
                $(".2 img")[1].setAttribute("src", `./img/${i - gameType / 2 - 5}.png`);
                $(".2 img")[2].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType) {
                $(".2 img")[2].setAttribute("src", `./img/${i - gameType / 2 - 10}.png`);
            }
        }
    });

    $(".puntos2").on("click", function () {
        if ($(this).val() == "+" && parseInt(punto2.text()) < gameType) {
            punto2.text(parseInt(punto2.text()) + 1);
        } else if ($(this).val() == "-" && parseInt(punto2.text()) > 0) {
            punto2.text(parseInt(punto2.text()) - 1);
        }
        for (var i = 0; i <= parseInt(punto2.text()); i++) {
            if (i <= 5) {
                $(".3 img")[0].setAttribute("src", `./img/${i}.png`);
                $(".3 img")[1].setAttribute("src", `./img/0.png`);
            } else if (i <= 10) {
                $(".3 img")[1].setAttribute("src", `./img/${i - 5}.png`);
                $(".3 img")[2].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType / 2) {
                $(".3 img")[2].setAttribute("src", `./img/${i - 10}.png`);
                $(".4 img")[0].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType / 2 + 5) {
                $(".4 img")[0].setAttribute("src", `./img/${i - gameType / 2}.png`);
                $(".4 img")[1].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType / 2 + 10) {
                $(".4 img")[1].setAttribute("src", `./img/${i - gameType / 2 - 5}.png`);
                $(".4 img")[2].setAttribute("src", `./img/0.png`);
            } else if (i <= gameType) {
                $(".4 img")[2].setAttribute("src", `./img/${i - gameType / 2 - 10}.png`);
            }
        }
    });

    $(".out").on("click", function () {
        $("#team1").val("");
        $("#team2").val("");
        $("img").attr("src", "./img/0.png");
        punto1.text("0");
        punto2.text("0");
        $("#screenTwo").hide();
        $("#screenOne").show();
    });
});
