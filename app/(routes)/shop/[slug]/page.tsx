import React from 'react'

import {PageParams} from '@/types/page'
export default function ShopDetails({ params }: PageParams) {
  return <div>{params.slug}</div>;
}