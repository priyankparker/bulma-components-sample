import React from 'react';
import Divider from './Divider';
import { onMobile } from '../scenes/Utils/utils';
// import {mobileDivider} from './styles/dividerStyles.css'

function MobileDivider({
    isMobile = onMobile,
    style = {},
    mobileStyle = {
        marginBottom: '0.75rem',
        marginTop: '0.5rem',
    },
    noPadding = false,
    ...props
}) {
    const _style = {
        ...style,
        ...(noPadding === true ? { padding: 0 } : {}),
        ...(isMobile === true ? mobileStyle : {}),
    };
    return <Divider style={{ ..._style }} {...props} />;
}

export default MobileDivider;
