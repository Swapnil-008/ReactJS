import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function myApp()
{
    const reactElement = {
        type: 'a',
        props: {
            href: 'https://google.com',
            target: '_blank'
        },
        Children: 'Click me to visit google'
    }
}
// if even we call myApp function from render function still it will not create an element because in customReact we specified these are the  properties of an element but render is inbuilt function and it expects some differnt type of parameters that's why it will not work here
//jsx defines javascript with html

//Creating an element as react expects
const reactElement = React.createElement(
    'a', // expecting type
    {href: 'https://google.com', target: '_blank'},  //tags
    'Click me to visit google...'  //text
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
function myApp2()
{
    const anotherElement = (
        <a href="https://google.com" target='_blank'>Visit Google</a>
    )
    return anotherElement
}
ReactDom.createRoot(document.getElementById('root')).render(
    // <>
    // {/* <Chai />
    // <App /> */}
    // {/* myApp()   it will not work*/}
    // </>
    // anotherElement // this will work definately, because anotherElement fullfills the required syntax
    reactElement
    // myApp2() // This will also works
)