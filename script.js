// EDIT THIS BIT: here's where all the slides go
// image: 'name-of-image.jpeg'
// alt: [describe image for screenreaders]
// title: [nice title for the transcript that will accompany the slide]
// transcript: [synopsis of your script/notes]
const slides = [
    {
        image: 'images/Slide1.jpeg',
        alt: `A slide that reads "silly presentation: pictures of Sherlock Holmes and monkeys and one chimp" with a close-up picture of a newspaper clipping announcing that there have been recent monkey thefts`,
        title: `Silly Presentation`,
        transcript: `Hello and welcome to this test presentation for Ian's March 2025 accessibility template.`
    },
    {
        image: 'images/Slide2.jpeg',
        alt: 'A picture of Jeremy Brett as Sherlock Holmes sitting at a desk holding a pocket watch. A prop resembling a taxidermied chimpanzee is in the background.',
        title: `Chimp`,
        transcript: `Here is Sherlock Holmes (Jeremy Brett) with a chimp prop.`
    },
    {
        image: 'images/Slide3.jpeg',
        alt: `Two images of male Hamadryas baboons in captivity. In one image, three baboons rest together at night. The other is a close-up of a baboon eating during the day.`,
        title: `Hamadryas Baboons`,
        transcript: `Poor baboons.`
    },
    {
        image: 'images/Slide4.jpeg',
        alt: `An image of Jeremy Brett as Sherlock Holmes bending down to be face-to-face with a baboon skeleton. They are both in profile. The image is surrounded with text that repeatedly says "baboon skeleton".`,
        title: `Baboon Skeleton`,
        transcript: `baboon skeleton baboon skeleton baboon skeleton baboon skeleton`
    },
    {
        image: 'images/Slide5.jpeg',
        alt: `An image of Dr. Watson with his back to the camera gesturing with a walking stick at a taxidermied Diana monkey on a mantle. A caption reads "Watson poking at a Diana monkey".`,
        title: `Diana Monkey`,
        transcript: `Watson's a monkey fan too!`
    },
    {
        image: 'images/Slide6.jpeg',
        alt: `Two images in the dark at Holmes and Watson's shared rooms in Baker Street. Books about monkeys are strewn across the floor. Holmes sits in a chair with one hand dangling toward a book open to a page about howler monkeys.`,
        title: `Primate Books`,
        transcript: `Some of these are available to read for free on Project Gutenberg, like A Hand-Book to the Primates Vol. I here: https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.gutenberg.org/files/43991/43991-h/43991-h.htm&ved=2ahUKEwjExp37xJeMAxXzfTABHVZmAfMQFnoECBUQAQ&usg=AOvVaw3HO8KWeduPL02b4JMdX-Ot`
    },
    {
        image: 'images/Slide7.jpeg',
        alt: `A picture of the antagonist, Professor Presbury, behind a table at the front of a lecture hall. He is gathering papers. To the right of him, an articulated baboon skeleton stands on the table. More skeletons and skulls are behind him, lined up below a projector screen.`,
        title: `Baboon Skeleton`,
        transcript: `baboon skeleton baboon skeleton baboon skeleton baboon skeleton`
    },
    // Copy and paste a slide chunk and edit as needed below!
];

// not necessary to edit anything below
let currentSlide = 0;

function updateSlide() {
    const slideImage = document.getElementById('slide');
    const transcriptTitle = document.querySelector('#transcript h2');
    const transcriptText = document.querySelector('#transcript p');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    slideImage.src = slides[currentSlide].image;
    slideImage.alt = slides[currentSlide].alt;
    transcriptTitle.textContent = slides[currentSlide].title;
    transcriptText.textContent = slides[currentSlide].transcript;

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    }
}

document.addEventListener('DOMContentLoaded', updateSlide);

document.addEventListener('DOMContentLoaded', () => {
    const fontSelector = document.getElementById('font-selector');
    const increaseFontSizeButton = document.getElementById('increase-font-size');
    const decreaseFontSizeButton = document.getElementById('decrease-font-size');
    const fontColorSelector = document.getElementById('font-color-selector');
    const invertColorButton = document.getElementById('invert-color');
    const transcriptContainer = document.getElementById('transcript');

    let currentFontSize = 16;
    let isInverted = false;

    // Change font
    fontSelector.addEventListener('change', () => {
        const selectedFont = fontSelector.value;

        if (selectedFont === 'opendyslexic') {
            transcriptContainer.style.fontFamily = '"OpenDyslexic", sans-serif';
        } else if (selectedFont === 'times-new-roman') {
            transcriptContainer.style.fontFamily = '"Times New Roman", sans-serif';
        } else if (selectedFont === 'arial') {
            transcriptContainer.style.fontFamily = '"Arial", sans-serif';
        }
    });

    // Change text size
    increaseFontSizeButton.addEventListener('click', () => {
        currentFontSize += 2;
        transcriptContainer.style.fontSize = currentFontSize + 'px';
    });

    decreaseFontSizeButton.addEventListener('click', () => {
        currentFontSize = Math.max(12, currentFontSize - 2); // Prevent font size from becoming too small
        transcriptContainer.style.fontSize = currentFontSize + 'px';
    });

    // Change text color
    fontColorSelector.addEventListener('input', (event) => {
        const selectedColor = event.target.value;
        transcriptContainer.style.color = selectedColor;
    });

    // Dark mode option
    invertColorButton.addEventListener('click', () => {
        if (isInverted) {
            transcriptContainer.style.backgroundColor = '#ffffff';
            transcriptContainer.style.color = '#000000';
        } else {
            transcriptContainer.style.backgroundColor = '#000000';
            transcriptContainer.style.color = '#ffffff';
        }
        isInverted = !isInverted;
    });
});
