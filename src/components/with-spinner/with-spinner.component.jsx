import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style.jsx'

const withSpinner = WrappedComponent => 
{
    const Spinner=({isloading,...otherProps}) => {
    return isloading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}
return Spinner
}

export default withSpinner