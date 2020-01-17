import React from "react";
import MediaObject from "./MediaObject";
import Divider from "./Divider";

function MediaObjectStory({
  title = false,
  byline = false,
  updated_date: updatedDate,
  url = "#",
  multimedia = {},
  length = 0,
  index: i
}) {
  return (
    <>
      {length > 0 && multimedia && multimedia[3] && multimedia[3].url && (
        <MediaObject
          url={multimedia[3].url}
          byline={byline}
          bylineClassName="is-italic"
          imageSize="fullwidth"
        >
          {title}
        </MediaObject>
      )}
      {i !== length - 1 && (
        <Divider
          style={{
            padding: "0.5rem",
            margin: "0.2rem"
          }}
        />
      )}
    </>
  );
}

export default MediaObjectStory;
