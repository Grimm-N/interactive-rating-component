const ratingButtons = document.querySelectorAll('.rating__btn');
const submitButton = document.querySelector('.feedback__raiting-submit');
const ratingStage = document.querySelector('.feedback__raiting');
const thankYouStage = document.querySelector('.feedback__submit');
const selectedRatingDisplay = document.querySelector('.selected__rating');
const alertMessage = document.querySelector('.feedback__raiting-alert'); 

let selectedRating = null; 

ratingButtons.forEach(button => {
  button.addEventListener('click', function() {
    ratingButtons.forEach(btn => btn.classList.remove('active'));
    
    button.classList.add('active');
    
    selectedRating = button.dataset.rating;
    
    if (alertMessage) {
      alertMessage.style.display = 'none';
    }
  });
});

submitButton.addEventListener('click', function() {
  if (!selectedRating) {
    alertMessage.style.display = 'block';
    return; 
  }

  alertMessage.style.display = 'none';

  selectedRatingDisplay.textContent = selectedRating;
  
  ratingStage.style.display = 'none'; 
  thankYouStage.style.display = 'flex'; 
});
