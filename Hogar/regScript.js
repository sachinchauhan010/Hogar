const signTab = document.getElementById('signBtn');
const logTab = document.getElementById('logBtn');
const sign = document.getElementById('signUp');
const log = document.getElementById('logIn');



logTab.addEventListener('click', () => {

    log.style.display = 'block';
    sign.style.display = 'none';
    logTab.classList.add( 'border-blue-700');
    signTab.classList.remove( 'border-blue-500');
});

signTab.addEventListener('click', () => {

    sign.style.display = 'block';
    log.style.display = 'none';
    signTab.classList.add( 'border-blue-500');
    logTab.classList.remove('border-blue-500');
});

