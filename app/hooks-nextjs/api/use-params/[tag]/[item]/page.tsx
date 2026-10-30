'use client';
import React from 'react'
import { useParams } from 'next/navigation'

const TagItemPage = () => {
    const params = useParams();

    console.log(params);
  return (
    <div>Shop TagItemPage</div>
  )
}

export default TagItemPage