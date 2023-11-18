import React from 'react'
import { View, Text } from 'react-native'

import styles from './welcome.style'

interface WelcomeProps {

}

const Welcome: React.FC<WelcomeProps> = ({ }) => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome