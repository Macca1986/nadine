const messages = [
    "Your smile brightens my day.",
    "The way you laugh is contagious.",
    "I miss holding your hand.",
    "The little notes you used to leave.",
    "Your voice makes everything better.",
    "The adventures we had together.",
    "How you always knew what to say.",
    "The way you care about others so deeply."
];

let currentIndex = 0;

const card = document.getElementById('card');
const content = document.getElementById('content');

card.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % messages.length;
    content.textContent = messages[currentIndex];
});
