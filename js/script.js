'use strict'
		
const powerNumberList = [[28,  0,  0,  0,  0,  0,  0,  0,  4,  5,  8,  9, 24],
                          [ 0, 33,  6,  8,  4,  0,  0,  3,  5,  7,  8, 10, 26],
                          [ 0,  0, 39, 11, 10,  9,  5,  3,  7,  7,  8, 11, 27],
                          [ 0,  0,  0, 44, 11, 10, 10,  9,  9,  7,  8, 13, 31],
                          [ 0,  0,  0,  0, 51, 15, 15, 10, 10,  7, 10, 14, 28],
                          [ 0,  0,  0,  0,  7, 58, 19, 17, 15, 12, 11, 15, 32],
                          [ 0,  0,  0,  0,  4, 10, 66, 31, 26, 21, 16, 17, 37],
                          [ 0,  0,  0,  0,  3,  7, 10, 99, 43, 39, 38, 44, 50],
                          [ 0,  0,  0,  0,  3,  6, 10, 11, 99, 58, 58, 66, 99],
                          [ 3,  3,  3,  4,  4,  5,  8,  9, 22, 99, 75, 75, 99],
                          [ 4,  5,  5,  6,  6,  6,  8,  9, 17, 26, 99, 99, 99],
                          [ 7,  8,  8,  9,  9,  9, 10, 12, 19, 31, 48, 99, 99],
                          [15, 16, 18, 21, 18, 22, 24, 27, 36, 50, 99, 99, 99]];

document.getElementById('mLatio').onsubmit = function(event) {
    event.preventDefault();
    
    const stuck = parseInt(document.getElementById('mLatio').stuck.value);
    const sb =  parseInt(document.getElementById('mLatio').sb.value);
    const bb =  parseInt(document.getElementById('mLatio').bb.value);
    const ante =  parseInt(document.getElementById('mLatio').ante.value);
    const people =  parseInt(document.getElementById('mLatio').people.value);
    const mLatio = stuck / (sb + bb + ante * people);

    document.getElementById('output1').textContent = `${mLatio}`;

    document.getElementById('powernumber').onsubmit = function(event) {
        event.preventDefault();
        
        let hand1 = parseInt(document.getElementById('powernumber').hand1.value);
        let hand2 = parseInt(document.getElementById('powernumber').hand2.value);
        const suits = document.getElementById('powernumber').suit.value;
        
        if(hand1 == 1) {
            hand1 += 13;
        }
        if(hand2 == 1) {
            hand2 += 13;
        }
        if(hand1 > hand2 && suits == 1 || hand1 < hand2 && suits == 0) {
            const w = hand1;
            hand1 = hand2;
            hand2 = w;
        }
    
        const powerNumber = powerNumberList[hand1 - 2][hand2 - 2];
        document.getElementById('output2').textContent = `${powerNumber}`;

        document.getElementById('allin').onsubmit = function(event) {
            event.preventDefault();
            
            const restPeople = parseInt(document.getElementById('allin').restPeople.value);
            const mustPower = restPeople * mLatio;
            
            console.log(mustPower);
            console.log(powerNumber);
            if (mustPower > powerNumber){
                document.getElementById('output3').textContent = `Fold!!`;
            } else {
                document.getElementById('output3').textContent = `Push!!`;
            }
        };
    
    };
};

