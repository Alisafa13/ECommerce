import React from 'react'

import {PageParams} from '@/types/page'
const ShopDetails = ({params}:PageParams) => {
  return (
    <div>{params.slug}</div>
  )
}

export default ShopDetails