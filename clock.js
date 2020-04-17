function updateTime(){
    var d, h, m, s;
    d = new Date;

    h = 30* ((d.getHours()%12) + d.getMinutes( ) / 60) +90; 
    m = 6 * d.getMinutes()+90;
    s = 6 * d.getSeconds ()+90;

    hourHand = document.querySelector('.hourHand')
    minuteHand = document.querySelector('.minuteHand')
    secondHand = document.querySelector('.secondHand')


    hourHand.style.transform = 'rotate(' + h + 'deg)';
    minuteHand.style.transform = 'rotate(' + m + 'deg)';
    secondHand.style.transform = 'rotate(' + s + 'deg)';
    
   
    }

    updateTime();
    
    window.onload = () => { setInterval(updateTime, 1000); }


