
/*
just code i thought would be intreseting to add to my site
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
