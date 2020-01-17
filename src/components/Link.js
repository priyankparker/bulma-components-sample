import React from 'react'

function Link({ children: child, to = '', className, style = {}, ...props  }) {
	return (
		<>
			<a href={to} className={className} style={{...style}} {...props}>
				{child}
			</a>
		</>
	)
}

export default Link