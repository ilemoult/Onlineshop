function uhrwerk(){
    const time = new Date();

    const t = time.getDay();    // Minuten
    let h = time.getHours();     // Stunde
    let m = time.getMinutes();    // Minuten
    let s = time.getSeconds();    // Sekunden
    let arrDay = ['MON','TUE','WED','THU','FRI','SAT','SUN']
    let am ='AM'


    if(h > 12){
    am = 'PM';
    };

    if(h === 13){h = '1';}
    if(h === 14){h = '2';}
    if(h === 15){h = '3';}
    if(h === 16){h = '4';}
    if(h === 17){h = '5';}
    if(h === 18){h = '6';}
    if(h === 19){h = '7';}
    if(h === 20){h = '8';}
    if(h === 21){h = '9';}
    if(h === 22){h = '10';}
    if(h === 23){h = '11';}
    if(h === 24){h = '12';}

    if(m < 10){
        m = '0' + m;
    };

    if(h < 10){
        h = '0' + h;
    };

    if(s < 10){
        s = '0' + s;
    };

    el('#wochentag').innerText = arrDay[t-1];
    el('#stunde').innerText = h;
    el('#am').innerText = am;
    el('#minute').innerText = m;
    el('#sekunde').innerText = s;

    setTimeout(uhrwerk,1000);
};

uhrwerk();

    