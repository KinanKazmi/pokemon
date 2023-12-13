import React from 'react'
import { Text } from 'react-native';

const ErrorView = (props: { error: any} ) => {
  return <Text>Error: {props.error.toString()}</Text>;
}

export default ErrorView