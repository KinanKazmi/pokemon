import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = (props: {isLoading: boolean}) => {
  return (
    <ActivityIndicator
      testID={'AI'}
      size={'large'}
      animating={props.isLoading}
    />
  )
}

export default Loading