import React from 'react';
import Image from './Image';

function Card({ className = '', children, image = {}, ...props }) {
    return (
        <div className={`card ${className}`} {...props}>
            <div className="card-image">
                <Image {...image} />
            </div>
            <div className="card-content">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default Card;
