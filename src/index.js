/* eslint-disable */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// import "./bulma.css";
import 'bulma/bulma.sass';
import 'bulma-divider/dist/css/bulma-divider.min.css';
import './styles.css';

import 'bulma-carousel/dist/css/bulma-carousel.min.css'
// import 'bulma-carousel/dist/js/bulma-carousel.min.js'
// import NavBar from './Menu';
// import Container from './components/Container';
// import Section from './components/Section';
// import PanelOne from './scenes/NewsPanels/components/PanelOne';
// import PanelTwo from './scenes/NewsPanels/components/PanelTwo';
// import PanelThree from './scenes/NewsPanels/components/PanelThree';
// import PanelFour from './scenes/NewsPanels/components/PanelFour';
// import PanelFive from './scenes/NewsPanels/components/PanelFive';
// import PanelSix from './scenes/NewsPanels/components/PanelSix';

import topHomeStories from './data/home-top-stories-jan-7-2020';
import topSportsStories from './data/sports-top-stories-jan-8-2020';
import topWorldStories from './data/world-top-stories-jan-6-2020';
import topMoviesStories from './data/movies-top-stories-jan-8-2020';
import topArtsStories from './data/arts-top-stories-jan-8-2020';
import topBusinessStories from './data/business-top-stories-jan-8-2020';
import topTechStories from './data/tech-top-stories-jan-9-2020';
import topScienceStories from './data/science-top-stories-jan-9-2020';
import topFashionStories from './data/fashion-top-stories-jan-10-2020';
// import topFoodStories from './data/food-top-stories-jan-10-2020';
// import videos from './data/videos-jan-11-2020';
// import videos from './data/youtube-trailers';
import videos from './data/youtube-trailers-fullwidth';
// import { PanelSevenContainer as PanelSeven } from './scenes/NewsPanels/components/PanelSeven';
import { chunk, onMobile as isMobile, isDomElem } from '../src/scenes/Utils/utils';
// import Columns from './components/Columns';
// import Column from './components/Column';
// import Video from './components/Video';
// import Subtitle from './components/Subtitle';
// import Divider from './components/Divider';
// import PanelEight from './scenes/NewsPanels/components/PanelEight';
// import PanelTitle from './components/PanelTitle';
// import MidDivider from './components/MidDivider';
// import Menu from './Menu';
import Home from './scenes/Routes/Home';
import Topic from './scenes/Routes/Topic';

import { Router } from '@reach/router';

import bulmaCarousel from 'bulma-carousel';

const rootElement = document.getElementById('root');

