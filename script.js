// 1. Create an array of emoji codes
const emojiCodes = [
    128512,
    128514,
    128525,
    128526,
    128540,
    128546,
    128557,
    128077,
    128293,
    128640,
    129409,
    129412
];


// 2. Select the gallery

const gallery = document.getElementById("emoji-gallery");


// 3. Create the showEmojis function

function showEmojis(count = emojiCodes.length) {

    // Clear the existing gallery

    gallery.textContent = "";

    // Create a card for each emoji

    for (let index = 0; index < count; index++) {

        const code = emojiCodes[index];

        const card = document.createElement("div");
        card.classList.add("emoji-card");

        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = String.fromCodePoint(code);

        const emojiCode = document.createElement("p");
        emojiCode.classList.add("emoji-code");
        emojiCode.textContent = code;

        card.appendChild(emoji);
        card.appendChild(emojiCode);

        gallery.appendChild(card);
    }
}


// 4. Display all emojis when the page loads

showEmojis();