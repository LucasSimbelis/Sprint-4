import { Image, Text, View, StyleSheet } from 'react-native';

export default function cardPaciente({ produto }) {
    
    return (
        <View style={styles.quadro}>

            <View style={styles.cardPaciente}>
                <Image style={styles.thumb} source={{ uri: produto.imagePath }} />

                <View style={styles.pacienteData}>
                    <Text style={styles.age}>Nome: {produto.nome}</Text>
                    <Text style={styles.age}>Data da consulta: {produto.data}</Text>
                    <Text style={styles.age}>Idade: {produto.idade}</Text>
                    <Text style={styles.age}>Resultado do escore: {produto.escore}</Text>
                </View>
                <Image style={styles.share}   source={require('./transferir.png')} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
      quadro: {
        width: '100%',
      },
      cardPaciente: {
        borderColor: '#121A2C55',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
      },
      pacienteData: {
        flex: 1,
        alignSelf: 'flex-center',
        alignItems: 'center'
      },  
      thumb: {
        width: 200,
        height: 200,
        borderRadius: 4,
      },
      share: {
        width: 75,
        height: 75,
        borderRadius: 4,
      },
      age: {
        color: '#000000',
        fontSize: 28,
      },
      scroll: {
       width: '100%',
      }
    
    })