document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#35656f';
    });
    input.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
    });
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
});