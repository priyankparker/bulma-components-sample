import React from 'react';

function Video({
    className = '',
    style = {},
    src,
    height = '640',
    width = '480',
    iframe=false,
    ...props
}) {
    return (
        <>
            {src && !iframe ? (
                <video width={width} height={height} controls {...style} {...props}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ): <iframe src={src} width={width} height={height} {...style}/>}
        </>
    );
}

export default Video;
