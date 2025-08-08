document.addEventListener('DOMContentLoaded', function() {
    const attendingYes = document.getElementById('attending-yes');
    const attendingNo = document.getElementById('attending-no');
    const guestsSection = document.getElementById('guests-section');
    const guestsSelect = document.getElementById('guests');
    const guestNameSection = document.getElementById('guest-name-section');
    const rsvpForm = document.getElementById('rsvp-form');
    const formSuccess = document.getElementById('form-success');
    
    // Initially hide guests section and guest name section
    guestsSection.style.display = 'none';
    guestNameSection.style.display = 'none';
    
    attendingYes.addEventListener('change', function() {
        if(this.checked) {
            guestsSection.style.display = 'flex';
            // Check if guest name should be shown based on current selection
            if(guestsSelect.value === '2') {
                guestNameSection.style.display = 'flex';
            }
        }
    });
    
    attendingNo.addEventListener('change', function() {
        if(this.checked) {
            guestsSection.style.display = 'none';
            guestNameSection.style.display = 'none';
        }
    });
    
    // Handle guest count change
    guestsSelect.addEventListener('change', function() {
        if(this.value === '2') {
            guestNameSection.style.display = 'flex';
        } else {
            guestNameSection.style.display = 'none';
        }
    });
    
    // Handle form submission
    rsvpForm.addEventListener('submit', function(e) {
        rsvpForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth' });
    });
});