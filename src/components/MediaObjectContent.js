import React from "react";

function MediaObjectContent({ children = false, className = 'media-content', style = {}, ...props }) {
  return (
    <>
      {children && (
        <div className={className} style={{...style}} {...props}>
          <div className="content">
              {children}
          </div>
        </div>
      )}
    </>
  )
}

export default MediaObjectContent
