import React from 'react'
import { View, Text ,StyleSheet , TextInput,Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
export default function Login() {
    return (
        <View style= {styles.container}>
          <Animatable.View  animation = {"bounceIn"} style = {styles.topContainer}>
<Image style = {styles.logo}  source = {require('../asset/image/logo.png')} />
<Text style = {styles.loginTxt}>Login</Text>
          </Animatable.View >
          <Animatable.View animation = {"fadeInUp"}>
          <Ainput source = {require('../asset/image/email.png')} placeholder= {"Email"} />
          <Ainput source = {require('../asset/image/password.png')} placeholder= {"Password"} />
          <View style= {styles.ForgotPwdView}>
<Text style= {styles.ForgotTxt}>Forgot Password ?</Text>
          </View>
          <LinearGradient colors={['#FFA500', '#FFD580']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
          </Animatable.View>
      

<Animatable.View animation = {'fadeIn'} style = {styles.bottomView}>
<Text style = {styles.bottomTxt1}> Already have a account ? <Text style = {styles.bottomRegisterTxt}> Register</Text></Text>
</Animatable.View >
        </View>
    )
}


export const Ainput = ({ source = "" , placeholder = ""}) =>{

    return(
        <View style = {styles.TxtInputView}>
            <Image style = {styles.iconStyle} source = {source} />
        <TextInput placeholder = {placeholder} style = {styles.TxtInput} />
    </View>
    )

}

const styles = StyleSheet.create({
    container :{
        height :"100%",
        width :"100%" ,
        backgroundColor :"#fff"
    },
    topContainer :{
        height : 300 , 
        width : "100%",
        backgroundColor : "#FFA500",
        borderBottomLeftRadius : 80 ,
        alignItems :'center',
        justifyContent :'center'
    }
    ,
    logo:{
        height : 80, 
        width : 80,
        resizeMode :'contain',
        tintColor :"#fff"
    },
    loginTxt :{
        position :'absolute',
        top : 240 , 
        right : 50,
        color :"#fff",
        fontSize : 25,
        fontWeight : "600"
    },
    TxtInputView:{
        height : 45,
        borderColor : "#999999" ,
        borderWidth : 1,
        marginTop : 20,
        marginHorizontal : 20,
        borderRadius : 15,
        flexDirection :'row' ,
        alignItems :'center',
        justifyContent :'space-evenly' ,
        
    },
    iconStyle:{
        height : 15 , 
        width : "10%" , 
        resizeMode :'contain',
        tintColor :"#999999"
    },
    TxtInput:{
        width :"80%",
        // backgroundColor :"#000"
    },
    ForgotPwdView:{
        flexDirection :'row-reverse' ,
        width : "100%",
        paddingHorizontal :20,
        marginTop :10
    },
    ForgotTxt:{
        color :"#999999",
        fontSize : 18
    },
    linearGradient:{
        height : 45,
        marginHorizontal : 20 ,
        borderRadius : 23,
        alignItems :'center',
        justifyContent :'center',
        marginTop : 100
    }
    ,
    buttonText:{
        color :"#fff",
        fontSize : 18,
        fontWeight :"600"

    },
    bottomView:{
        position :"absolute",
        bottom : 0 , 
        width : "100%",
        alignItems :'center',
        justifyContent :'center',
        backgroundColor :"#fff",
        marginBottom : 20
    },
    bottomTxt1:{
        fontSize : 16 ,
        color :"#000",
    },
    bottomRegisterTxt:{
        color :"#FFA500",
        fontSize : 16 ,

    }
})
