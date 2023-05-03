import { View, StyleSheet } from 'react-native'
import { SearchBar, ListItem } from '@rneui/themed';
import React, { useState } from 'react';

const campuses = [
  {
    id: '1',
    name: 'UMBC',
    fullName: 'University of Maryland, Baltimore County',
  }
];
const Home = ({ navigation }) => {
  const [search, setSearch] = useState('')
  const [filteredCampuses, setFilteredCampuses] = useState(campuses);

  const updateSearch = (value) => {
    setSearch(value)
    setFilteredCampuses(campuses.filter((campus) => campus.fullName.startsWith(search) || campus.name.startsWith(search) ))
  }
  return (
    <View style={styles.view}>
      <SearchBar
        placeholder='Select your campus'
        lightTheme
        onChangeText={updateSearch}
        value={search}
      />
      {
        filteredCampuses.map((campus) => {
          const { id, name, fullName } = campus
          return (
            <ListItem
              key={id}
              onPress={() =>
                navigation.navigate('campus', {
                  id,
                  name,
                  fullName,
                })
              }
            >
              <ListItem.Content>
                <ListItem.Title>{fullName}</ListItem.Title>
                <ListItem.Subtitle>{name}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 50,
    backgroundColor: '#f4ede7',
  },
});
export default Home