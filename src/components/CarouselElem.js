import React from 'react';

function CarouselChild({ children, className = '', style = '', ...props }) {
    return (
        <>
            {children && (
                <div className={className} style={{ ...style }} {...props}>
                    {children}
                </div>
            )}
        </>
    );
}
export default CarouselChild;
