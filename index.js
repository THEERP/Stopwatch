let Stopwatch = document.querySelector('.go');
let stop = document.querySelector('.stop');
let clear = document.querySelector('.clear');
let Seconds = document.querySelector('.Seconds');
let minutes = document.querySelector('.minutes');
let hour = document.querySelector('.hour');
let s = 0, m =0, h = 0;
Stopwatch.addEventListener('click',(e)=>{
 
    let timer = setInterval(()=>{
        Seconds.textContent=s;
        minutes.textContent = m;
        hour.textContent = h;
        if(m<10){
            minutes.textContent = '0 '+m;
        }else{
            minutes.textContent = m ;
        }
        if(h<10){
            hour.textContent = '0 '+h;
        }else{
            hour.textContent = h ;
        }
        if(s<10){
            Seconds.textContent = '0 '+ s ;
        }else{
            Seconds.textContent = s ;
        }
        s++;
        if(s>59){
            m+=1;
            if(m<10){
                minutes.textContent = m + '0';
            }else{
                minutes.textContent = m ;
            }
            
            s = 0;
            if(m>59){
                h+=1;
                hour.textContent = h;
                s = 0;
                m = 0
            }
        }
    },1000);

    stop.addEventListener('click',(e)=>{
        clearInterval(timer)
        });

    clear.addEventListener('click',(e)=>{
        s = 0, m =0, h = 0;
        Seconds.textContent='0 0';
        minutes.textContent = '0 0';
        hour.textContent = '0 0';
        });
});

