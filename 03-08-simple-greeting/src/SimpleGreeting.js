import React from 'react';

const SimpleGreeting = () => {
    const greetingStyle = {
        backgroundColor: 'black',
        color: 'coral',
        padding: '20px',
    };

    return (
        <div style={greetingStyle}>
            Hello, welcome to React!
        </div>
    );
}

export default SimpleGreeting;
