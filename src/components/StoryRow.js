import React from "react";
import StoryOne from "../scenes/Story/components/StoryOne";
import Column from "./Column";
import Columns from "./Columns";

function StoryRow({ children = [], className = "", ...props }) {
  return (
    <Columns>
      {children.map(story => (
        <Column>
          <StoryOne {...story} />
        </Column>
  ))}
    </Columns>
  );
}

export default StoryRow;
