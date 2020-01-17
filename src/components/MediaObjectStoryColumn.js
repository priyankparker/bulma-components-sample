import React from "react";
import MediaObjectStory from "./MediaObjectStory";
import Column from "./Column";

function MediaObjectStoryColumn({
  length = 0,
  stories = []
}) {
  return (
    <Column className='is-6'>
      {stories.map((story, i) => (
        <MediaObjectStory index={i} length={length} {...story} />
      ))}
    </Column>
  );
}

export default MediaObjectStoryColumn;
