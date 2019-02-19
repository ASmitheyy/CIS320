// Main Javascript File

function updateTable() {

    var url = "api/name_list_get";

    $('#datatable tr:last').after('<tr><td>ID</td><td>First</td><td>Last</td><td>Phone</td>'+
    '<td>Email</td><td>Birthday</td></tr>');

    $.getJSON(url, null, function(json_result) {

            for (var i = 0; i < json_result.length; i++) {
                var num = json_result[i].phone;
                var phoneNum = num.substring(0,3) +'-' + num.substring(3,6) + '-'+
                    num.substring(6,10);

                $('#datatable tr:last').after('<tr><td>'+json_result[i].id + '</td>'+
                '<td>'+json_result[i].first +'</td><td>'+json_result[i].last +'</td>'+
                '<td>'+ phoneNum +'</td><td>'+json_result[i].email +'</td>'+
                '<td>'+json_result[i].birthday +'</td></tr>');
            }
            console.log("Done");
        }
    );
}

// Call your code.
updateTable();

//Lab5
var addItemButton =$('#addItem');
addItemButton.on("click", showDialogAdd);
function showDialogAdd(){

    // Print that we got here
    console.log("Opening add item dialog");

    // Clear out the values in the form.
    // Otherwise we'll keep values from when we last
    // opened or hit edit.
    // I'm getting it started, you can finish.
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    // this loops through each tag and clears the green/red outline
    var txt1 = $('#firstName');
    var txt2 = $('#lastName');
    var txt3 = $('#email');
    var txt4 = $('#phone');
    var txt5 = $('#birthday');

    var myArray = [txt1, txt2,txt3,txt4,txt5];
    myArray.forEach(function(element){
        element.removeClass("is-invalid");
        element.removeClass("is-valid");
    });

    // Show the hidden dialog
    $('#myModal').modal('show');

}
var saveChangesBtn = $('#saveChanges');
saveChangesBtn.on('click', saveChanges);

function saveChanges(){
    var nameRegEx = new RegExp(/^((?![0-9\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\[\]\{\}\;\:\"\\\/\<\>\?]).)+$/);
                //This REGEX was taken from https://stackoverflow.com/questions/6381752/validating-users-utf-8-name-in-javascript
                //If you negate all the illegal characters then it should catch all the legal ones
    var emailRegEx = new RegExp(/\S+@\S+\.\S+/);
   //taken from stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

    var phoneRegEx = new RegExp(/[0-9][0-9][0-9][/-][0-9][0-9][0-9][-/][0-9][0-9][0-9][0-9]/);
    var birthdayRegEx = new RegExp(/[1-9][1-9][1-9][1-9]-[0-9][0-2]-[1-3][0-9]/);


    var txt1 = $('#firstName').val();
    var txt2 = $('#lastName').val();
    var txt3 = $('#email').val();
    var txt4 = $('#phone').val();
    var txt5 = $('#birthday').val();


    if (nameRegEx.test(txt1)){
        $('#firstName').removeClass("is-invalid");
        $('#firstName').addClass("is-valid");


    }else{
        $('#firstName').addClass("is-invalid");
        $('#firstName').removeClass("is-valid");

    }
    if (nameRegEx.test(txt2)) {
        $('#lastName').removeClass("is-invalid");
        $('#lastName').addClass("is-valid");

    }else {
        $('#lastName').removeClass("is-valid");
        $('#lastName').addClass("is-invalid");
    }

    if(emailRegEx.test(txt3)){
        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
    }else{
        $('#email').removeClass("is-valid");
        $('#email').addClass("is-invalid");
    }
    if(phoneRegEx.test(txt4)){
        $('#phone').removeClass("is-invalid");
        $('#phone').addClass("is-valid");
    }else{
        $('#phone').removeClass("is-valid");
        $('#phone').addClass("is-invalid");
    }
    if(birthdayRegEx.test(txt5)){
        $('#birthday').removeClass("is-invalid");
        $('#birthday').addClass("is-valid");
    }else{
        $('#birthday').removeClass("is-valid");
        $('#birthday').addClass("is-invalid");
    }

    console.log("Hey, Save changes clicked");
}

