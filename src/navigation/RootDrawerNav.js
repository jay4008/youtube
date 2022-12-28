import * as React from 'react';
import { Button, View, Text , Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react/cjs/react.development';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button onPress={() => {
      navigation.openDrawer()
  }} title="Open Drawer" />
            <Button onPress={() => navigation.navigate("Profile")} title="Go to the Profile Screen" />
        </View>
    );
}

function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Notification" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    const [indexToCurrentItem, setIndexToCurrentItem] = useState(0)
    return (

        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => {
            return (
                //   <View>
                //       <Text> Drawer Content</Text>
                //   </View>
                <DrawerContentScrollView>
<View style = {{ flexDirection :'row' , alignItems :'center' , margin : 10 , borderBottomWidth : 1 , borderBottomColor :"#999999"}}>
    <Image style = {{ height : 50 , width : 50  ,resizeMode :'contain'}} source = {require ('../asset/image/avtar.png')} />
    <View style = {{marginLeft : 10}}>
        <Text>Jay Shah</Text>
        <Text>jayshah4008@gmail.com</Text>
    </View>
</View>
                    {/* <DrawerItemList {...props} /> */}

                    {
                        ["Home", "Notifications", "Profile" , "Suscription", "Performance" , "Score" ].map((item, index) => (
                            <DrawerItem style={{ backgroundColor: indexToCurrentItem === index ? "#999999" : "#fff" }} onPress={() => {
                                setIndexToCurrentItem(index)
                                props.navigation.navigate(item)
                            }} label={item} labelStyle={{ fontSize: 16, color: "#000" }} />
                        ))
                    }
                    

                    <DrawerItem style={{ backgroundColor: "#fff", marginTop: 100, }} onPress={() => {
                        props.navigation.closeDrawer()
                    }} label={"Log out "} labelStyle={{ fontSize: 16, color: "#000" }} />
                </DrawerContentScrollView>
            )

        }}
            screenOptions={{
                headerShown: false, drawerStyle: {
                    width: 300
                }
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>

    );
}