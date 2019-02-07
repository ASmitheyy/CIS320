// Main Javascript File

function updateTable() {

    var url = "api/name_list_get";

    $('#datatable tr:last').after('<tr><td>ID</td><td>First</td><td>Last</td><td>Phone</td>'+
    '<td>Email</td><td>Birthday</td></tr>');

    $.getJSON(url, null, function(json_result) {

            for (var i = 0; i < json_result.length; i++) {
                $('#datatable tr:last').after('<tr><td>'+json_result[i].id + '</td>'+
                '<td>'+json_result[i].first +'</td><td>'+json_result[i].last +'</td>'+
                '<td>'+json_result[i].phone +'</td><td>'+json_result[i].email +'</td>'+
                '<td>'+json_result[i].birthday +'</td></tr>');
            }
            console.log("Done");
        }
    );
}

// Call your code.
updateTable();