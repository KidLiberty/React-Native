import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/useFetch'
import { JobResponseObject } from '../../../types/JobResponseObject'

interface PopularjobsProps { }

const Popularjobs: React.FC<PopularjobsProps> = () => {
  const router = useRouter()
  const { data, isLoading, error } = useFetch('search', { query: 'React developer', page: 1, num_pages: 1 })

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item, }) => (
              <PopularJobCard item={item} selectedJob={''} handleCardPress={() => { }} />
            )}
            keyExtractor={(item: JobResponseObject) => item.job_id!}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs