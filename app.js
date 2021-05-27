      function randomNumber() {
        var random = 0;
        random = Math.floor(Math.random() * (3) + 1);
        return random;
      }

      function randomFF4Image() {
        imageChoice = randomNumber();
        console.log(imageChoice);
        if (imageChoice == 1){
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_red_wings.jpeg"> <br> <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        } else if (imageChoice == 2) {
          document.getElementById("FF4_logo").innerHTML = '<img src="ff4_cartridge.jpeg"> <br> <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        } else if (imageChoice == 3) {
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_snes_menu.png"> <br> <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        } else {
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_logo.png"> <br>  <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        }
      }

      function changeSystemColor() {
        // document.getElementById("system_h1").style.backgroundColor = "black";
        var colorChoice = randomNumber();
        if (colorChoice == 1) {
          color = "purple";
        } else if (colorChoice == 2) {
          color = "darkgreen";
        } else if (colorChoice == 3) {
          color = "darkred";
        } else {
          color = "black";
        }
        var elements = document.getElementsByClassName("system");
        for (var i in elements) {
           elements[i].style.backgroundColor = color;
        }
      }
