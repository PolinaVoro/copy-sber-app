import React from 'react'
import { Text, Image, TouchableHighlight, View, Linking} from 'react-native';
import { useAuth } from './useAuth';

const Header = () => {

    const { user } = useAuth()


    return (
        <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}
    >
        <View>
            <Text
                style={{
                    color: 'white',
                    fontSize: 24,
                    fontWeight: '700',
                    marginBottom: 6,
                }}
            >
                Hi {user?.email}
            </Text>
            <Text style={{ color: '#A9A9A9' }}>Welcome Back</Text>
        </View>
        <View>
            <TouchableHighlight
                onPress={() => Linking.openURL('https://google.com')}>
                <Image
                    source={{
                        uri: 'https://img.freepik.com/free-vector/cute-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-4639.jpg?w=2000',
                    }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                    }}
                />
            </TouchableHighlight>
        </View>
    </View>

    )
}

export default Header