function App() {
    const [slides, setSlides] = useState({
        slidesToScroll: 1,
        slidesToShow: 4,
    });

    const totalvideos = 21;
    let _videos;
    _videos = [...videos, ...videos, ...videos, ...videos];
    _videos = chunk(_videos.slice(0, totalvideos), 3);
    const primaryColor = '#3ba393';

    console.log('bulmaCarousel: ', bulmaCarousel);

    

    return (
        <Router>
            <Home
                isMobile={isMobile}
                videos={_videos}
                primaryColor={primaryColor}
                path="/"
            />
            <Topic path="news" primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="sports" items={topSportsStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="world" items={topWorldStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="movies" items={topMoviesStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="arts" items={topArtsStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="business" items={topBusinessStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="tech" items={topTechStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="science" items={topScienceStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            <Topic path="fashion" items={topFashionStories.results} primaryColor={primaryColor} isMobile={isMobile} />
            






        </Router>
    );
}

ReactDOM.render(<App />, rootElement);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function _App() {
    // const [currentRoute, setCurrentRoute] = useState('home');

    // #region
    const homeMultimediaStories = getMultiMediaStories(topHomeStories.results);
    const leftColumnTopStories = homeMultimediaStories.slice(1, 2);
    const rightColumnTopStories = homeMultimediaStories.slice(2, 9);

    const worldMultimediaStories = getMultiMediaStories(
        topWorldStories.results
    );
    const { primaryWorldStories, secondaryWorldStories } = splitWorldStories(
        worldMultimediaStories
    );

    const sportsMultimediaStories = getMultiMediaStories(
        topSportsStories.results
    );
    const { primarySportsStories } = splitSportsStories(
        sportsMultimediaStories
    );

    const moviesMultimediaStories = getMultiMediaStories(
        topMoviesStories.results
    );
    const { primaryMoviesStories } = splitMoviesStories(
        moviesMultimediaStories
    );

    const artsMultimediaStories = getMultiMediaStories(topArtsStories.results);
    const { primaryArtsStories } = splitArtsStories(artsMultimediaStories);

    const businessMultimediaStories = getMultiMediaStories(
        topBusinessStories.results
    );
    const { businessStories } = splitBusinesssStories(
        businessMultimediaStories
    );

    const techMultimediaStories = getMultiMediaStories(topTechStories.results);

    const scienceMultimediaStories = getMultiMediaStories(
        topScienceStories.results
    );

    const fashionMultimediaStories = getMultiMediaStories(
        topFashionStories.results
    );

    const totalvideos = 21;
    let _videos;

    _videos = [...videos, ...videos, ...videos, ...videos];

    _videos = chunk(_videos.slice(0, totalvideos), 3);
    console.log(_videos);

    //#endregion

    const pathPrefix =
        'file:///Users/priyankparker/work-samples/bulma-news-app/src/assets/videos/';
    const primaryColor = '#3ba393';
    return (
        <>
            {/* <Menu
                setRoute={setCurrentRoute}
                style={{
                    borderBottom: '1px solid ' + primaryColor,
                }}
            /> */}
            {/* {(currentRoute === 'home' && (
                <Home
                    isMobile={isMobile}
                    videos={_videos}
                    primaryColor={primaryColor}
                />
            )) ||
                (currentRoute === 'news' && <News isMobile={isMobile} />)} */}
            {/* <Section>
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
                                    borderTop: '1px solid ' + primaryColor,
                                    borderRight: '1px solid ' + primaryColor,
                                    borderBottom: '1px solid ' + primaryColor,
                                    borderLeft: '1px solid ' + primaryColor,
                                }}
                            >
                                Trailers
                            </PanelTitle>
                        </Column>
                    </Columns>
                    <Columns className="">
                        <Column>
                            {_videos[0] && <PanelEight videos={_videos[0]} />}
                        </Column>
                        <Divider
                            vertical={true}
                            className="is-divider-vertical-videos"
                        />
                        <Column>
                            {_videos[1] && <PanelEight videos={_videos[1]} />}
                        </Column>
                        <Divider
                            vertical={true}
                            className="is-divider-vertical-videos"
                        />
                        <Column>
                            {_videos[2] && <PanelEight videos={_videos[2]} />}
                        </Column>
                    </Columns>
                </Container>
            </Section> */}

            {/* 
            <PanelOne
                className="has-background-white-ter"
                leftColumnTopStories={leftColumnTopStories}
                rightColumnTopStories={rightColumnTopStories}
            />
            <PanelTwo
                primaryStories={primaryWorldStories}
                secondaryStories={secondaryWorldStories}
                tertiaryStories={primarySportsStories}
            />
            <PanelThree
                primaryStories={primaryMoviesStories}
                secondaryStories={primaryArtsStories}
            />
            <PanelFour stories={businessStories} />
            <PanelFive
                stories={techMultimediaStories}
                quaternaryStories={scienceMultimediaStories}
                quaternaryStoriesLength={4}
            />
            <PanelSix
                primaryStories={fashionMultimediaStories}
                secondaryStories={topFoodStories.results}
            /> */}
            {/* <PanelSix
                primaryStories={fashionMultimediaStories}
                secondaryStories={topFoodStories.results}
                primaryStoriesLength={3}
                secondaryStoriesLength={1}
            />
            <PanelSix
                primaryStories={fashionMultimediaStories}
                secondaryStories={topFoodStories.results}
                primaryStoriesLength={3}
                secondaryStoriesLength={1}
            />
            <PanelSix
                primaryStories={fashionMultimediaStories}
                secondaryStories={topFoodStories.results}
                primaryStoriesLength={6}
                secondaryStoriesLength={3}
            /> */}
            {/* <PanelSeven pathPrefix="/Users/priyankparker/work-samples/bulma-news-app/src/assets/videos/">
                {_videos[0]}
            </PanelSeven>
            <PanelSeven pathPrefix="/Users/priyankparker/work-samples/bulma-news-app/src/assets/videos/">
                {videos[1]}
            </PanelSeven>
            <PanelSeven pathPrefix="/Users/priyankparker/work-samples/bulma-news-app/src/assets/videos/">
                {videos[2]}
            </PanelSeven> */}
        </>
    );
}

function getMultiMediaStories(stories = [], index = 0) {
    return stories.filter(story => story.multimedia && story.multimedia[index]);
}

function splitWorldStories(multimediaWorldStories = []) {
    return {
        primaryWorldStories: multimediaWorldStories.slice(0, 3),
        secondaryWorldStories: multimediaWorldStories.slice(3, 7),
        tertiaryWorldStories: multimediaWorldStories.slice(7, 19),
    };
}

function splitSportsStories(multimediaSportStories = []) {
    return {
        primarySportsStories: multimediaSportStories.slice(0, 9),
    };
}

function splitMoviesStories(multimediaMovieStories = []) {
    return {
        primaryMoviesStories: multimediaMovieStories.slice(0, 6),
    };
}

function splitArtsStories(multimediaArtsStories = []) {
    return {
        primaryArtsStories: multimediaArtsStories.slice(0, 2),
    };
}

function splitBusinesssStories(multimediaBusinessStories) {
    return { businessStories: multimediaBusinessStories.slice(4, 20) };
}
