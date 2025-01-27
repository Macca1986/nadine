const messages = [
    "Waking up in the night and reaching over to feel your incredible warmth.",
    "Cracking enough eggs for both of us every morning.",
    "Holding your hand as we walk into the gym, feeling so proud to be beside you.",
    "Going to appointments with you and making sure you're okay.",
    "Snuggling on the sofa, hardly watching whatever we put on the TV.",
    "The way it feels when we are body to body, pulling you as close as I can.",
    "Kissing your beautiful lips with my hand in your hair.",
    "Seeing you in Betty Boop mode after you've washed your hair.",
    "Hearing you reply with 'I love you too' in the middle of the night.",
    "Dancing with you on a date night, even though I'm not great at it.",
    "Watching you put on a sexy belly-dancing show just for me.",
    "Hearing you say that I am 'Your everything'.",
    "Listening to your funny stories about your colleagues.",
    "Being introduced to Egyptian foods and culture.",
    "Trying to learn Arabic words from you, and failing miserably.",
    "Taking photos on a night out together (they make me so proud).",
    "Having you turn me on so easily, often in public, and you checking it...",
    "My phone going off with literally any message from you.",
    "Talking about our future, especially about Adam and Leyla.",
    "Having you squeeze my pimples, even if I'm not sure there are any.",
    "Knowing that you're in the next room while I work on the computer",
    "Making you a coffee and trying to get the coffee to milk ratio perfect.",
    "Learning about your family and friends, hoping they can also be part of my life.",
    "Giving your sexy booty a tap in public without thinking, then you saying 'Haib'.",
    "Getting mirror selfies of you in store fitting rooms, you're always so beautiful.",
    "Exploring new places with you, even Turkey ;).",
    "Looking deeply into your big brown eyes and feeling the love reflected in them.",
    "Taking care of you when you're not feeling well.",
    "The way you make me feel desired and sexy and loved always.",
    "Planning our next trip together, and being excited about the new memories we will share.",
    "Having you walk up the stairs ahead of me, so I can watch and tap your booty.",
    "Helping you get your weights at the gym and put them on the bar.",
    "The way you sometimes try to pull faces that would 'scare' me, but they are hilarious.",
    "Listening to your advice on anything in my life, such as how to deal with colleagues.",
    "Anticipating your arrival at my house, looking out from the laundry so I know when to come and open your car door for you."
];

let currentIndex = 0;

const card = document.getElementById('card');
const content = document.getElementById('content');

card.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % messages.length;
    content.textContent = messages[currentIndex];
});
