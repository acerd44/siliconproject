import React from 'react'
import SubscribeButton from './SubscribeButton'
const DarkSubscribeButton = () => {
    const StyledSubscribeButton = SubscribeButton
    return (
        <div className="dark-subscribe-button">
            <label htmlFor="subscribe-email">Subscribe to our newsletter</label>
            <StyledSubscribeButton />
        </div>
    )
}

export default DarkSubscribeButton