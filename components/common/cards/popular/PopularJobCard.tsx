import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { JobResponseObject } from '../../../../types/JobResponseObject'

import styles from './popularjobcard.style'

interface PopularJobCardProps {
  item: JobResponseObject
  selectedJob: string
  handleCardPress: (item: JobResponseObject) => void
}

const PopularJobCard: React.FC<PopularJobCardProps> = ({ item, selectedJob, handleCardPress }: PopularJobCardProps) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.company_name}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard