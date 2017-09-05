//self-invoking function to control scope
(function(){

  let characterUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=288923d5d92e6a7e8cdc916936eaffec&hash=e44598f0318d6d85d57832ea3f2d40fe"

//code in here won't run until the DOM is loaded - anything defined in here can't get out.
  $(function(){

    //initialize some variables for the DOM items of interest
      let searchButton = $("#searchButton");
      let searchRequest = $("#searchRequest");
      let tableBody = $("#tableBody");

    function getChars(url){
      $.get(url, function(data){ //data here is defined as the data from the API
        //console.log(data)
          //define the characters variable as the JSON objects from Postman (.data.results)
          let characters = data.data.results;

          tableBody.html("");

          $.each(characters, function(index, character){ //use a loop if you need to work with anything one at a time. Can also use .each.
          //the single ticks allow you to do multi-line strings - helps visually.
          $("#tableBody").append(`
            <tr>
              <td>
                <a data-characterid="${character.id}" class="characterName" href="#">"${character.name}"</a>
              </td>
              <td>
                <img src="${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}" alt="${character.name}">
              </td>
            </tr>
            `)
        }) //closes for statement
      }) // closes $.get function(data)
    } //closes(getChars)

//Pass the original URL into the GetChars function.
    getChars(characterUrl);

      //once Submit button is clicked, if the search field is not blank, pass in the new URL concatenated with the search request by the user.
     $("#button").click(function(event){
       event.preventDefault();
       let searchURL = characterUrl;
      // console.log("Button is clicked!")
       if(searchRequest.val() !== ""){
        searchURL += "&nameStartsWith=" + searchRequest.val()
      }
         //Pass in the new URL to the getChars function.
         getChars(searchURL);
     })

     tableBody.on("click", ".characterName", function(e){
      e.preventDefault();
      alert($(this).data("characterid"))
    }) //closes .click
}) // closes main $ function
})() //closes self-invoking function
