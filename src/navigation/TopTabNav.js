import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    Button,
    FlatList,
    Dimensions, TouchableOpacity, Alert
} from 'react-native';


function MyTabs() {
  return (
    <Tab.Navigator   screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "#fff" },
      }}>
      <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{
          tabBarLabel: 'Settings',
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
        }} />
    </Tab.Navigator>
  );
}


const HomeScreen = () => {
    return (
        <View style = {{ flex : 1, alignItems :'center' , justifyContent :'center' }}>
            <Text style = {{fontSize : 24}}>
                HomeScreen
            </Text>
        </View>
    )
}


const SettingsScreen = () => {
    return (
        <View style = {{ flex : 1, alignItems :'center' , justifyContent :'center' }}>
            <Text style = {{fontSize : 24}}>
            SettingsScreen
            </Text>
        </View>
    )
}


const Profile = () => {
    return (
        <View style = {{ flex : 1, alignItems :'center' , justifyContent :'center' }}>
            <Text style = {{fontSize : 24}}>
            Profile
            </Text>
        </View>
    )
}


export default MyTabs;