import React from 'react';

function iFrame({
    className = '',
    height = '100%',
    width = '100%',
    style = {},
    src = false,
    ...props
}) {
    return (
        <>
            {src && (
                <iframe
                    src={src}
                    width={width}
                    height={height}
                    className={className}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen={'allowfullscreen'}
                    style={{ ...style }}
                    {...props}
                ></iframe>
            )}
            {/* <Component width={width} height={height} className={className} style={{}} {...props} /> */}
        </>
    );
}

export default iFrame;
