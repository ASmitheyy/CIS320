// Main Javascript File

function updateTable() {

    var url = "api/name_list_get";


    $('#datatable tr:last').after('<tr><td>First</td><td>Last</td><td>Phone</td>'+
        '<td>Email</td><td>Birthday</td><td></td></tr>');

    $.getJSON(url, null, function(json_result) {
            for (var i = 0; i < json_result.length; i++) {
                var id = json_result[i].id;
                var num = json_result[i].phone;
                var phoneNum = num.substring(0,3) +'-' + num.substring(3,6) + '-'+
                    num.substring(6,10);

                $('#datatable tr:last').after(
                    "<tr>" +
                    "<td>" + json_result[i].firstName + "</td>" +
                    "<td>" + json_result[i].lastName +"</td>"+
                    "<td>" + phoneNum +'</td><td>'+json_result[i].email +"</td>"+
                    "<td>" + json_result[i].birthday +"</td>" +
                    "<td><button type=\'button\' name=\'delete\' class=\'deleteButton btn\' value=\'" + id +"\'>Delete</button></td>" +
                    "</tr>");
            }
            var deleteBtn = $(".deleteButton");
            deleteBtn.on("click", deleteItem);
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

    var phoneRegEx = new RegExp(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/);
    var birthdayRegEx = new RegExp(/[1-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/);


    var firstNameField = $('#firstName').val();
    var txt2 = $('#lastName').val();
    var txt3 = $('#email').val();
    var txt4 = $('#phone').val();
    var txt5 = $('#birthday').val();

    var person = {};

    if (nameRegEx.test(firstNameField)){
        $('#firstName').removeClass("is-invalid");
        $('#firstName').addClass("is-valid");
        test1 = true;

        person.firstName = firstNameField;

    }else{
        $('#firstName').addClass("is-invalid");
        $('#firstName').removeClass("is-valid");
        test1 = false;

    }
    if (nameRegEx.test(txt2)) {
        $('#lastName').removeClass("is-invalid");
        $('#lastName').addClass("is-valid");
        test2 = true;
        person.lastName = txt2;
    }else {
        $('#lastName').removeClass("is-valid");
        $('#lastName').addClass("is-invalid");
        test2 = false;
    }

    if(emailRegEx.test(txt3)){
        $('#email').removeClass("is-invalid");
        $('#email').addClass("is-valid");
        test3 = true;
        person.email = txt3;
    }else{
        $('#email').removeClass("is-valid");
        $('#email').addClass("is-invalid");
        test3 = false;
    }
    if(phoneRegEx.test(txt4)){
        $('#phone').removeClass("is-invalid");
        $('#phone').addClass("is-valid");
        test4 = true;
        person.phone = txt4;
    }else{
        $('#phone').removeClass("is-valid");
        $('#phone').addClass("is-invalid");
        test4 = false;
    }
    if(birthdayRegEx.test(txt5)){
        $('#birthday').removeClass("is-invalid");
        $('#birthday').addClass("is-valid");
        test5 = true;
        person.birthday = txt5;
    }else{
        $('#birthday').removeClass("is-valid");
        $('#birthday').addClass("is-invalid");
        test5 = false;
    }

    if(test1 && test2 && test3 && test4 && test5){
        var jsonString = JSON.stringify(person);

        var url = "api/name_list_edit";

        $.post(url, jsonString, function (jsonString) {
            console.log("Finished calling servlet.");
            console.log(jsonString);
            $('#datatable td').remove();
            updateTable();



            $('#myModal').modal('hide');
        });
    }
}

function deleteItem(e) {
    var person = {};
    person.id = e.target.value;
    var jsonString = JSON.stringify(person);

    var url = "api/name_list_delete";

    $.post(url, jsonString, function (jsonString) {
        console.log("Finished calling servlet.");
        console.log(jsonString);
        $('#datatable td').remove();
        updateTable();
    });
}




