// HTML BODY
document.body.appendChild(createElement('logo-container'));

mapChildren('logo-container', [
    ['logo', null, 'img']
]);
document.getElementById('logo').setAttribute('src', "../images/logo.svg");

// TOP CONTAINER => STARTS HERE => 
document.body.appendChild(createElement('top-container'))

// =================
// LEFT CONTAINER => TOP LEVEL ELEM
// =================
createChildElement('top-container', createElement('left-container'));

mapChildren('left-container', [
    'image-container'
]);

createChildElement('image-container', createElement('mockup', null, 'img'));
document.getElementById('mockup').setAttribute('src', "../images/illustration-mockups.svg");

// =================
// RIGHT CONTAINER => TOP LEVEL ELEM
// =================
createChildElement('top-container', createElement('right-container'));

mapChildren('right-container', [
    'text-container',
    'button-container',
]);

// -----------------
// TEXT CONTAINER
// -----------------
mapChildren('text-container', [
    'title-box',
    'description-box'
]);

createChildElement('title-box', createElement('title', null, 'h1'));
document.getElementById('title').innerText = 'Build The Community Your Fans Will Love';

createChildElement('description-box', createElement('description', null, 'p'));
document.getElementById('description').innerText = 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.';

// -----------------
// BUTTON CONTAINER
// -----------------
createChildElement('button-container', createElement('register-button', null, 'button'));
document.getElementById('register-button').innerText = 'Register';
// TOP CONTAINER ==> ENDS HERE. <==


// ==================
// SOCIALS CONTAINER
// ==================
document.body.appendChild(createElement('socials-container'));

const icons = [
    "fa-facebook-f",
    "fa-twitter",
    "fa-instagram"
]

mapChildren('socials-container', [
    [null, 'social-borders'],
    [null, 'social-borders'],
    [null, 'social-borders'],
]);

mapChildToClass('social-borders', [null, 'social-logos']);
mapChildToClass('social-logos', [null, 'media-logo fab', 'i']);

const mediaLogos = document.getElementsByClassName('media-logo');
for(let i = 0; i < mediaLogos.length; i++) {
    mediaLogos[i].classList.add(icons[i]);
};

// FOOTER => TOP LEVEL TAG

document.body.appendChild(createElement('page-footer', null, 'footer'));
createChildElement('page-footer', createElement('attribution', null, 'p'));
document.getElementById('attribution').innerHTML = `Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Adrian Ramos</a>.`;