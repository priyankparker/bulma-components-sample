import React from 'react';
import Column from '../../../components/Column';
import Title from '../../../components/Title';
import Columns from '../../../components/Columns';

function PanelNine({ className = '', style = {}, children, ...props }) {
    return (
        <>
            {children && (
                <Columns className={`is-block ${className}`} {...props}>
                    {children}
                </Columns>
            )}
        </>
    );
}
export default PanelNine;
