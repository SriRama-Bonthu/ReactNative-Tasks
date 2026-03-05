import { useState } from "react";
import { Text,TextInput,HelperText,Card,Button,Icon } from "react-native-paper";
import { View,StyleSheet } from "react-native";
import Iphone from './assets/iPhone-17-Pro-Max-PNG.png'
import OnePlus from './assets/oneplus.webp'
import Samsung from './assets/samsung s25.webp'
import Vivo from './assets/vivo.webp'
import Moto from './assets/moto.png'
import { FlatList,Image } from "react-native";

export default function Cart(){
    const mobilesData=[
        {
            "id":1,
            "brand":"Iphone 17 Pro",
            "color":'orange',
            "Price":'Rs.1,35,000/-',
            "image":Iphone
        },
        {
            "id":2,
            "brand":"OnePlus 13s",
            "color":'orange',
            "Price":'Rs.55,000/-',
            "image":OnePlus
        },
        {
            "id":3,
            "brand":"Samsung S25 ultra",
            "color":'orange',
            "Price":'Rs.1,23,000/-',
            "image":Samsung
        },
        {
            "id":4,
            "brand":"Vivo X200 Pro",
            "color":'orange',
            "Price":'Rs.85,000/-',
            "image":Vivo
        },
        {
            "id":5,
            "brand":"Moto Edge 60 Pro",
            "color":'orange',
            "Price":'Rs.30,000/-',
            "image":Moto
        }
    ]
    return(
        <>
            <FlatList
                data={mobilesData}
                renderItem={({item})=>
                    <Card key={item.id} >
                        <View style={styles.clnView}>
                        <View style={styles.cardView}>
                            <View style={styles.imageView}>
                           <Image style={[{width:'100%'},{height:'100%'}]} resizeMode="contain"  source={item.image} />
                           </View>
                        <View style={styles.rightSide}>
                            <Text style={styles.brandView}>{item.brand}</Text>
                            <Text style={styles.priceView}>{item.Price}</Text>
                        </View>
                        </View>
                        <View style={styles.btns}>
                                <Button mode="contained-tonal" style={styles.btnView} buttonColor="#ffff72e6" icon={'cart'} >Add to Cart</Button>
                                <Button mode='contained' style={styles.btnView} buttonColor="#af6c00" icon={'basket'}>Buy Now</Button>
                        </View>
                        </View>
                        
                    </Card>
                }   
            />
        </>
    )
}

const styles=StyleSheet.create(
    {
        clnView:{
            flexDirection:'column',
            backgroundColor:'#ebebebeb',
            marginBottom:15,
            alignItems:'center',
            paddingBottom:20,
            gap:10
        },
        cardView:{
            backgroundColor:'#ffffffc5',
            // marginBottom:10,
            alignItems:'center',
            // padding:20,
            flexDirection:'row',
            gap:10
        },
        imageView:{
            borderRadius:20,
            // backgroundColor:'orange',
            // objectFit:'scale-down',
            width:180,
            height:150,
            borderRightColor:'#c0c0c0',
             borderRightWidth:1
            
        },
        brandView:{
            flexWrap:'wrap',
            fontSize:25,
            fontWeight:'800'
        },
        priceView:{
            fontSize:15,
            fontWeight:'700',
            margin:5
        },
        rightSide:{
            // backgroundColor:'blue',
            flex:1,
            gap:5
        },
        btns:{
            flex:1,
            gap:10,
            flexDirection:'row'
        },
        btnView:{
            textAlign:'center',
            width:180,
            heigth:50,
            borderRadius:30,
            // backgroundColor:'yellow'
        }

    }
)