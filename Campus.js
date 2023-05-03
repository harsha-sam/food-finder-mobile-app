import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Chip, Tab, Rating } from '@rneui/themed';
import { useId } from 'react';

const data = [
  {
    title: 'Starbucks',
    description: 'Pickup Hours: 4:00 PM - 5:00 PM',
    img: 'https://logowik.com/content/uploads/images/280_starbucks.jpg',
    rate: 4,
    location: 'UMBC University Center',
    price: '$$',
  },
  {
    title: 'Chick-fil-A',
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    img: 'https://www.freepnglogos.com/uploads/chick-fil-a-png-logo/chick-fil-a-zanda-png-logo-1.png',
    rate: 5,
    location: 'UMBC University Center',
    price: '$$',
  },
  {
    title: 'Halal Shack',
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    img: 'https://assets.website-files.com/5efa207a59d29b5583d9972a/5f69180f200aba2f39fdd6ee_Layer%20x0020%205%20(3)%20(1).png',
    location: 'The Commons',
    rate: 3,
    price: '$',
  },
];

const Campus = ({ route: { params } }) => {
  const { fullName } = params;
  const id = useId();
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 28, margin: 20 }}>{fullName}</Text>
      <ScrollView>
        <View style={{ paddingBottom: 100, margin: 20 }}>
          {data.map((element, index) => {
            return (
              <Card key={`${id}-${index}`}>
                <Image
                  source={{ uri: element.img }}
                  style={{ width: 300, height: 200, marginBottom: 40 }}
                />
                <Text>{element.title}</Text>
                <Text style={{ color: 'grey' }}>{element.description}</Text>
                <Chip
                  type='outline'
                  containerStyle={{
                    marginVertical: 10,
                    width: 200,
                    backgroundColor: '#fff1f0',
                  }}
                  style={{ backgroundColor: '#fff1f0' }}
                >
                  <Text style={{ color: '#cf1322', width: 160 }}>
                    {element.location}{' '}
                  </Text>
                </Chip>
                <Text style={{ fontSize: 18 }}>{element.price}</Text>
                <View style={{ width: 200, marginTop: 10}}>
                  <Rating startingValue={element.rate} />
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
      <Tab
        value={0}
        // onChange={(e) => setIndex(e)}
        containerStyle={{
          backgroundColor: '#fff',
        }}
        indicatorStyle={{
          backgroundColor: '#ffa39e',
          height: 3,
        }}
      >
        <Tab.Item
          title='Home'
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'home', type: 'antdesign', color: '#1a1a1a' }}
        />
        <Tab.Item
          title='Favorites'
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart-o', type: 'font-awesome', color: '#1a1a1a' }}
        />
        <Tab.Item
          title='Logout'
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'logout', type: 'antdesign', color: '#1a1a1a' }}
        />
      </Tab>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 100,
    marginBottom: 0,
  },
});

export default Campus;
