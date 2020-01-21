import React, { Suspense } from 'react';
import Title, { HomeTitle } from '../../components/Title';
import PageOne from '../../components/Page';
import PanelNine from '../NewsPanels/components/PanelNine';
import Columns, { ColumnsVertical } from '../../components/Columns';
import Column from '../../components/Column';
import stories from '../../data/home-top-stories-jan-7-2020';
import {
  splitMediaObjects,
  useClientRect,
  sum,
  range,
  isNumber,
  isTruthy,
} from '../Utils/utils';
import Image from '../../components/Image';
import MobileDivider from '../../components/MobileDivider';
import { tagItems } from '../Utils/utils';
import PanelSix from '../NewsPanels/components/PanelSix';
import Content from '../../components/Content';
import Level from '../../components/Level';
import Tags from '../../components/Tags';
import PageNumbers from '../../components/PageNumbers';

function Topic({
  path,
  primaryColor,
  items = typeof stories !== 'undefined' &&
  typeof stories.results !== 'undefined' &&
  Array.isArray(stories.results)
    ? stories.results
    : [],
  firstPageLimits = [3, 1, 3, 2, 5, 5],
  otherPageLimits = [0, 0, 0, 0, 5, 5],
  id = null,
}) {
  const _id = id ?? '1';
  const isFirstPage = id === null || id === '1';
  const _itemLimits = isFirstPage ? firstPageLimits : otherPageLimits;

  const totalItems = items.length;
  const totalPageItems = sum(_itemLimits);

  let _items;
  let start;

  for (let i = 0; i < parseInt(_id); i++) {
    start =
      i === 0
        ? 0
        : i === 1
        ? sum(firstPageLimits)
        : start + sum(otherPageLimits);
    _items = items.slice(start);
    // prev = prev + sliceLength;
  }

  const itemsList = splitMediaObjects(_itemLimits, _items);

  const lastPageNumber = getLastPageNumber(
    totalItems,
    sum(firstPageLimits),
    sum(otherPageLimits)
  );

  const {
    primary,
    secondary,
    tertiary,
    quaternary,
    quinary,
    senary,
  } = tagItems(itemsList);

  const getTitle = path =>
    path
      .split('/')
      .filter(isTruthy)
      .shift();

  return (
    <PageOne primaryColor={primaryColor}>
      <PanelNine>
        <ColumnsVertical>
          {isFirstPage && (
            <>
              <Column>
                <HomeTitle primaryColor={primaryColor}>
                  {getTitle(path)}
                </HomeTitle>
              </Column>
              <Column>
                <Columns>
                  <Column className="is-5">
                    {primary ? (
                      primary.map((item, i) => (
                        <Columns
                          className="is-block is-gapless"
                          style={{
                            borderTop: '1px solid ' + primaryColor,
                            padding: '0.25rem',
                          }}
                          key={i}
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
                                height: '34rem',
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
            </>
          )}
          <TopicDivider />
          <Column>
            <Columns>
              <Column className="is-6">
                {quinary && quinary.map(item => <MediaObject item={item} />)}
              </Column>

              <TopicDivider vertical={true} />
              <Column className="is-6">
                {senary && senary.map(item => <MediaObject item={item} />)}
              </Column>
            </Columns>
          </Column>
        </ColumnsVertical>
      </PanelNine>
      <PageNumbers
        size={4}
        length={totalItems}
        current={_id}
        lastPage={lastPageNumber}
        linkPrefix="/news/"
      />
    </PageOne>
  );
}

function MediaObject({ showAbstract = false, item, time = null }) {
  return (
    <article className="media">
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
        <MediaObjectTags>{item.per_facet}</MediaObjectTags>
      </div>
    </article>
  );
}

function MediaObjectTags({ children, className = '', ...props }) {
  const [navRect, navRef] = useClientRect();
  return (
    <nav ref={navRef} className={`level is-mobile ${className}`} {...props}>
      <div className="level-left">
        <div className="tags">
          {children.map(
            (child, i) =>
              (navRect && (
                <Tag key={i} parentRect={navRect}>
                  {child}
                </Tag>
              )) || <Tag key={i}>{child}</Tag>
          )}
        </div>
      </div>
    </nav>
  );
}

function Tag({ children, parentRect = null, className = '', ...props }) {
  const [rect, ref] = useClientRect(
    parentRect?.left && parentRect?.width
      ? [parentRect.left, parentRect.width]
      : [] //TODO: array length should be 2 always, passing [null,null] doesn't fix it
  ); //TODO: doesn't react to attribute changes in parentRect

  return (
    <div
      ref={ref}
      className={`tag ${
        rect !== null &&
        parentRect !== null &&
        rect.left + rect.width > parentRect.left + parentRect.width
          ? ' is-hidden'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
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

function getLastPageNumber(totalLength, firstPageLength, otherPageLength) {
  if (
    !(
      Number.isSafeInteger(totalLength) ||
      Number.isSafeInteger(firstPageLength) ||
      Number.isSafeInteger(otherPageLength)
    )
  ) {
    return;
  }
  let result = totalLength - firstPageLength;
  if (result <= 0) {
    return 1;
  }

  const lastPage = parseInt(Math.ceil(result / otherPageLength)) + 1;

  return lastPage;
}

export default Topic;
