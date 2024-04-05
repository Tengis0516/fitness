import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const Profile: React.FC = () => {
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'white', marginTop: 70 }}>Welcome,my friend!</Text>
      </View>
      <View style={{ backgroundColor: ' rgb(230, 230, 230  )', marginTop: 100 }}>
        <View
          style={{ flexDirection: 'row', borderTopWidth: '1', height: 60, alignItems: 'center' }}>
          <FontAwesome5 style={{ marginLeft: 30 }} name="smile" size={28} color="black" />
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 20 }}>My profile</Text>
          <AntDesign style={{ marginLeft: 220 }} name="rightcircle" size={20} color="black" />
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            borderTopWidth: '1',
            borderTopColor: 'black',
            height: 60,
          }}>
          <AntDesign style={{ marginLeft: 30 }} name="heart" size={28} color="black" />
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 20 }}>My Favourite</Text>
          <AntDesign style={{ marginLeft: 195 }} name="rightcircle" size={20} color="black" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: '1',
            borderTopColor: 'black',
            height: 60,
            alignItems: 'center',
          }}>
          <Ionicons style={{ marginLeft: 30 }} name="settings-sharp" size={28} color="black" />
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 20 }}>General Settings</Text>
          <AntDesign style={{ marginLeft: 162 }} name="rightcircle" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Profile;
