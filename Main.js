import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, marginBottom: 5 }}>Food Finder ! </Text>
      <Text style={{ fontSize: 16, marginBottom: 16 }}>
        Find Best Delicious Food Options !{' '}
      </Text>
      <Image
        source={require('./assets/fast-food.png')}
        style={{ width: 120, height: 120, marginBottom: 40 }}
      />
      <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <View style={{ width: 180 }}>
          <Button
            title='Login'
            onPress={() => navigation.navigate('login')}
            color={'#1a1a1a'}
          />
        </View>
        <Button
          title='Sign Up'
          onPress={() => navigation.navigate('signup')}
          color={'#1a1a1a'}
        />
        <Text
          onPress={() => navigation.navigate('home')}
          style={{ textDecorationLine: 'underline' }}
        >
          Explore as guest
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4ede7',
  },
});

export default Main;
