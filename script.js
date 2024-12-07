document.getElementById('submitQuiz').addEventListener('click', () => {
    const answers = {
      q1: 'c', // Paris
      q2: 'b', // William Shakespeare
      q3: 'b'  // Jupiter
    };
  
    let score = 0;
    const totalQuestions = Object.keys(answers).length;
  
    // Loop through answers and check user's input
    for (const [key, value] of Object.entries(answers)) {
      const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
      if (userAnswer && userAnswer.value === value) {
        score++;
      }
    }
  
    // Display results
    document.getElementById('score').textContent = score;
    document.getElementById('result').classList.remove('hidden');
  });


// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Validate that fields are filled
    if (name && email && subject && message) {
      // Hide the form and show confirmation message
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('confirmationMessage').classList.remove('hidden');
  
      // Optionally, you can send the form data to a server here (using AJAX, for example).
      console.log('Form submitted:', { name, email, subject, message });
    } else {
      alert('Please fill in all fields.');
    }
  });
  




  // script.js
document.getElementById('testimonialForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const testimonial = document.getElementById('testimonial').value;
  
    // Validate that fields are filled
    if (name && email && testimonial) {
      // Hide the form and show confirmation message
      document.getElementById('testimonialForm').style.display = 'none';
      document.getElementById('confirmationMessage').classList.remove('hidden');
  
      // Optionally, you can send the form data to a server here (using AJAX, for example).
      console.log('Testimonial submitted:', { name, email, testimonial });
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  