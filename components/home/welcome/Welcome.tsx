import React, { useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes: string[] = ['Full-Time', 'Part-Time', 'Contractor']

interface WelcomeProps { }

const Welcome: React.FC<WelcomeProps> = ({ }) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Brandon</Text>
        <Text style={styles.welcome}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item} // Like web map key
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome