import React from 'react'
import Hero from '../components/hero/Hero'
import OrderBanner from '../components/order-banner/OrderBanner'

export default function Home() {
    return (
        <div>
            <OrderBanner />
            <Hero />
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non tenetur maxime. Magnam ratione ex quo suscipit rerum. Consectetur doloremque praesentium illum excepturi dolore deleniti tempora sed asperiores fugit dolorem!</p>
        </div>
    )
}
