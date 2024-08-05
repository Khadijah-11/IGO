// Initialize
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
        to: 'igssa.ulawen@gmail.com', // The recipient email address (replace with your email)
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
  