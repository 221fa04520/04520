document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.getElementById('container');
    
    let isToggled = false;
    
    button.addEventListener('click', () => {
        if (!isToggled) {
            button.textContent = 'Revert State';
            text.textContent = 'Text Changed!';
            container.style.backgroundColor = 'lightcoral';
            button.classList.add('active');
        } else {
            button.textContent = 'Change State';
            text.textContent = 'Initial Text';
            container.style.backgroundColor = 'lightblue';
            button.classList.remove('active');
        }
        isToggled = !isToggled;
    });
});
