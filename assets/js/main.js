$(document).ready(function(){
    
    // target myform - submit is event handler
    $("#myform").submit(function(){
        var search = $("#books").val();     // collect value that was entred into the field by .val() method

        if(search == "") {
            alert('Please enter some book name.');
        }
        else {
            var url = '';       // url of the book
            var img = '';       // img of the book
            var title = '';     // title of the book
            var author = '';    // author of the book

            // send get request to the API
            $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + search +".json", function(response){
                console.log(response);
            }); // concatinate the URL with search field value

        }


    });
    
    return false; // prevents auto submit of form
});