import React, { useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../nav/NavigationStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Loading from '../components/Loading';
import ErrorView from '../components/Error';
import { localSet } from '../storage/localStore';
import { PokemonType, useFetchPokemonDataQuery } from '../apis/api';


const Main = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {

  const { data, error, isLoading } = useFetchPokemonDataQuery(1);

  useEffect(() => {
    if (data?.results) localSet('pokemons', data.results);
  }, [data]);

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
