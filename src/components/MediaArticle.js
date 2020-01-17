import React from "react";

function MediaArticle({
  children = false,
  className = "",
  style = {},
  reverse = false,
  ...props
}) {
  let mediaObjectClasses = ["media-left", "media-content", "media-right"];

//   children = !reverse
//     ? children
//     : children
//         .reverse()
//         .map((Component, i) => <Component className={mediaObjectClasses[i]} />);

  return (
    <>
      {children && (
        <article className={`media ${className}`} {...props}>
          {children}
        </article>
      )}
    </>
  );
}

export default MediaArticle;
