import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const PayStripe=({ price }) => {
    
    const priceStripe=price*100
    const publishableKey="pk_test_s7HwWAo9oY5mJ4BFFKC8Jd2X00rZ8L1JJD"
    
    const onToken=(token) => {
        console.log(token)
        alert("Payment Successful")
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="My Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your Total is $${price}`}
            amount={priceStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default PayStripe