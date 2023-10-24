import { ScrollView, Text, Image, View } from 'react-native';
import CardProduto from '../components/card.js';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/produtos")
    .then(resp => setProdutos(resp.data))
  }, [])

    return (
      <View>
          <Image style={styles.app}   source={require('./apptev.jpg')} />
      <View style={styles.containerBetween}>
            <Text style={styles.subtitle}>Pacientes</Text>
            <ScrollView style={styles.scroll}>

              {produtos.map(produto => <CardProduto key={produto.id} produto={produto} />)}

            </ScrollView>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
  subtitle:{
    fontSize:28,
  },
  containerBetween: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },

  cardProduto: {
    borderColor: '#121A2C55',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 5,
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  app: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
  scroll: {
   width: '100%',
  }

})