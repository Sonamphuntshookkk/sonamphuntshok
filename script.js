document.addEventListener('DOMContentLoaded', function () {
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', function () {
            // Toggle active class for the clicked item
            this.classList.toggle('active');

            // Toggle display of the accordion content
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});