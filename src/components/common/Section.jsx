import React from 'react';

const Section = ({ children, className = '', id = '', background = 'white' }) => {
    const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';

    return (
        <section id={id} className={`section ${bgClass} ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
