document.querySelector('.start').addEventListener('click', start);
const inside = document.querySelector('.inside');
function  start() {
    inside.classList.add('variat-1');
    setTimeout(function(){alert('You win!!!')
    inside.classList.remove('variat-1');
     }, 4000);
}