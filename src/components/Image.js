import React from 'react';

function Image({
    src = null,
    size = '128x128',
    alt = 'alt',
    className = '',
    imgStyle = {},
    style = {},
    overflow = 'hidden',
    ...props
}) {
    return (
        <>
            {src && (
                <figure
                    className={`image is-${size} ${className}`}
                    style={{
                        overflow,
                        ...style,
                    }}
                    {...props}
                >
                    <img src={src} alt={alt} style={{ ...imgStyle }} />
                </figure>
            )}
        </>
    );
}

export default Image;
