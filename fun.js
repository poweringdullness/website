
/*
just code i thought would be interesting to add to my site
- poweringdullness
*/
        
        // background color change on button click
        const changeBgButton = document.getElementById('changeBgButton');
        changeBgButton.addEventListener('click', () => {
            document.body.style.backgroundColor = getRandomColor();
        });

        //  generate a random color
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // smooth scroll for navigation
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                const targetId = link.getAttribute('href').substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // hover effect on header text color
        const header = document.querySelector('header h1');
        header.addEventListener('mouseover', () => {
            header.style.color = getRandomColor(); // Change to random color on hover
        });
        header.addEventListener('mouseout', () => {
            header.style.color = ''; // Reset to default color
        });

        // add future stuff here later

// Technoblade Pet Interaction
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
    tooltip.style.left = `${technoPet.offsetLeft + 50}px`;
    tooltip.style.top = `${technoPet.offsetTop}px`;
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
