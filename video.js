const video = document.querySelector('.video-container')
const btn = document.querySelector('button');
const switchBtn = document.querySelector('.switch');

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        switchBtn.style.borderRadius = '0 5px 5px 0';
        video.pause();
    } else {
        btn.classList.remove('slide')
        switchBtn.style.borderRadius = '5px 0 0  5px';
        video.play();
    }
})