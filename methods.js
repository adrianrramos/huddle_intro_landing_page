// returns an HTML element of any specified kind (default=div)
const createElement = (id = '', className = '', tag = 'div', text = '') => {
    let element = document.createElement(tag);

    id && element.setAttribute('id', id);
    className && element.setAttribute('class', className);
    text && (() => element.innerText = text)();

    return element;
};

// map children to a parent 
const mapChildren = (parent, childrenArr) => {
    if(typeof parent === 'string' || parent instanceof String){
        parent = document.getElementById(parent);
    };
    return childrenArr.map(child => {
        if(typeof child === 'string' || child instanceof String){
            child = createElement(child)
        }
        // Takes array values and maps them to createElement() paramters
        if(child instanceof Array){
            child = createElement.apply(null, child);
        }
        return parent.appendChild(child)
    });
};

// create a child element inside a given parent
const createChildElement = (parentId, childElement) => {
    const parent = document.getElementById(parentId);
    parent.appendChild(childElement);
};

// Maps a single child to all elements of given HTML class
const mapChildToClass = (htmlClass, childAttr) => {
    foundElements = document.getElementsByClassName(htmlClass);
    let classChild = null;

    for(let i = 0; i < foundElements.length; i++){
        // we will need to check arrays before creating child element
        childAttr instanceof Array ? classChild = createElement.apply(null, childAttr) : classChild = createElement(childAttr);
        foundElements[i].appendChild(classChild);
    }
};
