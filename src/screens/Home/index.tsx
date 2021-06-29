import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Appointment } from "../../components/Appointment";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from '../../components/Profile';
import { ListDivider } from '../../components/ListDivider';

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState('');

  const appoiments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Landários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challnger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Landários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challnger sem perder uma partida da md10',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Landários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challnger sem perder uma partida da md10',
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Landários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challnger sem perder uma partida da md10',
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Landários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challnger sem perder uma partida da md10',
    }

  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd />
      </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader
            title="Partidas agendadas"
            subTitle="Total 6"
          />

          <FlatList
            data={appoiments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
      </View>
    </View>
  )
}