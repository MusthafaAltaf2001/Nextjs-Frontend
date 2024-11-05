import { getAllJokeTypes } from '@/actions/actions'
import Homepage from '@/components/Homepage/Homepage'
import React from 'react'

const page = async () => {
  const allJokeTypes = await getAllJokeTypes()

  return <Homepage allJokeTypes={allJokeTypes} />
}

export default page