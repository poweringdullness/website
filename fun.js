
/*
just code i thought would be interesting to add to my site
- poweringdullness
*/
        
        // removed stuff so i can add actual good stuff
        // add future stuff here later


/*
techno !!
*/

const technoPet = document.getElementById('technoPet');
const tooltip = document.getElementById('technoPetTooltip');

// Mouse follow effect
document.addEventListener('mousemove', (e) => {
    technoPet.style.left = `${e.pageX - 50}px`;
    technoPet.style.top = `${e.pageY - 50}px`;
});

// Tooltip with multiple quotes on Hover
const technoQuotes = [
    "Technoblade never dies!",
    "Nerd!",
    () => `If you wish to defeat me, train for ${getRandomNumber(1, 9)} hundred years.`,
    "Now, I know what you’re gonna say: “Technoblade, you monster! You really killed millions of your own kind just to make a sword?”. And it- look, look, look, come on, you gotta understand. There was nothing else I could do, I was mildly inconvenienced!",
    "I don’t fear failure, I embrace it and learn from it.",
    "I don’t just break the rules, I make them."
];

technoPet.addEventListener('mouseover', () => {
    const randomQuote = technoQuotes[Math.floor(Math.random() * technoQuotes.length)];
    tooltip.style.display = 'block';
    tooltip.textContent = randomQuote;

    // Get the position of technoPet using getBoundingClientRect
    const rect = technoPet.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX + 50}px`;  // Adjust with scroll offset
    tooltip.style.top = `${rect.top + window.scrollY}px`;  // Adjust with scroll offset
});

technoPet.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});

// Play nerd sound when clicked
technoPet.addEventListener('click', () => {
    nerd();
});

// Function to play nerd sound effect
function nerd() {
    const nerdsfx = new Audio('https://github.com/poweringdullness/website/raw/refs/heads/main/sfx/NERD.mp3'); // NEEEEEEEEEERD
    nerdsfx.play();
}

// Function to get a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
