import React from 'react';
import StoryOne from '../../Story/components/StoryOne';
import Divider from '../../../components/Divider';
import Section from '../../../components/Section';
import Container from '../../../components/Container';
import Columns from '../../../components/Columns';
import Column from '../../../components/Column';
import SubtitleLinked from '../../../components/SubtitleLinked';
import MediaObject from '../../../components/MediaObject';
import MediaObjectImage from '../../../components/MediaObjectImage';

function PanelSix({
  primaryStories = [],
  secondaryStories = [],
  primaryStoriesLength = primaryStories.length || 5,
  secondaryStoriesLength = secondaryStories.length || 3,
  ...props
}) {
  const _primaryStories = primaryStories.slice(0, primaryStoriesLength);
  const _secondaryStories = secondaryStories.slice(0, secondaryStoriesLength);

  return (
    <>
      <Section {...props}>
        <Container>
          <Columns>
            {_primaryStories.map((story, i) => (
              <>
                <Column>
                  <StoryOne {...story} />
                </Column>

                {secondaryStoriesLength && (
                  <Divider
                    vertical={i < 5 ? true : false}
                    style={{ padding: '1rem 0' }}
                  />
                )}
              </>
            ))}
            <Column>
              {_secondaryStories.map(({ url, title, ...story }, i) => (
                <>
                  {url && (
                    <MediaObject url={url} showImage={false} {...story}>
                      {title}
                    </MediaObject>
                  )}
                </>
              ))}
            </Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
}

export default PanelSix;
