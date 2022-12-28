import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

export default function FlatListExample() {
    const [load, setLoad] = useState(false)
    const [data, setData] = useState([{
        name: "Jay Shah",
        image: require('../asset/image/1.jpg')
    },
    {
        name: "Koushik Paul",
        image: require('../asset/image/2.jpg')
    },
    {
        name: "Suraj Gupta",
        image: require('../asset/image/3.jpg')
    },
    {
        name: "Rupa Gupta",
        image: require('../asset/image/4.jpg')
    },

    {
        name: "Riti Singh",
        image: require('../asset/image/5.jpg')
    },
    {
        name: "Priya Verma",
        image: require('../asset/image/6.jpg')
    },
    {
        name: "Vijay singh",
        image: require('../asset/image/7.jpg')
    },
    {
        name: "Krishna Verma",
        image: require('../asset/image/8.jpg')
    },

    ])


    const renderItem = (item, index) => {
        return (
            <View style={styles.listingView}>

                <Image style={styles.profileImg} source={item.image} />
                <View style={styles.textView}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={{ ...styles.name, fontWeight: '400' }}>{"Please Suscribe my Channel"}</Text>
                </View>
                <View style={{ height: 10, width: 10, borderRadius: 8, backgroundColor: index % 2 === 0 ? "red" : index % 3 === 0 ? "green" : "yellow", position: 'absolute', top: 50, left: 50 }}></View>
            </View>
        )
    }
    return (
        <View>

            <FlatList
                data={data}
                renderItem={({ item, index }) => renderItem(item, index)}
                ListHeaderComponent={() => (
                    <View style={{ height: 100, width: "100%", backgroundColor: "red" }} />

                )}
                onEndReached={() => {


                    setLoad(true)
                    setTimeout(() => {
                        setLoad(false)
                    }, 2000);

                    // let newData = [...data , ...data.splice(0,5)];
                    let newData = [...data]
                    for (let index = 0; index < 5; index++) {
                        newData.push(data[index])

                    }
                    setData(newData)
                }}
                ListFooterComponent={() => {
                    return (
                        <View>
                            {
                                !load ? <Text onPress={() => {
                                    setLoad(true)
                                    setTimeout(() => {
                                        setLoad(false)
                                    }, 2000);

                                    // let newData = [...data , ...data.splice(0,5)];
                                    let newData = [...data]
                                    for (let index = 0; index < 5; index++) {
                                        newData.push(data[index])

                                    }
                                    setData(newData)

                                }} style={{ textAlign: 'center' }}> Load More </Text> : <View>
                                    <ActivityIndicator size={"small"} color={"#000"} />
                                </View>
                            }

                        </View>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    listingView: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start'

    },
    profileImg: {
        height: 45, width: 45, resizeMode: "contain", borderRadius: 30
    },
    name: {
        fontSize: 16,
        fontWeight: "600"
    },
    textView: {
        marginLeft: 10
    }
})
