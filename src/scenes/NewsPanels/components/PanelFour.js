import React from "react";
import Columns from "../../../components/Columns";
import Column from "../../../components/Column";
import StoryOne from "../../Story/components/StoryOne";
import MediaObject from "../../../components/MediaObject";
import Subtitle from "../../../components/Subtitle";
import PanelTitle from "../../../components/PanelTitle";
import SubtitleLinked from "../../../components/SubtitleLinked";
import Section from "../../../components/Section";
import Container from "../../../components/Container";
import MidDivider from "../../../components/MidDivider";
import Divider from "../../../components/Divider";

function PanelFour({
  className = "",
  stories = [],
  primaryStories = [],
  secondaryStories = [],
  tertiaryStories = [],
  primaryStoriesLength = primaryStories.length || 2,
  secondaryStoriesLength = secondaryStories.length || 7,
  tertiaryStoriesLength = tertiaryStories.length || 9
}) {
  const _primaryStories =
    primaryStories.length === 0
      ? stories.slice(0, primaryStoriesLength)
      : primaryStories;

  const _secondaryStories =
    secondaryStories.length === 0
      ? stories.slice(
          primaryStoriesLength,
          primaryStoriesLength + secondaryStoriesLength
        )
      : secondaryStories;

  const _tertiaryStories =
    tertiaryStories.length === 0
      ? stories.slice(
          primaryStoriesLength + secondaryStoriesLength,
          primaryStoriesLength + secondaryStoriesLength + tertiaryStoriesLength
        )
      : tertiaryStories;

  return (
    <>
    <Section className="has-background-white-ter" style={{
      'paddingBottom': '0'
    }}>

        <Container className=" ">

    < PanelTitle>
          BUSINESS
          </ PanelTitle>
        </Container>
        </Section>
      <Section className="has-background-white-ter" style={{
      'paddingTop': '0',
    }}>>
        <Container className=" ">

          <Columns>
          
            <Column className="is-7">
              {_primaryStories.map((story, i) => (
                <>
                  <StoryOne imgStyle={{
                    height: '15rem'
                  }} {...story} />
                  <MidDivider index={i} length={_primaryStories.length} />
                </>
              ))}
            </Column>
            <Divider
              className='is-padding-0d5'
              vertical={true}
            />
            <Column className="is-5">
              {// _secondaryStories.map(({ multimedia : [ , , , , {url = ''} = {}] = [] , ...story} = {}) => (
              _secondaryStories.map(({ title, ...story}, i ) => (
                <MediaObject
                  bylineClassName="is-italic"
                  imageSize="64x64"
                  reverse={true}
                  imageLink={story?.multimedia?.[4]?.url}
                  imageClassName={i > 4 ? 'is-hidden-mobile' : ''}
                  {...story}
                >
                  {title}
                  </MediaObject>
              ))}
            </Column>
            <Divider
              className='is-padding-0d5'
              vertical={true}
            />
            {/* <Column className="is-3">
              {_tertiaryStories.map(({ title, ...story }, i) => (
                <>
                  <SubtitleLinked {...story}>{title}</SubtitleLinked>
                  <MidDivider
                    index={i}
                    length={_tertiaryStories.length}
                    style={{
                      padding: "0.5rem",
                      margin: "0.2rem"
                    }}
                  />
                </>
              ))}
            </Column> */}
          </Columns>
        </Container>
      </Section>
    </>
  );
}

export default PanelFour;
