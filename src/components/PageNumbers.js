import React from 'react';
import { onMobile } from '../scenes/Utils/utils';
import Button, { Buttons } from './Button';
import Container from './Container';
import Section from './Section';
import { Link } from '@reach/router';

function PageNumbers({
  size = null,
  length = null,
  current = 1,
  lastPage = null,
  className = '',
  linkPrefix = '',
  ...props
}) {
  current = parseInt(current)
  let buttons = [];

  return (
    <>
      {Number.isSafeInteger(size) &&
        Number.isSafeInteger(length) &&
        Number.isSafeInteger(current) &&
        Number.isSafeInteger(lastPage) && (
          <Section {...props}>
            <Container>
              <Buttons className="is-centered has-addons">
                {current === 1 ? (
                  <></>
                ) : onMobile ? (
                  <>
                    <PageNumberButton
                      label={'<<'}
                      i={1}
                      linkPrefix={linkPrefix}
                    />
                    <PageNumberButton
                      label={'<'}
                      i={current - 1}
                      linkPrefix={linkPrefix}
                    />
                  </>
                ) : (
                  <>
                    <PageNumberButton
                      label={'<< First'}
                      i={1}
                      linkPrefix={linkPrefix}
                    />
                    <PageNumberButton
                      label={'< Prev'}
                      i={current - 1}
                      linkPrefix={linkPrefix}
                    />
                  </>
                )}
                {buttons.map((label, i) => (
                  <PageNumberButton
                    label={label}
                    i={i + 1}
                    linkPrefix={linkPrefix}
                  />
                ))}
                {current === lastPage ? (
                  <></>
                ) : onMobile ? (
                  <>
                    <PageNumberButton
                      label={'>'}
                      i={current + 1}
                      linkPrefix={linkPrefix}
                    />
                    <PageNumberButton
                      label={'>>'}
                      i={lastPage}
                      linkPrefix={linkPrefix}
                    />
                  </>
                ) : (
                  <>
                    <PageNumberButton
                      label={'Next >'}
                      i={current + 1}
                      linkPrefix={linkPrefix}
                    />
                    <PageNumberButton
                      label={'Last >>'}
                      i={lastPage}
                      linkPrefix={linkPrefix}
                    />
                  </>
                )}
              </Buttons>
            </Container>
          </Section>
        )}
    </>
  );
}

function PageNumberButton({ label, i, linkPrefix = '' }) {
  return (
    <Button
      className={`${onMobile ? '' : ''} is-rounded is-primary is-outlined`}
      style={{
        ...(i === 1 && (label === '<<' || label === '<< First')
          ? { borderRightWidth: 0 }
          : {}), //workaround: first element had double the amount of width
      }}
    >
      <Link className='links' to={linkPrefix + i}>{label}</Link>
    </Button> // todo: make the whole button clickable
  );
}
export default PageNumbers;
