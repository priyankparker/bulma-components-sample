import React from 'react';
import Columns from '../../../components/Columns';
import Column from '../../../components/Column';
import Divider from '../../../components/Divider';
import Subtitle from '../../../components/Subtitle';
import { isLast, trimAfterHyphen } from '../../Utils/utils';
import Iframe from '../../../components/iFrame';
import MobileDivider from '../../../components/MobileDivider';

function PanelEight({ className = '', style = {}, videos = [], isMobile = false, ...props }) {
    const primaryRowIndex = 0;
    const secondaryRowIndexStart = 1;
    const secondaryRowIndexEnd = 2;
    
    return (

                videos.map(({ name, src }, i) => {
                    return i === primaryRowIndex ? (
                        <>
                        <Columns className='no-padding-bottom-mobile no-margin-bottom-mobile'>
                            <Column className='no-padding-bottom-mobile no-margin-bottom-mobile'>
                                <Iframe src={src} />
                                <Subtitle className="is-6 is-capitalized ">
                                    {name}
                                </Subtitle>
                            </Column>
                        </Columns>
                        <MobileDivider isMobile={isMobile} />
                        </>
                    ) : i === 1 ? (
                        <>
                        <Columns>
                            <Column
                                className='is-6'
                            >
                                <Iframe src={src} />
                                <Subtitle className="is-6 is-capitalized ">
                                    {trimAfterHyphen(name).toLowerCase()}
                                </Subtitle>
                            </Column>
                            <Column
                                className='is-6'
                            >
                                <Iframe src={videos[2].src} />
                                {console.log('videos[2].name: ', videos[2].name)}
                                <Subtitle className={videos[2].name.toLowerCase().includes('zombieland') ? "is-7 is-capitalized " :"is-6 is-capitalized "}>
                                    {trimAfterHyphen(videos[2].name).toLowerCase()}
                                </Subtitle>
                            </Column>
                        </Columns>
                        <MobileDivider isMobile={isMobile} />
                        </>
                    ): i % 3 === 0 ? (
                        <>
                        <Columns className='is-0'>
                        {
                            src && name &&
                            <Column
                                className='is-4'
                            >
                                <Iframe src={src} />
                                <Subtitle className="is-7 is-capitalized ">
                                    {trimAfterHyphen(name).toLowerCase()}
                                </Subtitle>
                            </Column>
                        }
                        {
                            videos[i+1]?.src && videos[i+1]?.name &&
                            <Column
                                className='is-4'
                            >
                                <Iframe src={videos[i+1].src} />
                                <Subtitle className="is-7 is-capitalized ">
                                    {trimAfterHyphen(videos[i+1].name).toLowerCase()}
                                </Subtitle>
                            </Column>
                        }
                        {
                            videos[i+2]?.src && videos[i+2]?.name &&
                            <Column
                                className='is-4'
                            >
                                <Iframe src={videos[i+2].src} />
                                <Subtitle className="is-7 is-capitalized ">
                                    {trimAfterHyphen(videos[i+2].name).toLowerCase()}
                                </Subtitle>
                            </Column>
                        }
                        </Columns>
                        <MobileDivider isMobile={isMobile} />
                        </>
                    ) : <></>;
                })

    );
}

export default PanelEight;
