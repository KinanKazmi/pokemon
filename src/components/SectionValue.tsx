import React from 'react'
import { Text, View, StyleSheet} from 'react-native';

const SectionValue = (props: {section: string, value: string}) => {
  const {section, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.section}>{section}:</Text>
      <Text>{value}</Text>
    </View>
  )
}

export default SectionValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10
  },
  section: {
    fontWeight: 'bold',
    marginRight: 10
  }
});