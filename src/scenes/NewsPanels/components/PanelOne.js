import React from "react";
import Section from "../../../components/Section";
import Image from "../../../components/Image";
import Columns from "../../../components/Columns";
import Column from "../../../components/Column";
import Divider from "../../../components/Divider";
import Title from "../../../components/Title";
import Subtitle from "../../../components/Subtitle";
import Link from "../../../components/Link";
import Container from "../../../components/Container";

function PanelOne({ className = '', leftColumnTopStories = [], rightColumnTopStories = [] }) {


  // leftColumnTopStories.map(({ multimedia }, i) => {
  //   console.log("multimedia: ", multimedia);
  // }); //debug

  return (
    <>
      {leftColumnTopStories.length > 0 && rightColumnTopStories.length > 0 && (
        <Section className={`box ${className}`}>
          <Container>
            <Columns>
              <Column className="is-8">
                {leftColumnTopStories.map(
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
                      {
                        typeof multimedia !== 'undefined' &&
                        typeof multimedia[4] !== 'undefined' &&
                        typeof multimedia[4].url !== 'undefined' &&
                        <Link to={url}>
                          <Image src={multimedia[4].url} size='4by3' className='fitImage' />
                        </Link>
                      }
                      <Title className="is-4">
                        <Link to={url} className="links">
                          {title}
                        </Link>
                      </Title>
                      <Subtitle className="is-6 is-italic">{byline}</Subtitle>
                      {i !== leftColumnTopStories.length - 1 && <Divider />}
                    </>
                  )
                )}
              </Column>
              <Divider vertical={true}
                className='is-margin-v-0d2 is-margin-h-0'
              />
              <Column className="is-4">
                {rightColumnTopStories.map(
                  ({ title, updated_date: updatedDate, url }, i) => (
                    <>
                      <Title className="is-6 medium-margin-bottom-mobile">
                        <Link to={url} className="links">
                          {title}
                        </Link>
                      </Title>
                      {i !== rightColumnTopStories.length - 1 && <Divider className='low-margin-mobile' />}
                    </>
                  )
                )}
              </Column>
            </Columns>
          </Container>
        </Section>
      )}
    </>
  );
}

export default PanelOne;
