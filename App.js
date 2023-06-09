/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const App = () => {
  const addEntry = () => {
    const nome = 'Paulo';
    alert(`Ola tudo bem ${nome}?`);
  };

  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo: $2.102,45
      </Text>
      <Button title="Adicionar" onPress={addEntry} />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>
      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustível: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Últimos lançamentos
      </Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermercado Isadora: $190'},
          {key: 'Posto Ipiranga: $190'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
