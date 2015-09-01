//wait for the DOM elements to load before executing
$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $('#submit-btn').click(function(){
    event.preventDefault();
    //get the value of the #city-type input and correct for capitalization
    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();
    // if the user inputs New York City / NYC / New York change the CSS class to 'nyc'
    if(city == 'new york city' || city == 'nyc' || city == 'new york') {
      $('body').attr('class','nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (city == 'sf' || city == 'san francisco' || city == 'bay area') {
      $('body').attr('class','sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (city == 'austin' || city == 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (city == 'los angeles' || city == 'la' || city == 'lax') {
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (city == 'sydney' || city == 'syd') {
      $('body').attr('class','sydney');
    }
  });
});