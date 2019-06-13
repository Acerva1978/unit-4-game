var images = [
    'assets/images/red.png',
    'assets/images/blue.png',
    'assets/images/yellow.png',
    'assets/images/green.png'
  ];
  
  var random_result;
  var lost = 0;
  var win = 0;
  var previous = 0;
  var randomNumbers = [];
  
  
  
  var resetAndStart = function (){
  
    // $('#empty-div').empty();
  
  random_result = Math.floor(Math.random() * 69 ) + 30;
  
     
  $(".result").html(random_result)
   for(var i = 0; i < 4; i++){
     var random = Math.floor(Math.random() * 11) + 1;
       randomNumbers.push(random);
     
   }
    
   
   for (var j = 0; j < randomNumbers.length; j++) {
    var img = $('<img>');
    img.attr('src', images[j]);
    img.addClass('game');
    img.attr('data-number', randomNumbers[j]);
    $("#empty-div").append(img);
    
  
  }
       $(".previous").html("" + previous);
       
  }
  resetAndStart();
  
  
  $(".game").on('click', function () {
  
    var num = parseInt($(this).attr('data-number'));
   
    previous += num;
      
    $(".previous").html("" + previous);
      console.log(previous)
    if(previous > random_result){
        lost++;
        $(".lost").html(lost)
        
        previous = 0;
          
        resetAndStart();
       
    }
    else if(previous === random_result){
        win++;
  
        $(".wins").html(win)
  
        previous = 0;
  
        resetAndStart();
    }
  
    
  });
  

  
  
  
  