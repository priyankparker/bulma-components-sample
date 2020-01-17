import React from 'react'
import Divider from './Divider'
import { isLast } from '../scenes/Utils/utils.js'

function MidDivider({ className, vertical = false, content = false, style = {}, index: i = 0, length = 1, ...props  }) {
	return (
        <>
            {
                !isLast(i , length) &&
                <Divider
                    className={`${vertical ? 'is-divider-vertical' : 'is-divider'} ${className}`}
                    style={{...style}}
                    data-content={ content ? content : null}
                    {...props}
                />
            }
        </>
	)
}

export default MidDivider