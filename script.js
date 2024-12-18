
function displayTime(){

          let h = document.getElementsByClassName('hr')[0];
          let m = document.getElementsByClassName('mn')[0];
          let s = document.getElementsByClassName('ss')[0];

          


            let data = new Date();
 
            let hours = data.getHours();
            let minutes = data.getMinutes();
            let seconds = data.getSeconds();

    

               h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
               m.style.transform = `rotate(${6 * minutes}deg)`;
               s.style.transform = `rotate(${6 * seconds}deg)`;
              

               let sound = new Audio('sound/clock.mp3');
               sound.play();
}

               
  setInterval(displayTime,1000);