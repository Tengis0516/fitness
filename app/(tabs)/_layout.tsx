// eslint-disable-next-line import/no-duplicates
import { Entypo } from '@expo/vector-icons';
// eslint-disable-next-line import/no-duplicates
import { MaterialCommunityIcons } from '@expo/vector-icons';
// eslint-disable-next-line import/no-duplicates
import { MaterialIcons } from '@expo/vector-icons';
// eslint-disable-next-line import/no-duplicates
// import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: 'black' } }}
      sceneContainerStyle={{ backgroundColor: 'black' }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="white" />,
          tabBarLabel: 'home',
        }}
      />
      <Tabs.Screen
        name="daily"
        options={{
          tabBarIcon: () => <Entypo name="calendar" size={24} color="white" />,
          tabBarLabel: 'exercise',
        }}
      />
      <Tabs.Screen
        name="photo"
        options={{
          tabBarIcon: () => <MaterialIcons name="add-to-photos" size={24} color="white" />,
          tabBarLabel: 'photo',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color="white" />,
          tabBarLabel: 'profile',
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
