import React from "react";
import Section from "../../../components/Section";
import Container from "../../../components/Container";
import Columns from "../../../components/Columns";
import Column from "../../../components/Column";
import Divider from "../../../components/Divider";
import StoryRow from "../../../components/StoryRow";
import PanelTitle from "../../../components/PanelTitle";
import StoryOne from "../../Story/components/StoryOne";

function PanelThree({
  className = "",
  primaryStories = [],
  secondaryStories = []
}) {
  const primaryStoriesOne = primaryStories.slice(0, 3);
  const primaryStoriesTwo = primaryStories.slice(3, 6);

  const [secondaryStoriesOne, secondaryStoriesTwo] = secondaryStories;

  return (
    <>
      {primaryStoriesOne.length > 0 && primaryStoriesTwo.length > 0 && (
        <Section className="has-background-white-ter large-padding-bottom">
          <Container>
            <Columns>
              <Column className="is-9">
                <PanelTitle>MOVIES</PanelTitle>
                <StoryRow>{primaryStoriesOne}</StoryRow>
                <Divider />
                <StoryRow>{primaryStoriesTwo}</StoryRow>
              </Column>
              <Divider
                vertical={true}
                className='is-padding-0d75'
              />
              <Column className="is-3">
              <PanelTitle>ARTS</PanelTitle>
                <Columns className="is-block">
                  <Column>
                    <StoryOne {...secondaryStoriesOne} />
                  </Column>
                  <Divider />
                  <Column>
                    <StoryOne {...secondaryStoriesTwo} />
                  </Column>
                </Columns>
              </Column>
            </Columns>
          </Container>
        </Section>
      )}
    </>
  );
}

export default PanelThree;
