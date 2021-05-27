      function randomNumber() {
        var random = 0;
        random = Math.floor(Math.random() * (3) + 1);
        return random;
      }

      function randomFF4Image() {
        random = randomNumber();
        console.log(random);
        if (random == 1){
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_red_wings.jpeg"> <br> <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        } else if (random == 2) {
          document.getElementById("FF4_logo").innerHTML = '<img src="ff4_cartridge.jpeg"> <br> <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        } else if (random == 3) {
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_snes_menu.png"> <br> <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        } else {
          document.getElementById("FF4_logo").innerHTML = '<img src="FF4_logo.png"> <br>  <button type="button" onclick="randomFF4Image()">Random Image!</button>' ;
        }
      }
