import React from 'react';

const SwipeGroup = ({children, ...props}) => {
    return <div className="swipable-containers" {...props}>
        {children}
    </div>
}

export default SwipeGroup;