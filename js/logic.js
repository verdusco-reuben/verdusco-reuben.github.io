$( document ).ready(function() {
    var oldset = {color: "blue-grey", back_colors: "blue-grey lighten-1", cards: ""};
    var count = 0;
    var bool = false;
    $('.dropdown-trigger').dropdown();

    $( ".change_color" ).click(function() {
        var colorset= getVals(this);
        $( "i" ).removeClass( oldset["color"]+"-text" ).addClass( colorset["color"]+"-text" );
        $( "nav" ).removeClass( oldset["color"] ).addClass( colorset["color"] );
        $("body").removeClass(oldset["back_colors"]).addClass(colorset["back_colors"]);
        $(".card, .collection-item, .collection-header").removeClass(oldset["cards"]).addClass(colorset["cards"])
       
        oldset = colorset;
    });
    $( "#click_me" ).click(function() {
        
        if($("#click_me").text() == "hide"){
            $("#click_me").text("ta da!");
            $( ".card" ).slideUp( "slow", function() { });
        }else{
            $("#click_me").text("hide")
            $( ".card" ).slideDown( "slow", function() { });
        }
    });
    if(bool){
        $( "p, h1" ).click(function() {
            $( this ).toggleClass( "highlight" );
        });
    }
    function getVals(thing){
        var colors = ["blue-grey", "red", "green"]
        var back_colors = ["blue-grey lighten-1","grey lighten-2", "brown lighten-2"]
        var cards = ["", "grey darken-1 white-text", "green"]
        var dict = {};
        console.log($(thing).text())
        if($(thing).text() == "original"){
            dict["color"] = "blue-grey";
            dict["back_colors"] = "blue-grey lighten-1";
            dict["cards"] = ""
        }
        if($(thing).text() == "red"){
            dict["color"] = "red";
            dict["back_colors"] = "grey lighten-2";
            dict["cards"] = "grey darken-1 white-text"
        }
        if($(thing).text() == "green"){
            dict["color"] = "green";
            dict["back_colors"] = "brown lighten-2";
            dict["cards"] = ""
        }
        if($(thing).text() == "dont"){
            dict["color"] = "crazy2";
            dict["back_colors"] = "crazy2";
            dict["cards"] = "crazy";
            alert("PARTY!!!!");
        }
        return dict;
    }

    function emailForm() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }




});