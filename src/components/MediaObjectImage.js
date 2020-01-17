import React from "react";

function MediaObjectImage({
  size = "64x64",
  imageLink = "#",
  className = "media-left",
  imageStyle = {},
  imageClassName = '',
  ...props
}) {
  return (
    <>
    {
      imageLink &&
      <figure className={className} {...props}>
        <p className={`image overflow-hidden is-${size}`}>
          <img src={imageLink} className={imageClassName} style={{
            objectFit: 'cover',
            ...imageStyle
          }}/>
        </p>
      </figure>
    }
    </>
  );
}

export default MediaObjectImage;
