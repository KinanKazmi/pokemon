import React from 'react'
import { SafeAreaView } from 'react-native'
import { usePokemonDetailsQuery } from '../apis/api';
import Loading from '../components/Loading';
import SectionValue from '../components/SectionValue';
import ErrorView from '../components/Error';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../nav/NavigationStack';


export const Details = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Details'>) => {
  const { url } = route?.params?.pokemon;
  const urlPath = url.split('/').filter(Boolean).pop();
  const { data, error, isLoading } = usePokemonDetailsQuery(urlPath);

  if (!data || isLoading) {
    return <Loading isLoading={!data || isLoading}/>;
  }

  if (error) {
    return <ErrorView error={error} />;
  }

  return (
    <SafeAreaView>
      <SectionValue section={'Name'} value={data.name}/>
      <SectionValue section={'Height'} value={data.height}/>
      <SectionValue section={'Weight'} value={data.weight}/>
      <SectionValue
        section={'Types'}
        value={data.types.reduce((acc: string, curr: any, index: number) => {
          return acc = index === 0 ? curr.type.name : `${acc}\n${curr.type.name}`
        }, '' )}
      />
    </SafeAreaView>
  )
}
