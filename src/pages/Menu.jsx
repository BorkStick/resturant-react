import React from 'react'
import MenuCategoryGrid from '../components/menu-category-grid/MenuCategoryGrid'
import PromoBanner from '../components/promo-banner/PromoBanner'

export default function Menu() {
    return (
        <div>
            <PromoBanner />
            <MenuCategoryGrid />
        </div>
    )
}
