document.addEventListener('DOMContentLoaded', function() {
    const attendingYes = document.getElementById('attending-yes');
    const attendingNo = document.getElementById('attending-no');
    const guestsSection = document.getElementById('guests-section');
    const rsvpForm = document.getElementById('rsvp-form');
    const formSuccess = document.getElementById('form-success');
    
    // Initially hide guests section
    guestsSection.style.display = 'none';
    
    attendingYes.addEventListener('change', function() {
      if(this.checked) {
        guestsSection.style.display = 'flex';
      }
    });
    
    attendingNo.addEventListener('change', function() {
      if(this.checked) {
        guestsSection.style.display = 'none';
      }
    });
    
    // Handle form submission
    rsvpForm.addEventListener('submit', function(e) {
      // For this demo, we'll just show the success message
      // In production with Formspree, this would actually submit
      // e.preventDefault();
      
      // You'd remove this preventDefault() when using actual Formspree
      // and the actual form would submit to their servers
      
      rsvpForm.style.display = 'none';
      formSuccess.style.display = 'block';
      
      // Scroll to success message
      formSuccess.scrollIntoView({ behavior: 'smooth' });
    });
  });