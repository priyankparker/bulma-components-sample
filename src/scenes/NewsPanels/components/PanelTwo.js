import React from "react";
import Section from "../../../components/Section";
import Divider from "../../../components/Divider";
import Column from "../../../components/Column";
import Columns from "../../../components/Columns";
import Link from "../../../components/Link";
import Container from "../../../components/Container";
import Subtitle from "../../../components/Subtitle";
import Image from "../../../components/Image";
import MediaObject from "../../../components/MediaObject";
import PanelTitle from "../../../components/PanelTitle";
import MediaObjectStoryColumn from "../../../components/MediaObjectStoryColumn";
import Byline from "../../../components/Byline";

function PanelTwo({
  className = "",
  primaryStories = [],
  secondaryStories = [],
  tertiaryStories = []
}) {
  const primaryWorldStoriesOne = primaryStories.slice(0, 1);
  const primaryWorldStoriesTwo = primaryStories.slice(1);

  return (
    <>
      <Section className="has-background-white-ter large-padding-bottom">
        <Container className=' '>
          
        <Columns>
          {/* < PanelTitle columnSize="9">
          WORLD
          </ PanelTitle> */}
          {/* < PanelTitle columnSize="3" style={{
            // marginLeft: '1rem'
          }}>
            SPORTS
          </ PanelTitle> */}
        </Columns>
        </Container>
      </Section>
      <Section
        className={`has-background-white-ter ${className}`}
        style={{
          paddingTop: "0.8rem"
        }}
      >
        <Container>
        <Columns>
          <Column className="is-9">
        < PanelTitle>
          WORLD
          </ PanelTitle>
            <Columns>
              <Column className="is-8">
                {primaryWorldStoriesOne.map(
                  (
                    {
                      title,
                      byline,
                      updated_date: updatedDate,
                      url,
                      multimedia
                    },
                    i
                  ) => (
                    <>
                      {multimedia && multimedia[4] && multimedia[4].url && (
                        <Link to={url}>
                          <Image
                            src={multimedia[4].url}
                            //default is not actaully a size and can be replaced with any word.
                            // It is just meant tot override the default value set at the component level.
                            // This allows the image to expand fully inside the container with the ORIGINAL ASPECT RATIO.
                            size="fullwidth"
                            className="fitImage"
                          />
                        </Link>
                      )}
                      <Subtitle
                        className="is-5"
                        style={{
                          paddingTop: "0.5rem"
                        }}
                      >
                        <Link to={url} className="links">
                          {title}
                        </Link>
                      </Subtitle>
                      <Byline newLine={false}>{byline}</Byline>
                      {i !== primaryWorldStoriesOne.length - 1 && <Divider />}
                    </>
                  )
                )}
              </Column>
              <Divider
              className='is-padding-0d5'
                vertical={true}
              />
              <Column className="">
                {primaryWorldStoriesTwo.map(
                  (
                    {
                      title,
                      byline,
                      updated_date: updatedDate,
                      url,
                      multimedia
                    },
                    i
                  ) => (
                    <>
                      {multimedia && multimedia[4] && multimedia[4].url && (
                        <Link to={url}>
                          <Image
                            src={multimedia[4].url}
                            size="fullwidth"
                            className="fitImage"
                            imgStyle={{
                              objectFit: 'cover',
                              height: '10rem'
                            }}
                          />
                        </Link>
                      )}
                      <Subtitle
                        className="is-6"
                        style={{
                          marginTop: "0.4rem",
                          marginBottom: "0.5rem"
                        }}
                      >
                        <Link to={url} className="links">
                          {title}
                        </Link>
                      </Subtitle>
                      <Byline newLine={false}>{byline}</Byline>
                      {i !== primaryWorldStoriesTwo.length - 1 && (
                        <Divider
                          style={{
                            padding: "0.5rem",
                            margin: "0.2rem"
                          }}
                        />
                      )}
                    </>
                  )
                )}
              </Column>
            </Columns>
            <Divider
              style={{
                padding: "0.2rem",
                margin: "0.2rem"
              }}
            />
            <Column>
              <Columns>
                  <MediaObjectStoryColumn
                    stories={secondaryStories.slice(0, 2)}
                    length={2}
                    
                  />
                  <MediaObjectStoryColumn
                    stories={secondaryStories.slice(2)}
                    length={2}
                  />
                  {/* {secondaryStories.slice(0, 2).map((story, i) => (
                    <>
                      <MediaObjectStory
                        index={i}
                        length={2}
                        {...story}
                      />
                    </>
                  ))} */}
              </Columns>
            </Column>
          </Column>
          <Divider
            className='is-padding-0d5'
            vertical={true}
          />
          <Column className="is-3">
          < PanelTitle >
            SPORTS
          </ PanelTitle>
            {tertiaryStories.map(
              (
                { title, byline, updated_date: updatedDate, url, multimedia },
                i
              ) => (
                <>
                  {multimedia && multimedia[3] && multimedia[3].url && (
                    <MediaObject
                      url={multimedia[3].url}
                      title={title}
                      bylineClassName="is-italic"
                      imageSize="64x64"
                    >
                      {title}
                    </MediaObject>
                  )}
                  {
                    i !== tertiaryStories.length - 1 &&
                    <Divider
                      style={{
                        margin: '1rem 0'
                      }}
                    />
                  }
                </>
              )
            )}
          </Column>
        </Columns>
        </Container>
      </Section>
    </>
  );
}

export default PanelTwo;
