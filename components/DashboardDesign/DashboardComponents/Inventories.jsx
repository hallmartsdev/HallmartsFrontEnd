import React from 'react'
import OrdersComponent from './OrdersComponents/OrdersComponent'
import InventoryItems from './InventoryComponents/InventoryItems'

let details = [
  { productName: 'Rayban Shoes', price: 'N1000', category: 'shoes',brand:'rayban' },
  { productName: 'Rayban Shoes', price: 'N2000', category: 'shoes',brand:'rayban' },
  { productName: 'Rayban Shoes', price: 'N3000', category: 'shoess',brand:'rayban' },
  { productName: 'Rayban Shoes', price: 'N4000', category: 'shoes',brand:'rayban' },

]

const Inventories = () => {
  return (
    <div>
    <InventoryItems/>
    </div>
  )
}

export default Inventories