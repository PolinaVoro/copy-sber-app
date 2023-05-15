
import React, {useState} from 'react';
import { View } from 'react-native';
import Balance from './src/components/Balance'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Cards from './src/components/Cards'
import {colors } from './constants'
import QuickActions from './src/components/QuickActions';
import { useAuth } from './src/components/useAuth';

import AuthForm from './src/components/AuthForm' 
import Logout from './src/components/Logout';


export default function App() {

  const { isLoggedIn, user } = useAuth()

  const [cards, setCards] = useState([])


  return (
		<View
			style={{
				padding: 24,
				paddingTop: 55,
				paddingBottom: 90,
				backgroundColor: colors.BG_GRAY,
				height: '100%',
			}}
		>
			<View>
				{isLoggedIn ? (
					<>
						<Header />
						<Cards cards={cards} />
						<Balance cards={cards} />
						<QuickActions />
						<Logout />
						<Footer />
					</>
				) : (
					<AuthForm />
				)}
			</View>
		</View>
	)
}


