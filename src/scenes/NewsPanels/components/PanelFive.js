import React from 'react';
import Columns from '../../../components/Columns';
import Column from '../../../components/Column';
import StoryOne from '../../Story/components/StoryOne';
import MediaObject from '../../../components/MediaObject';
import Subtitle from '../../../components/Subtitle';
import PanelTitle from '../../../components/PanelTitle';
import SubtitleLinked from '../../../components/SubtitleLinked';
import Section from '../../../components/Section';
import Container from '../../../components/Container';
import MidDivider from '../../../components/MidDivider';
import Divider from '../../../components/Divider';
import MediaObjectImage from '../../../components/MediaObjectImage';
import Link from '../../../components/Link';
import Image from '../../../components/Image';
import { isFirst, isLast } from '../../Utils/utils.js';

function PanelFive({
    className = '',
    stories = [],
    primaryStories = [],
    secondaryStories = [],
    tertiaryStories = [],
    quaternaryStories = [],
    primaryStoriesLength = primaryStories.length || 2,
    secondaryStoriesLength = secondaryStories.length || 3,
    tertiaryStoriesLength = tertiaryStories.length || 3,
    quaternaryStoriesLength = quaternaryStories.length || 4,
}) {
    const primaryStoriesOne = stories.slice(0, primaryStoriesLength);
    const primaryStoriesTwo = stories.slice(
        primaryStoriesLength,
        primaryStoriesLength + secondaryStoriesLength
    );
    const primaryStoriesThree = stories.slice(
        primaryStoriesLength + secondaryStoriesLength,
        primaryStoriesLength + secondaryStoriesLength + tertiaryStoriesLength
    );

    const _quaternaryStories = quaternaryStories.slice(
        0,
        quaternaryStoriesLength
    );
    console.log(quaternaryStoriesLength);

    return (
        <>
            <Section
                className="has-background-white-ter"
                style={{
                    paddingBottom: '0',
                }}
            >
                <Container className=" ">
                    <Columns className="is-margin-b-0">
                        <Column className="is-4">
                            <PanelTitle>TECHNOLOGY</PanelTitle>
                            {primaryStoriesOne.map(
                                (
                                    { title, url, multimedia = {}, ...story },
                                    i
                                ) => (
                                    <>
                                        <Columns>
                                            <Column className="is-4">
                                                <Link to={url}>
                                                    <Image
                                                        src={
                                                            multimedia?.[4]?.url
                                                        }
                                                    />
                                                </Link>
                                            </Column>
                                            <Column className="is-8">
                                                <SubtitleLinked
                                                    className="is-5"
                                                    to={url}
                                                >
                                                    {title}
                                                </SubtitleLinked>
                                            </Column>
                                        </Columns>
                                        {!isLast(i, primaryStoriesOne.length) && <Divider />}
                                    </>
                                )
                            )}
                            {primaryStoriesTwo.map(
                                ({ title, multimedia = {}, ...story }) => (
                                    <MediaObject
                                        imageLink={multimedia?.[4]?.url}
                                        {...story}
                                    >
                                        {title}
                                    </MediaObject>
                                )
                            )}
                        </Column>
                        <Column
                            className="is-8"
                            style={{
                                borderLeft: '1px solid #00d1b2',
                                borderBottom: '2px solid #00d1b2',
                            }}
                        >
                            <PanelTitle>SCIENCE</PanelTitle>
                            {_quaternaryStories.map(
                                (
                                    { title, url, multimedia = {}, ...story },
                                    i
                                ) => (
                                    <>
                                        <Columns className='adjacent-border'>
                                            <Column className="is-8">
                                                <SubtitleLinked
                                                    className="is-5"
                                                    to={url}
                                                >
                                                    {title}
                                                </SubtitleLinked>
                                            </Column>
                                            <Column className="is-4">
                                                <Link to={url}>
                                                    <Image
                                                        src={
                                                            multimedia?.[4]?.url
                                                        }
                                                    />
                                                </Link>
                                            </Column>
                                        </Columns>
                                    </>
                                )
                            )}
                        </Column>
                    </Columns>
                    <Columns>
                        {primaryStoriesThree.map(
                            ({ title, multimedia = {}, ...story }, i) => (
                                <>
                                    {!isFirst(i) && (
                                        <Divider className="is-margin-t-0 is-margin-b-0d5" />
                                    )}
                                    <Column>
                                        <MediaObject
                                            imageLink={multimedia?.[4]?.url}
                                            {...story}
                                        >
                                            {title}
                                        </MediaObject>
                                    </Column>
                                </>
                            )
                        )}
                    </Columns>
                </Container>
            </Section>
        </>
    );
}

export default PanelFive;
