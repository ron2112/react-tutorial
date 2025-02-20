function customRender() {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // mainContainer.appendChild(domElement);\

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
        if(prop === 'children') {
            continue;
        }
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me to go to Google',
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)