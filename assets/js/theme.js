document.querySelector('.ball').addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('light-theme');
});