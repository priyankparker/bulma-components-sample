import React from 'react';
import Columns, { ColumnsContained } from '../../../components/Columns';
import Column from '../../../components/Column';
import { isNumber } from '../../Utils/utils';
import Video from '../../../components/Video';
import Subtitle from '../../../components/Subtitle';
import { SectionContainer } from '../../../components/Section';

export function PanelSevenContainer({
    columns = 2,
    primaryElems = 1,
    secondaryElems = 2,
    tertiaryElems = 4,
    children: videos = [],
    isSecondRowVertical = true,
    pathPrefix = '',
    times = 1,
    columnClassName = '',
    style = {},
    ...rest
}) {
    const maxColumns = 4;
    columns = isNumber(columns) && columns > maxColumns ? maxColumns : columns;
    columnClassName = columnClassName ? 'is-6' : columnClassName;

    videos = videos.map(video => {
        let _video = []
         _video[0] = video.slice(0, primaryElems)
         _video[1] = video.slice(primaryElems, primaryElems + secondaryElems)
         _video[2] = video.slice(
            primaryElems + secondaryElems,
            primaryElems + secondaryElems + tertiaryElems
        )
        return _video
});

    const props = {
        columns: columns || 3,
        primaryElems: primaryElems || 1,
        secondaryElems: secondaryElems || 2,
        tertiaryElems: tertiaryElems || 4,
        columnClassName,
        isSecondRowVertical,
        videos: videos[0], //update
        style,
        pathPrefix,
    };

    console.log(
        'props: ' ,props

    );
    
    return (
        <>
            {videos && (
                <PanelSeven {...props} {...rest} style={{ ...style }}>
                    {videos}
                </PanelSeven>
            )}
        </>
    );
}

function PanelSeven({
    children: videos,
    columns,
    primaryElems,
    secondaryElems,
    tertiaryElems,
    children,
    pathPrefix,
    style,
    ...rest
}) {
    const primaryRowIndex = 0
    const secondaryRowIndex = 1
    const tertiaryRowIndex = 2
    return (
        <>
            {videos && (
                <SectionContainer {...style}>
                    {videos.map((videoRow, i) => (
                        <>
                            {i == primaryRowIndex &&
                                videoRow.map(({ video, name }) => (
                                    <Columns>
                                        <Column>
                                            <Video src={video} />
                                            <Subtitle>{name}</Subtitle>
                                        </Column>
                                    </Columns>
                                ))}
                            {/* {i == 1 &&
                                videoRow.map(({ video, name }) => (
                                    <Columns>
                                        <Column className="is-6">
                                            <Video src={video} />
                                        </Column>
                                        <Column className="is-6">
                                            <Subtitle>{name}</Subtitle>
                                        </Column>
                                    </Columns>
                                ))}

                            {i == 2 &&
                                videoRow.map(({ video, name }) => (
                                    <Columns>
                                        <Column className="is-4">
                                            <Video src={video} />
                                        </Column>
                                        <Column className="is-8">
                                            <Subtitle>{name}</Subtitle>
                                        </Column>
                                    </Columns>
                                ))}
                            {i !== 2 && (
                                <Divider
                                    vertical={true}
                                    className=".is-padding-0d5"
                                />
                            )} */}
                        </>
                    ))}
                </SectionContainer>
            )}
        </>
    );
}

export default PanelSeven;
