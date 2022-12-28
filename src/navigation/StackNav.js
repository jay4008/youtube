import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
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
import { useState } from 'react/cjs/react.development';
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerStyle: { backgroundColor: "#999999" } }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Notifications" component={Notifications} options={({ route, navigation }) => {
                return {
                    headerStyle: { backgroundColor: '#b4b4b4' },
                    headerTitle: route.params.screenName,
                    headerRight: () => <Avtar />

                    ,
                    headerLeft: () => <BackBtn />

                    ,

                }
            }} />
            <Stack.Screen name="Profile" component={Profile}

                options={({ route, navigation }) => {
                    return {
                        headerStyle: { backgroundColor: '#b4b4b4' },
                        headerTitle: route.params.screenName,
                        headerRight: () => <Avtar source={require('../asset/image/edit.png')} />

                        ,
                        headerLeft: () => <BackBtn />,
                        // header : ( ) => <Text> jay shah</Text>



                    }
                }}

            />
            <Stack.Screen name="Settings" component={Settings} options={{
                headerTitle: "Something else",
                headerTintColor: 'red',
                headerRight: () => <Avtar />
            }} />
        </Stack.Navigator>
    );
}

const Home = (props) => {
    const AlertCall = () =>{
        Alert.alert("Hello " , "Welcome to My Chennel")
    }
const [data , setData] = useState([])
    const ApiCall = () =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json =>  {
          console.log(json) 
          setData(json)
        
        })

    }

    useEffect(() =>{
        ApiCall()
    },[])

    return (
        <View>
            <Text onPress={() => props.navigation.navigate("Notifications", { screenName: "Code with js"  , AlertCall: AlertCall , data : data})}>
                {
                    "Home"
                }
            </Text>
        </View>
    )
}


const Notifications = (props) => {
const { navigation , route  } = props

    const renderItem = ({item , index}) =>{
        return(
            <View style = {{padding : 20}}>
                <Text>
                    {item.title}
                </Text>
                <View style = {{backgroundColor :item.completed ? 'green' :'red' , height : 30 , width : 30}}>

                </View>
            </View>
        )
    }
    return (
        <View style = {{flex : 1}}>
            <Text onPress={() => navigation.navigate("Profile", { screenName: "Suscribe my Chennel" })}>
                {
                    "Notifications"
                }
            </Text>
            <TouchableOpacity onPress = {() => route.params.AlertCall()}>
                <Text> Alert Call </Text>
            </TouchableOpacity>
            <FlatList keyExtractor = {(item , index) => item.id} data = {route.params.data } style = {{ backgroundColor :"#fff"}} renderItem = {renderItem}>

            </FlatList>
        </View>
    )
}



const Profile = () => {

    const navigation = useNavigation()
    return (
        <View>
            <Text onPress={() => navigation.navigate("Settings")}>
                {
                    "Profile"
                }
            </Text>
        </View>
    )
}


const Settings = () => {
    return (
        <View>
            <Text>
                {
                    "Settings"
                }
            </Text>
        </View>
    )
}


const Avtar = ({ source = require('../asset/image/avtar.png') }) => {
    return (
        <View>
            <Image style={{ height: 30, width: 30, resizeMode: 'contain', marginRight: 10 }} source={source} />
        </View>
    )
}


const BackBtn = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ height: 30, width: 30, resizeMode: 'contain', marginLeft: 10 }} source={require('../asset/image/back.png')} />
        </TouchableOpacity>
    )
}


export default MyStack;