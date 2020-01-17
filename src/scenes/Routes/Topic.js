import React, { Suspense } from 'react';
import Title, {HomeTitle} from '../../components/Title';
import PageOne from '../../components/Page';
import PanelNine from '../NewsPanels/components/PanelNine';
import Columns, { ColumnsVertical } from '../../components/Columns';
import Column from '../../components/Column';
import stories from '../../data/home-top-stories-jan-7-2020';
import { splitMediaObjects } from '../Utils/utils';
import Image from '../../components/Image';
import MobileDivider from '../../components/MobileDivider';
import { tagItems } from '../Utils/utils';
import PanelSix from '../NewsPanels/components/PanelSix';
import Content from '../../components/Content';

function Topic({ path, primaryColor, isMobile, items = stories.results, itemLimits = [1, 1, 3, 2, 10, 10] }) {
  const itemsList = splitMediaObjects(itemLimits, items);

  const {
    primary,
    secondary,
    tertiary,
    quaternary,
    quinary,
    senary,
  } = tagItems(itemsList);

  return (
    <PageOne primaryColor={primaryColor}>
      <PanelNine primaryColor={primaryColor} isMobile={isMobile}>
        <ColumnsVertical>
        <Column>
        <HomeTitle primaryColor={primaryColor}>
          {path}
        </HomeTitle>
        </Column>
          <Column>
            <Columns>
              <Column className="is-5">
                {primary ? (
                  primary.map(item => (
                    <Columns
                      className="is-block is-gapless"
                      style={{
                        borderTop: '1px solid ' + primaryColor,
                        padding: '0.25rem',
                      }}
                    >
                      <Column>
                        {item?.multimedia?.[4]?.url ? (
                          <Image
                            src={item.multimedia[4].url}
                            alt={item.title}
                            size="2by1"
                            imgStyle={{
                              height: 'auto',
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </Column>
                      <Column>
                        <TopicTitle
                          size="6"
                          as="h6"
                          style={{
                            paddingTop: '0.5rem',
                          }}
                        >
                          {item.title}
                        </TopicTitle>
                      </Column>
                    </Columns>
                  ))
                ) : (
                  <></>
                )}
              </Column>
              <TopicDivider vertical={true} />
              <Column>
                <Columns className="is-block">
                  <Column>
                    {secondary.map(item => (
                      <>
                        <Image
                          src={
                            item.multimedia[4].url
                              ? item.multimedia[4].url
                              : 'https://bulma.io/images/placeholders/640x480.png'
                          }
                          size="fullwidth"
                          imgStyle={{
                            objectFit: 'cover',
                            height: '34rem'
                          }}
                        />
                        <Content>
                          <TopicTitle
                            size="5"
                            as="h5"
                            style={{
                              paddingTop: '0.5rem',
                            }}
                          >
                            {item.title}
                          </TopicTitle>
                        </Content>
                      </>
                    ))}
                  </Column>
                  <Column>
                    <PanelSix
                      primaryStories={tertiary}
                      secondaryStories={quaternary}
                      style={{
                        borderTop: '1px solid lightgrey',
                      }}
                    />
                  </Column>
                </Columns>
              </Column>
            </Columns>
          </Column>
          <TopicDivider />
          <Column>
            <Columns className="s-block">
              <Column className="is-6">
                {quinary && quinary.map(item => <MediaObject item={item} />)}
              </Column>

              <TopicDivider vertical={true} />
              <Column className="is-6">
                {senary &&
                  senary.map(item => (
                    <Column>
                      <MediaObject item={item} />
                    </Column>
                  ))}
              </Column>
            </Columns>
          </Column>
        </ColumnsVertical>
      </PanelNine>
    </PageOne>
  );
}

function MediaObject({ showAbstract = false, item }) {
  return (
    <article class="media">
      <figure className="media-left">
        <p
          className="image is-128x128"
          style={{
            height: '80px',
          }}
        >
          <img
            src={
              item?.multimedia?.[4]?.url ??
              'https://bulma.io/images/placeholders/128x128.png'
            }
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{item.title}</strong>
            {item.byline && item.showAbstract ? (
              <small style={{ paddingLeft: '0.5rem', fontSize: '0.8rem' }}>
                {item.byline}
              </small>
            ) : (
              <>
                <br />
                {item.byline}
              </>
            )}

            {(item.showAbstract && item.abstract) || <></>}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a className="level-item">
              <div className="tags">
                {[
                  // ...item.org_facet,
                  ...item.per_facet,
                  // ...item.geo_facet
                ].map(tag => (
                  <div className="tag">{tag}</div>
                ))}
              </div>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
}

function TopicTitle({ children, size = '7', as = 'h6', ...props }) {
  return (
    <Title
      className={'is-' + size}
      as={as}
      style={{ paddingTop: '0.25rem' }}
      {...props}
    >
      {children}
    </Title>
  );
}

function TopicDivider({ vertical = false }) {
  return (
    <MobileDivider
      vertical={vertical}
      className="is-divider-vertical-videos"
      noPadding={true}
    />
  );
}

export default Topic;
