      function randomNumber(max) {
        var random = 0;
        random = Math.floor(Math.random() * (max) + 1);
        return random;
      }

      function randomFF4Image() {
        imageChoice = randomNumber(3);
        console.log(imageChoice);
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

      // colorChoice = 0;
      function changeSystemColor() {
        // document.getElementById("system_h1").style.backgroundColor = "black";
        var colorChoice = randomNumber(5);
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
        let bossAnswer = prompt('Who is the final boss of FF4?')
        document.write('1) Who is the final boss of FF4?<br>Answer: Zeromus <br> You said: ' + bossAnswer)
        if (bossAnswer.toLowerCase() == 'zeromus') {
          document.write('<br>You are correct!');
        } else {
          document.write('<br>You are incorrect!');
        }

        let captainAnswer = prompt('What is Cecil the Captain of?')
        document.write('<br><br>2) What is Cecil the Captain of?<br>Answer: The Red Wings <br> You said: ' + captainAnswer)
        if (captainAnswer.toLowerCase() == 'the red wings') {
          document.write('<br>You are correct!');
        } else {
          document.write('<br>You are incorrect!');
        }
      }

      document.getElementById("quizButton").addEventListener("click", function(event){
        event.preventDefault()
      });

