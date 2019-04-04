// This calls our back-end Java program that sets our session info


function setLoginJava() {

    var url = "api/login_servlet";

    // Grab data from the HTML form
    var loginId = $("#loginId").val();

    // Create a JSON request based on that data
    var dataToServer = {loginId : loginId};

    // Post
    $.post(url, dataToServer, function (dataFromServer) {
        // We are done. Write a message to our console
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        // Clear the form
        $("#loginId").val("");
        getLoginJava();
        if(dataFromServer !== ""){
            $(".loginMenu").hide();
            $(".logOutContainer").show();
            $(".loggedInMenu").show();
        }

    });

}

// This gets session info from our back-end servlet.
function getLoginJava() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        // Update the HTML with our result
        $('#getLoginResult').html("You are logged in as \'"+dataFromServer+"\'");
    });

}

// This method calls the servlet that invalidates our session
function logOutButton() {

    var url = "api/invalidate_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        getLoginJava();
        if(dataFromServer === "null"){
            $(".loginMenu").show();
            $(".logOutContainer").hide();
            $(".loggedInMenu").hide();

        }

    });

}

getLoginJava();


// Hook the functions above to our buttons
button = $('#getLoginJava');
button.on("click", getLoginJava);

button = $('#loginJava');
button.on("click", setLoginJava);

button = $('#logOutSession');
button.on("click", logOutButton);