import React from 'react'
import { Text, Image,  View} from 'react-native'
import { useAuth } from './useAuth'
import { styles } from '../../constants'

const cards = [
    {
        id: 'wefwef3',
        number: '4562 1122 4595 7852',
        type: 'Mastercard',
        balance: 92510,
    },
    {
        id: 'wefwef2',
        number: '4562 1144 4595 7852',
        type: 'Visa',
        balance: 82354,
    },
    {
        id: 'wefwef23',
        number: '4562 1144 4580 7852',
        type: 'Maestro',
        balance: 96510,
    }


]


const Cards = () => {
    const {user} = useAuth()
    return (
        <View style={{
            marginTop: 50 ,
            position: 'relative',
            height: 290 ,
            overflow: 'hidden',
        }}>

            {
                cards.map((card, idx) => (
                    <View key={card.id} style={{
                        backgroundColor: '#289256',
                        borderRadius: 30,
                        padding: 20,
                        position: idx !== 0 ? 'absolute' : 'relative',
                        top: idx === 1 ? 14 : idx === 2 ? 33 : 0,
                        left: idx === 1 ? 5 : idx === 2 ? 5 : 0,
                        width: '100%',
                        zIndex: idx === 1 ? 2 : idx === 2 ? 1 : 3,
                        shadowColor: 'black',
                        transform: [
                            {
                              rotate: idx === 1 ? '10deg' : idx === 2 ? '18deg' : '0deg',
                            },
                          ],

                          ...styles.boxShadow,
                         
                        }}
                        >


                        <Image source={require('./../../images/105603.png')} style={{width: 40, height: 40,  }} />
                        <Text style={{ color: 'white', fontSize: 24, marginVertical: 20 }}>{card.number}</Text>

                        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}>
                            <View>
                                <Text style={{
                                    color: 'white',
                                    textTransform: 'uppercase',
                                    fontSize: 10,
                                    marginBottom: 6,
                                    
                                }}
                                >Card Holder</Text>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    {user.email}</Text>
                            </View>
                            <View>
                                <Image source={require('./../../images/mastercard.png')} style={{width: 69, height: 63, }} />
                                
                            </View>

                        </View>
                        
                    </View>
                ))
            }

        </View>
    )
}

export default Cards 