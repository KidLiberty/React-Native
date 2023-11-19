import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { JobResponseObject } from '../../../../types/JobResponseObject'

import styles from './nearbyjobcard.style'

interface NearbyJobCardProps {
  job: JobResponseObject
  handleNavigate: () => void
}

const PopularJobCard: React.FC<NearbyJobCardProps> = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate()}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: job.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard