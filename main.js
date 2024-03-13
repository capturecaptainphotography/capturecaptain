
 // Function to change contact details
 function changeContactDetails() {
    const newDetails = [                      //here you change contact datails
        { iconClass: 'fas fa-user', content: 'SRINIVAS' },
        { iconClass: 'fas fa-phone', content: ' 8919513717' },
        { iconClass: 'fas fa-envelope', content: 'capturecaptainphotography1@gmail.com' }

    ];

    document.addEventListener("DOMContentLoaded", function() {
        const phoneNumber = "{+918919513717"; // Change this to your desired phone number
        const whatsappNumber = "+918919513717"; // Change this to your desired WhatsApp number
    
        // Update the href attribute of the phone link
        document.getElementById("phoneLink").href = "tel:" + phoneNumber;
    
        // Update the href attribute of the WhatsApp link
        document.getElementById("whatsappLink").href = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=Hi%20Capture%20Captain%20Photography!%20I%20need%20more%20info%20about%20You.";
    });
    

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

  


// pop up package 
document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function() {
        document.getElementById("popUp").style.display = "block";
    }, 15000); // 15 seconds
});
document.getElementById("popUp").addEventListener("click", function(event) {
    if (event.target === this) {
        document.getElementById("popUp").style.display = "none";
    }
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




//   contact connection
function sendMail() {
    // Get the values of the input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;
  
    // Check if all required fields are filled out
    if (!name || !number) {
      alert("Please fill out all required fields: Name and phone number");
      return; // Exit the function early if any field is empty
    }
  
    // Prepare parameters for sending email
    var params = {
      name: name,
      email: email,
      number: number,
      message: message
    };
  
    // EmailJS service and template IDs
    const serviceID = "service_kmhigao";
    const templateID = "template_av8h1jo";
  
    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        // Clear the form fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent successfully!");
      })
      .catch(err => console.log(err));
  }
  

  //popup book now connection


  
function sendMailpop() {
    // Get the values of the input fields
    var namepop = document.getElementById("namepop").value;
  
    var numberpop = document.getElementById("numberpop").value;
    var messagepop = document.getElementById("messagepop").value;
  
    // Check if all required fields are filled out
    if (!namepop || !numberpop) {
      alert("Please fill out all required fields: Name and phone number");
      return; // Exit the function early if any field is empty
    }
  
    // Prepare parameters for sending email
    var params = {
      namepop: namepop,
      numberpop: numberpop,
      messagepop: messagepop
    };
  
    // EmailJS service and template IDs
    const serviceID = "service_kmhigao";
    const templateID = "template_z50h7th";
  
    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        // Clear the form fields after successful submission
        document.getElementById("namepop").value = "";
        document.getElementById("numberpop").value = "";
        document.getElementById("messagepop").value = "";
        console.log(res);
        alert("Your message has been sent successfully!");
      })
      .catch(err => console.log(err));
  }
  









// Function to hide the loader
function hideLoader() {
    document.body.classList.add('loaded');
  }
  
  // Event listener for when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    hideLoader();
  });
  
  // Event listener for when all resources have finished loading
  window.addEventListener('load', function() {
    hideLoader();
  });
  