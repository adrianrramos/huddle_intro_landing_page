// =================
// LEFT CONTAINER => TOP LEVEL ELEM
// =================
document.body.appendChild(createElement('left-container'));

mapChildren('left-container', [
    'logo-container',
    'image-container'
]);

createChildElement('logo-container', createElement('logo', null, 'img'));
createChildElement('image-container', createElement('mockup', null, 'img'));


// =================
// RIGHT CONTAINER => TOP LEVEL ELEM
// =================
document.body.appendChild(createElement('right-container'));

mapChildren('right-container', [
    'text-container',
    'button-container',
    'socials-container'
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

// -----------------
// SOCIALS CONTAINER
// -----------------

mapChildren('socials-container', [
    [null, 'social-borders'],
    [null, 'social-borders'],
    [null, 'social-borders'],
]);

mapChildToClass('social-borders', [null, 'social-logos']);
mapChildToClass('social-logos', ['media-logo', null, 'i']);


// FOOTER => TOP LEVEL ELEM

document.body.appendChild(createElement('page-footer', null, 'footer'));
createChildElement('page-footer', createElement('attribution', null, 'p'));
document.getElementById('attribution').innerHTML = `Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Adrian Ramos</a>.`