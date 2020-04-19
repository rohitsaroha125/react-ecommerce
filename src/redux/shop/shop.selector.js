import { createSelector } from "reselect";

const shopData=state => state.Shop

const COLLECTION_MAP={
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const ShopSections=createSelector(
    [shopData],
    Shop => Shop.collections
)

export const SelectCategory=(categoryId) => createSelector(
    [ShopSections],
    collections => collections.find(collection => collection.id===COLLECTION_MAP[categoryId])
)

export default ShopSections