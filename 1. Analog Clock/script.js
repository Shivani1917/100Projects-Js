const hours1 = document.getElementById('hour')
const minutes1 = document.getElementById('min')
const seconds1 = document.getElementById('sec')
const btn = document.getElementById('btn')
const date1 = document.getElementById('date')
const time1 = document.getElementById('time')


btn.addEventListener('click', ()=>{
    const html= document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        btn.innerHTML = 'Dark Mode'
    }else{
        html.classList.add('dark');
        btn.innerHTML = 'Light Mode';
    }
})

const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months=['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


setInterval(()=>{
    const time = new Date();
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const hour = time.getHours();
    const hourIn12Hour = hour % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour > 12 ? 'PM' : 'AM';
    
    
    date1.innerText = `${days[day]}, ${date} ${months[month]}`;
    time1.innerText = `${hour}: ${minutes<10? `0${minutes}`: minutes}${ampm}`;
})

