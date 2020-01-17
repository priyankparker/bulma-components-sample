import React from 'react';
import Section from './Section';
import Container from './Container';
import Navbar from '../Menu'

function PageOne({
    stories = [],
    primaryColor = 'lightgrey',
    children,
    style = {},
    className = '',
    ...props
}) {
    return (
        <>
            <Navbar
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
                    {children}
                    </Container>
            </Section>
        </>
    );
}

export default PageOne;
