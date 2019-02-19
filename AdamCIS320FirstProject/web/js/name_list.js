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

    // Show the hidden dialog
    $('#myModal').modal('show');

}
var saveChangesBtn = $('#saveChanges');
saveChangesBtn.on('click', saveChanges);

function saveChanges(){
    var nameRegEx = new RegExp(/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/);
        //This REGEX was taken from https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name



    var txt1 = $('#id').val();
    var txt2 = $('#firstName').val();
    var txt3 = $('#lastName').val();
    var txt4 = $('#email').val();
    var txt5 = $('#phone').val();
    var txt6 = $('#birthday').val();


    if (nameRegEx.test(txt1,txt2)){
        $('#firstName').addClass("is-valid");
        $('#lastName').addClass("is-valid");
    }else{
        $('#firstName').removeClass("is-invalid");
        $('#lastName').removeClass("is-invalid");
    }


    console.log("Hey, Save changes clicked");
}