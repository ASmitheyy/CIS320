function helloToConsole(event){
    console.log("hello")
}

var button1 = $("#button1");
button1.on("click", helloToConsole);



function addStuff(event){
    var valOne = parseInt($("#field1").val());
    var valTwo = parseInt($("#field2").val());
    var total = valOne + valTwo;

    $("#field3").val(total.toString());
}


var button2 = $('#button2');
button2.on("click", addStuff);

function toggleParagraph(event){
    $("#paragraphToHide").toggle();
}

var button3 = $("#button3");
button3.on("click", toggleParagraph);

function regularExpression(event){
    var patt =  /\d{3}\-\d{3}\-\d{4}/;
    if (patt.test($("#phoneField").val())){
        console.log("OK");
    }else{
        console.log("Bad");
    }
}

var button4 = $('#button4');
button4.on("click", regularExpression);

function jsonFunction(event){
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();

    var info = [
    {"firstName" : firstName, "lastName" : lastName, "email": email}
    ]

    var jsonString = JSON.stringify(info);
    console.log(jsonString);
}

var button5 = $("#button5");
button5.on("click", jsonFunction);

