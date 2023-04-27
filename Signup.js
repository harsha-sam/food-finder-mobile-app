import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Create an Account{' '}
      </Text>
      <Input placeholder='Full Name' />
      <Input placeholder='Email' />
      <Input placeholder='Password' secureTextEntry />
      <Input placeholder='Confirm Password' secureTextEntry />
      <Button
        title='Sign Up'
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
      />
      <Text>
        Already have an account ?{' '}
        <Text
          onPress={() => navigation.navigate('login')}
          style={{ textDecorationLine: 'underline' }}
        >
          Login here !
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

export default Signup;
