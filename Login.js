import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Log In to Your Account{' '}
      </Text>
      <Input placeholder='Email' />
      <Input placeholder='Password' secureTextEntry />
      <Button
        title='Login'
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
      />
      <Text>
        Don't have an account ? <Text onPress={() => navigation.navigate('signup')} style={{ textDecorationLine: 'underline'}}>
          Sign up here !
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4ede7',
    padding: 20,
  },
});

export default Login;

