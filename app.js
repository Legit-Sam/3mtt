document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-list').classList.add('show'); // Show the menu
    document.getElementById('close-icon').style.display = 'inline-block'; // Show close icon
    document.getElementById('menu-icon').style.display = 'none'; // Hide menu icon

});

const fellowsContainer = document.querySelector('.fellows_container');
const fellowsCards = document.querySelectorAll('.fellows_card');

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('nav-list').classList.remove('show'); // Hide the menu
    document.getElementById('close-icon').style.display = 'none'; // Hide close icon
    document.getElementById('menu-icon').style.display = 'inline-block'; // Show menu icon
});




// Clone the first card to create a seamless scroll effect
const firstCardClone = fellowsCards[0].cloneNode(true);
fellowsContainer.appendChild(firstCardClone);

let scrollWidth = fellowsContainer.scrollWidth;

// Scroll the fellows container
function scrollFellows() {
    const currentScroll = fellowsContainer.scrollLeft;
    const scrollAmount = 200; // Amount to scroll in each interval

    if (currentScroll >= scrollWidth - fellowsContainer.clientWidth) {
        fellowsContainer.scrollLeft = 0; // Reset to start
    } else {
        fellowsContainer.scrollLeft += scrollAmount; // Scroll right
    }
}

// Set interval for auto-scrolling
setInterval(scrollFellows, 2000); // Adjust the interval as needed

