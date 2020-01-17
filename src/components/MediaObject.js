import React from 'react';
import Byline from './Byline';
import Link from './Link';
import MediaObjectImage from './MediaObjectImage';
import MediaObjectContent from './MediaObjectContent';
import MediaArticle from './MediaArticle';

function MediaObject({
    className = '',
    imageSize: size = '64x64',
    imageLink = 'https://bulma.io/images/placeholders/64x64.png',
    imageStyle = {},
    imageClassName = '',
    url = '#',
    children: title = false,
    byline = false,
    bylineClassName = '',
    reverse = false,
    showImage = true,
    ...props
}) {
    return (
        <>
            {title && (
                <MediaArticle {...props}>
                    {showImage && (
                        <MediaObjectImage
                            imageLink={imageLink}
                            imageClassName={imageClassName}
                            url={url}
                            size={size}
                            imageStyle={imageStyle}
                        />
                    )}
                    {url && (
                        <MediaObjectContent>
                            <MediaObjectTitle
                                url={url}
                                title={title}
                                byline={byline}
                            />
                        </MediaObjectContent>
                    )}
                </MediaArticle>
            )}
        </>
    );
}

function MediaObjectTitle({ url = false, title = false, byline = false }) {
    return (
        <>
            {url && title && (
                <p>
                    <Link to={url} className="links">
                        {title}
                    </Link>
                    {/* <small>31m</small> */}
                    {byline && <Byline>{byline}</Byline>}
                </p>
            )}
        </>
    );
}

export default MediaObject;
