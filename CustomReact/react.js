// const { Children } = require("react")

function customRender(reactElement, root)
{
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // Instead of setting the attributes manually we can apply the loop also
    for (const prop in reactElement.props)
    {
        //If we set the 'Children' as a property also
        if(prop === 'Children')
        {
            continue  
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    root.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const root = document.getElementById('root')

customRender(reactElement, root)