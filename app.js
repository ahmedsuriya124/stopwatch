let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let sec = document.getElementById('sec');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let secId;
startBtn.addEventListener('click', () => {
    if (secId === undefined) {
        secId = setInterval(() => {
            if (parseInt(sec.textContent) < 9) {
                sec.textContent = '0' + (parseInt(sec.textContent) + 1)
            }
            else
                if (parseInt(sec.textContent) === 59) {
                    mins.textContent = parseInt(mins.textContent) + 1;
                    sec.textContent = '00';
                    if (mins.textContent < 10) {
                        mins.textContent = '0' + (parseInt(mins.textContent))
                    }
                }
                else if (parseInt(mins.textContent) === 59) {
                    hours.textContent = parseInt(hours.textContent) + 1;
                    mins.textContent = '00';
                    if (hours.textContent < 10) {
                        hours.textContent = '0' + (parseInt(hours.textContent))
                    }
                }
                else
                    sec.textContent = parseInt(sec.textContent) + 1;
        }, 1000);
    }
})

stopBtn.addEventListener('click', () => {
    clearInterval(secId);
    secId = undefined;
})

resetBtn.addEventListener('click', () => {
    clearInterval(secId);
    secId = undefined;
    sec.textContent = '00';
    mins.textContent = '00';
    hours.textContent = '00';
})

let h = document.getElementsByTagName