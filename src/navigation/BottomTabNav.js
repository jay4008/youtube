import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator    screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }} >
            <Tab.Screen name="Home" component={HomeScreen}    options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
           <Image style = {{height : size , width : size  , tintColor  : color}} source = {require('../asset/image/edit.png')} />
          ),
        }}/>
            <Tab.Screen name="Settings" component={SettingsScreen}  options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
           <Image style = {{height : size , width : size  , tintColor  : color}} source = {require('../asset/image/email.png')} />
          ),
        }}  />
            <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
           <Image style = {{height : size , width : size  , tintColor  : color}} source = {require('../asset/image/avtar.png')} />
          ),
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