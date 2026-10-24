
import axios from 'axios';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {

  const [valorApi, setValorApi] = useState<any[]> ([])

  const chamaApi = async () => {
       await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then((resp) => {
        setValorApi(resp.data.meals)
       })
        
  }

    useEffect(() => {
        chamaApi()
    }, [])

  return (

    <View style={estile.container}>
        <FlatList
          data={valorApi}
          renderItem={({item}) => (
            <TouchableOpacity style={estile.content}
                onPress={() => router.push({
                   pathname: '/detalhes',
                    params: { 
                    nome: item.strMeal,            
                    imagem: item.strMealThumb
                    }
                  })}
                    >
            <View style={estile.content}>
              <Image 
                source = {{uri: item.strMealThumb}}
                style={{height: 150, width:150}} 
              />

             <Text>{item.strMeal}</Text>
             </View>
               </TouchableOpacity>
                
          )}

           />
        </View>
    
  );
}

  const estile = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    content: {
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#74c5e0'
    }
      

  })

