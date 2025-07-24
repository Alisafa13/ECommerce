import React from 'react'

interface ShopDetailsProps{
    params:{
        slug:string;
    }
}
const ShopDetails = ({params}:ShopDetailsProps) => {
  return (
    <div>{params.slug}</div>
  )
}

export default ShopDetails