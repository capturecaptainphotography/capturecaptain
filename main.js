// Loop through each span element
spans.forEach(span => {
    // Add event listener for touchstart event
    span.addEventListener('touchstart', () => {
        // Add a class to the span when touched
        span.classList.add('hover');
    });

    // Add event listener for touchend event
    span.addEventListener('touchend', () => {
        // Remove the class when touch ends
        span.classList.remove('hover');
    });
});
