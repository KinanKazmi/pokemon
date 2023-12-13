import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../nav/NavigationStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokemonType, usePokemonQuery } from '../apis/api';
import Loading from '../components/Loading';
import ErrorView from '../components/Error';


const Main = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {

  const { data, error, isLoading } = usePokemonQuery(1);

  if (!data || isLoading) {
    return <Loading isLoading={!data || isLoading}/>;
  }

  if (error) {
    return <ErrorView error={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>List of Pokemon:</Text>
        {data?.results?.map((pokemon: PokemonType) => (
          <TouchableOpacity
            key={pokemon.name}
            style={styles.button}
            onPress={() => navigation.navigate('Details', {pokemon})}
          >
            <Text style={styles.poks}>{pokemon.name}</Text>
          </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  poks: {
    fontWeight: 'bold'
  },
  button: {
    marginVertical: 5
  }
});

export default Main;
