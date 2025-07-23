document.addEventListener('DOMContentLoaded', function() {
    // Set the wedding date - October 23, 2025 at 4:00 PM MST
    const weddingDate = new Date('October 23, 2025 16:00:00 MST').getTime();
    
    // Update the countdown every second
    const countdown = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the wedding date
      const distance = weddingDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display the result
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
      
      // If the countdown is finished, clear interval and display a message
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        document.querySelector('.countdown-container h3').textContent = 'Our Wedding Day Is Here!';
      }
    }, 1000);
  });