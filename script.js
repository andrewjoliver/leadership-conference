function showCode(){
    for (var i = 0; i < 6; i++){
        var num = Math.floor(Math.random() * (9999 - 1000)) + 1000;
        $("#box" + i + "Num").append("<p>" + num + "</p>");
    }
    
    setTimeout(function(){ 
        for (var i = 0; i < 6; i++){
            $("#box" + i + "Num p").css("visibility", "hidden");
        }
    }, 1500);
    
    
}

function checkAnswers(){
    for (var i = 1; i < 6; i++){
        
        console.log("ITERATION:" + i);
        console.log("input" + parseInt($("#input" + i).val()));
        console.log("existing value" + parseInt($("#box" + i + "Num p").text()));
        
        if (parseInt($("#input" + i).val()) !== parseInt($("#box" + i + "Num p").text()) ){
            wrongSubmission();
            
            for (var i = 1; i < 6; i++){
                $("#box" + i + "Num p").remove();
            }
            
            return;
        }
    }
    rightSubmission()
}

function wrongSubmission(){
    $("#header").css("visibility", "hidden");
    $("#boxes").css("visibility", "hidden");
    $("#buttonParent").css("visibility", "hidden");
    $("#inputs").css("visibility", "hidden");
    $("#submitButton").css("visibility", "hidden");
    $("h3").css("visibility", "hidden");
    
    $("body").append("<h2>WRONG</h2>");
    $("body").css("background-color", "red");
    
    
    setTimeout(function(){ 
            $("#header").css("visibility", "visible");
            $("#boxes").css("visibility", "visible");
            $("#buttonParent").css("visibility", "visible");
            $("#inputs").css("visibility", "visible");
            $("#submitButton").css("visibility", "visible");
            $("h3").css("visibility", "visible");

            $("h2").remove();
            $("body").css("background-color", "white");
    }, 650);
    
}

function rightSubmission(){
    $("#header").css("visibility", "hidden");
    $("#boxes").css("visibility", "hidden");
    $("#buttonParent").css("visibility", "hidden");
    $("#inputs").css("visibility", "hidden");
    $("#submitButton").css("visibility", "hidden");
    $("h3").css("visibility", "hidden");
    
    $("body").append("<h1>CORRECT</h1>");
    $("body").css("background-color", "green");
    
}