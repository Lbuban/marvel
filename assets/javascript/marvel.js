(function(){



  $(function(){
    function getChars(url){
      $.get(url, function(data){
          //define the characters variable as
          let characters = data.data.results;
          for(let i = 0; i < characters.length; i++){
          //$("#characters").append(characters[i].name)
          $("#tableBody").append("<img src='"+characters[i].thumbnail.path+"/standard_fantastic."+characters[i].thumbnail.extension+"'/>")
          $("#tableBody").append(characters[i].name)
        } //closes for statement
      }) // closes function(data)
    }

//Pass the original URL into the GetChars function.
    getChars("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=288923d5d92e6a7e8cdc916936eaffec&hash=e44598f0318d6d85d57832ea3f2d40fe");

      //once Submit button is clicked, if the search field is not blank, pass in the new URL concatenated with the search request by the user.
     $("#button").click(function(){
       console.log("Button is clicked!")
       if ($("#searchRequest").val() !== "") {
         let searchRequest = $("#searchRequest").val();
         let newUrl = ("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=288923d5d92e6a7e8cdc916936eaffec&hash=e44598f0318d6d85d57832ea3f2d40fe&nameStartsWith=" + searchRequest)
        //clears the html in the tableBody ID.
         $("#tableBody").html("")
         //Pass in the new URL to the getChars function.
         getChars(newUrl);
       } else {
         // If the search field is blank, clear the table body and call the original URL to reset the page.
         $("#tableBody").html("")
         getChars("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=288923d5d92e6a7e8cdc916936eaffec&hash=e44598f0318d6d85d57832ea3f2d40fe");
       }

     })

})
})() //closes self-invoking function
