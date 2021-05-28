      function randomNumber(max) {
        var random = 0;
        random = Math.floor(Math.random() * (max) + 1);
        return random;
      }

      // Variables for the randomFF4Image function
      let oldImageChoice = 0;
      let imageFirstRun = 0;
      function randomFF4Image() {
        let imageChoice = randomNumber(3);

        if ((oldImageChoice == imageChoice) && (imageFirstRun == 1)) {
          imageChoice = 0;
          oldImageChoice = 0;
        }
        if ((oldImageChoice != imageChoice) && (imageFirstRun == 1)) {
          oldImageChoice = imageChoice
        }
        if (imageFirstRun == 0) {
          oldImageChoice = imageChoice;
          imageFirstRun = 1;
        }

        button = '<button type="button" onclick="randomFF4Image()">Random Image!</button>'
        if (imageChoice == 1){
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_red_wings.jpeg"> <br>' + button ;
        } else if (imageChoice == 2) {
          document.getElementById("FF4_logo").innerHTML = '<img src="ff4_cartridge.jpeg"> <br>' + button  ;
        } else if (imageChoice == 3) {
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_snes_menu.png"> <br>' + button  ;
        } else {
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_logo.png"> <br>' + button  ;
        }
      }

      function storeOldVariable(oldVar, newVar, firstRun) {
        if ((oldVar == newVar) && (firstRun == 1)) {
          newVar = 0;
          oldVar = 0;
        }
        if ((oldVar != newVar) && (firstRun == 1)) {
          oldVar = newVar
        }
        if (firstRun == 0) {
          oldVar = newVar;
          firstRun = 1;
        }
        settings = [oldVar, newVar, firstRun];
        return settings;
      }

      // Variables for the changeSystemColor function
      systemColorFirstRun = 0;
      oldColorChoice = 0;
      function changeSystemColor() {
        var colorChoice = randomNumber(4);
        // if old color is equal to the new color then set the new color to 0 so a non duplicate image is shown
        if ((oldColorChoice == colorChoice) && (systemColorFirstRun == 1)) {
          colorChoice = 0;
          oldColorChoice = 0;
        }
        // stores the current color choice so it is remembered at next run as the old choice
        if ((oldColorChoice != colorChoice) && (systemColorFirstRun == 1)) {
          oldColorChoice = colorChoice
        }
        // if this is the program first run then store the current color as the old color choice
        if (systemColorFirstRun == 0) {
          oldColorChoice = colorChoice;
          systemColorFirstRun = 1;
        }

        // let settings = storeOldVariable(oldColorChoice, colorChoice, systemColorFirstRun);

        if (colorChoice == 1) {
          color = "purple";
        } else if (colorChoice == 2) {
          color = "darkgreen";
        } else if (colorChoice == 3) {
          color = "darkred";
        } else if (colorChoice == 4){
          color = "slategray";
        } else {
          color = "blue";
        }
        var elements = document.getElementsByClassName("system");
        for (var i in elements) {
           elements[i].style.backgroundColor = color;
        }
      }

      function quiz() {
        document.getElementById('quiz').innerHTML = 'Quiz Results:<br>';

        let bossAnswer = prompt('Who is the final boss of FF4?')
        console.log(bossAnswer)

        if (bossAnswer == null){
        } else {
          document.getElementById('quiz').innerHTML = '1) Who is the final boss of FF4?<br>Answer: Zeromus <br> You said: '+ bossAnswer
          if (bossAnswer.toLowerCase() == 'zeromus') {
            //document.write('<br>You are correct!');
            document.getElementById('quiz').innerHTML += '<br> You are correct!'
          } else {
            //document.write('<br>You are incorrect!');
            document.getElementById('quiz').innerHTML += '<br> You are incorrect!'
          }
      }

        let captainAnswer = prompt('What is Cecil the Captain of?')
        if (captainAnswer == null) {
        } else {
          document.getElementById('quiz').innerHTML += '<br><br>2) What is Cecil the Captain of?<br>Answer: The Red Wings <br> You said: ' + captainAnswer
          if (captainAnswer.toLowerCase() == 'the red wings') {
            document.getElementById('quiz').innerHTML += '<br>You are correct!';
          } else {
            document.getElementById('quiz').innerHTML +='<br>You are incorrect!';
          }
        }
      }

      function rate() {
        //let rating = -1;
        let rating = prompt('How many stars would you give this page?')
        while ((rating < 0) || (rating > 5)) {
          rating = prompt('Please enter a rating between 0 and 5.')
        }

        if (rating != 1) {
        document.getElementById('stars').innerHTML = 'You rate us ' + rating + ' Cecil\'s! <br>'}
        else {
          document.getElementById('stars').innerHTML ='You rate us ' + rating + ' Cecil! <br>'}
        
        let url = 'ff4_cecil_sprite.png'
        for (i=0; i < rating; i++) {
          document.getElementById('stars').innerHTML += '<img id="rating" src="' + url + '">'
        }
      }