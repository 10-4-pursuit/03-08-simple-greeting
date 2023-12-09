import React from 'react'

// SimpleGreeting function component
const SimpleGreeting = () => {
// greeting variable declared and assigned a string
    const greeting = 'Hello, welcome to React!'

// return statement with greeting variable
    return (
        // greeting variable wrapped in h1 tag
        <div>
             <h1>{greeting}</h1>
        </div>
       
    )
}

export default SimpleGreeting