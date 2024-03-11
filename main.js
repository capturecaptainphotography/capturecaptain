
 // Function to change contact details
 function changeContactDetails() {
    const newDetails = [                      //here you change contact datails
        { iconClass: 'fas fa-home', content: 'hi New Street, New City, New Country' },
        { iconClass: 'fas fa-phone', content: ' 987-654-3210' },
        { iconClass: 'fas fa-envelope', content: 'example@example.com' }

    ];

        // Get the phone number and WhatsApp number dynamically
const phoneNumber = "+123456789"; // Change this to your desired phone number
const whatsappNumber = "+123456789"; // Change this to your desired WhatsApp number






// Update the href attribute of the phone link
document.getElementById("phoneLink").href = "tel:" + phoneNumber;

// Update the href attribute of the WhatsApp link
document.getElementById("whatsappLink").href = "tel:" + whatsappNumber;


    const contactInfoItems = document.querySelectorAll('.pc-contact-info-item');

    contactInfoItems.forEach((item, index) => {
        const iconElement = item.querySelector('.pc-contact-info-icon i');
        const contentElement = item.querySelector('.pc-contact-info-content p');

        if (iconElement && contentElement) {
            iconElement.className = newDetails[index].iconClass;
            contentElement.textContent = newDetails[index].content;
        }
    });
}

// Call the function to change contact details
changeContactDetails();










const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}








// hfhgfjhgj?
















// popup.js
// Automatically open the popup after 5 seconds of page load
setTimeout(openPopup, 9000); // 5000 milliseconds = 5 seconds


for (let i = 1; i <= 200; i++) {
    const button = document.getElementById("openFormButton" + i);
    if (button) {
      button.addEventListener("click", openPopup);
    }
}






function openPopup() {
    document.getElementById("popupContainer").style.display = "flex";
}

// Add event listener to close button
document.getElementById("closeform").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "flex";
});

// Add event listener to close popup when clicking outside the form
document.getElementById("popupContainer").addEventListener("click", function(event) {
    if (event.target === this) {
        document.getElementById("popupContainer").style.display = "none";
    }
});

// Add event listener to form submission
document.getElementById("custom-contact-form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.submit(); // Submit the form
    this.reset();
    
    // Hide the popup after form submission
    // document.getElementById("popupContainer").style.display = "none";
    
    // Optionally, you can add code to handle form submission here
    // For example, sending form data to a server
    // This depends on your specific requirements
    // Example:
    // this.submit(); // Submit the form
});

  




































document.addEventListener('DOMContentLoaded', function () {
    // Check if the device supports hover
    const isHoverSupported = window.matchMedia('(hover: hover)').matches;

    if (!isHoverSupported) {
        // Device does not support hover, attach touch event listeners
        const scope = document.querySelector('.scope');
        const spans = scope.querySelectorAll('span');

        spans.forEach(span => {
            const img = span.querySelector('img');

            // Add touch event listener to each span
            span.addEventListener('touchstart', function () {
                img.classList.add('hover');
            });

            span.addEventListener('touchend', function () {
                img.classList.remove('hover');
            });
        });
    }
});




