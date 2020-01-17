import React from 'react';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Columns from '../../components/Columns';
import Column from '../../components/Column';
import PanelTitle from '../../components/PanelTitle';
import Divider from '../../components/Divider';
import PanelEight from '../NewsPanels/components/PanelEight';
import Navbar from '../../Menu';

function Home({
    videos = false,
    style = {},
    primaryColor = 'lightgrey',
    className = '',
    isMobile = false,
    ...props
}) {
    console.log('here');
    return (
        <>
            {videos && (
                <>
                    <Navbar
                        // setRoute={setCurrentRoute}
                        style={{
                            borderBottom: '1px solid ' + primaryColor,
                        }}
                    />
                    <Section className={className} style={{ ...style }}>
                        <Container
                            className="box"
                            style={{
                                borderTop: '2px solid ' + primaryColor,
                            }}
                        >
                            <Columns className="is-gapless">
                                <Column>
                                    <PanelTitle
                                        style={{
                                            color: primaryColor,
                                            textTransform: 'uppercase',
                                            fontSize: '1.5rem',
                                            letterSpacing: '.3rem',
                                            // border: 'none',
                                            borderTop:
                                                '1px solid ' + primaryColor,
                                            borderRight:
                                                '1px solid ' + primaryColor,
                                            borderBottom:
                                                '1px solid ' + primaryColor,
                                            borderLeft:
                                                '1px solid ' + primaryColor,
                                        }}
                                    >
                                        Trailers
                                    </PanelTitle>
                                </Column>
                            </Columns>
                            <Columns className="">
                                <Column>
                                    {videos[0] && (
                                        <PanelEight
                                            videos={videos[0]}
                                            isMobile={isMobile}
                                        />
                                    )}
                                </Column>
                                <Divider
                                    vertical={true}
                                    className="is-divider-vertical-videos"
                                />
                                <Column>
                                    {videos[1] && (
                                        <PanelEight
                                            videos={videos[1]}
                                            isMobile={isMobile}
                                        />
                                    )}
                                </Column>
                                <Divider
                                    vertical={true}
                                    className="is-divider-vertical-videos"
                                />
                                <Column>
                                    {videos[2] && (
                                        <PanelEight
                                            videos={videos[2]}
                                            isMobile={isMobile}
                                        />
                                    )}
                                </Column>
                            </Columns>
                        </Container>
                    </Section>
                </>
            )}
        </>
    );
}

export default Home;
