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




