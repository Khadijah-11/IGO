

/* const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = form.querySelector('#firstname').value;
    const lastname = form.querySelector('#lastname').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    /* console.table({ firstname, lastname, email, message }); */
    /* saveMessages(firstname, lastname, email, message);
    form.reset();
    alert('Message sent');
});
 */ 
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*   const firebaseConfig = {
    apiKey: "AIzaSyBwOKl0O4wSh8BVQZ5i_w-_tLnlhnfgO5w",
    authDomain: "igs-sa.firebaseapp.com",
    databaseURL: "https://igs-sa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "igs-sa",
    storageBucket: "igs-sa.appspot.com",
    messagingSenderId: "1045061529167",
    appId: "1:1045061529167:web:cfed14b6599d0e5b8f843a",
    measurementId: "G-596411J8D8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // reference the database
  var contactFormDB = firebase.database().ref('contact-form');

  document.getElementById("contact-form").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var firstname = getElementVal("firstname");
    var lastname = getElementVal("lastname");
    var email = getElementVal("email");
    var message = getElementVal("message");
    /* console.table({ firstname, lastname, email, message }); */
    /* saveMessages(firstname, lastname, email, message);
    document.getElementById("contact-form").reset();
    alert('Message sent');
    
  } */

  /* const saveMessages = (firstname, lastname, email, message) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };  */
  const firebaseConfig = {
    apiKey: "AIzaSyBwOKl0O4wSh8BVQZ5i_w-_tLnlhnfgO5w",
    authDomain: "igs-sa.firebaseapp.com",
    projectId: "igs-sa",
    storageBucket: "igs-sa.appspot.com",
    messagingSenderId: "1045061529167",
    appId: "1:1045061529167:web:cfed14b6599d0e5b8f843a",
    measurementId: "G-596411J8D8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Add a new document with a generated ID
    db.collection('mail').add({
        to: 'taguik71@gmail.com', // The recipient email address (replace with your email)
        fromName: `${firstname} ${lastname}`,
        fromEmail: `${email}`,
        message: {
            subject: `New contact form submission from ${firstname} ${lastname}`,
            html: `From: ${firstname} ${lastname} (${email})<br><br>${message}`
        }
    }).then(() => {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset();
    }).catch((error) => {
      console.error('Error sending message: ', error);
      alert('Error sending message. Please try again later.');
    });
    });
  