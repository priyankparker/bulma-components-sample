import React from 'react';
import Section from './Section';
import Container from './Container';

function Columns({ children, className = '', style = {}, ...props }) {
    return (
        <>
            {children && (
                <div
                    className={`columns ${className}`}
                    style={{ ...style }}
                    {...props}
                >
                    {children}
                </div>
            )}
        </>
    );
}

export function ColumnsVertical({
    children,
    className = '',
    style = {},
    ...props
}) {
    return (
        <>
            {children && (
                <Columns
                    className={`is-block ${className}`}
                    style={{ ...style }}
                    {...props}
                >
                    {children}
                </Columns>
            )}
        </>
    );
}

export function ColumnsContained({ children }) {
    return (
        <>
            {children && (
                <Section>
                    <Container>
                        <Columns>{children}</Columns>
                    </Container>
                </Section>
            )}
        </>
    );
}

export default Columns;
