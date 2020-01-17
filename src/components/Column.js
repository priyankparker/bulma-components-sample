import React from 'react';

function Column({ children, className = '', style = {}, ...props }) {
    return (
        <>
            {children && (
                <div
                    className={`column ${className}`}
                    style={{ ...style }}
                    {...props}
                >
                    {children}
                </div>
            )}
        </>
    );
}

export default Column;
