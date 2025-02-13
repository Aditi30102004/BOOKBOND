document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta-btn');
    const addReviewBtn = document.querySelector('.add-review-btn');
    const createClubBtn = document.querySelector('.create-club-btn');
    const modal = document.querySelector('#modal');
    const closeModal = document.querySelector('.close-modal');
    const modalForm = document.querySelector('#modal-form');
    const formTitle = document.querySelector('#form-title');
    const formContent = document.querySelector('#form-content');
    const reviewList = document.querySelector('.review-list');
    const clubList = document.querySelector('.club-list');

    // Handling Modal
    addReviewBtn.addEventListener('click', function () {
        openModal('Add Review');
    });

    createClubBtn.addEventListener('click', function () {
        openModal('Create Club');
    });

    closeModal.addEventListener('click', closeModalHandler);

    // Handle Sign-Up Button Click
    ctaButton.addEventListener('click', function () {
        openModal('Sign Up');
    });

    // Handle form submission
    modalForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (modalForm.dataset.action === 'Add Review') {
            addReview(formTitle.value, formContent.value);
        } else if (modalForm.dataset.action === 'Create Club') {
            createClub(formTitle.value, formContent.value);
        } else if (modalForm.dataset.action === 'Sign Up') {
            alert(`Welcome to BookMate, ${formTitle.value}!`);
        }
        closeModalHandler();
        modalForm.reset(); // Clear the form after submission
    });

    // Open modal with different contexts (review/club/signup)
    function openModal(action) {
        modal.classList.remove('hidden');
        modalForm.dataset.action = action; // Set action for the modal form
        formTitle.placeholder = action === 'Sign Up' ? 'Your Name' : 'Title';
        formContent.style.display = action === 'Sign Up' ? 'none' : 'block'; // Hide textarea for sign up
    }

    // Close modal
    function closeModalHandler() {
        modal.classList.add('hidden');
    }

    // Add a review to the page
    function addReview(title, content) {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');
        reviewCard.innerHTML = `<h3>${title}</h3><p>${content}</p><span>- New User</span>`;
        reviewList.appendChild(reviewCard);
    }

    // Add a club to the page
    function createClub(title, description) {
        const clubCard = document.createElement('div');
        clubCard.classList.add('club-card');
        clubCard.innerHTML = `<h3>${title}</h3><p>${description}</p><button class="join-club-btn">Join Club</button>`;
        clubList.appendChild(clubCard);
    }
});
