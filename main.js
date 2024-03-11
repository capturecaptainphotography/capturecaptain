
 // Function to change contact details
 function changeContactDetails() {
    const newDetails = [                      //here you change contact datails
        { iconClass: 'fas fa-home', content: 'hi New Street, New City, New Country' },
        { iconClass: 'fas fa-phone', content: ' 987-654-3210' },
        { iconClass: 'fas fa-envelope', content: 'example@example.com' }
    ];

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




