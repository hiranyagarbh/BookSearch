$(document).ready(function(){
    
    // target myform - submit is event handler
    $("#bookSearchForm").submit(function(){
        var search = $("#bookName").val();     // collect value that was entred into the field by .val() method

        if(search == "") {
            alert('Please enter the book name.');
        }
        else {
            var url = '';       // url of the book
            var img = '';       // img of the book
            var title = '';     // title of the book
            var author = '';    // author of the book

            // send get request to the API
            // concatinate the URL with search field value
            $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + search +".json", function(response){

                console.log(response);
                // append response in HTML tags here.

            });
        }
        return false; // prevents auto submit of form
    });
 
});