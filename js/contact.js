const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = form.querySelector('#firstname').value;
    const lastname = form.querySelector('#lastname').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    console.table({ firstname, lastname, email, message });
    form.reset();
    alert('Message sent');
});