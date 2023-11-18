import React from 'react'
import { View, Text } from 'react-native'

import styles from './nearbyjobcard.style'
import { JobResponseObject } from '../../../../types/JobResponseObject'

interface NearbyJobCardProps {
  job: JobResponseObject
  handleNavigate: () => void
}

const NearbyJobCard: React.FC<NearbyJobCardProps> = ({ job, handleNavigate }) => {
  return (
    <View>
      <Text>NearbyJobCard</Text>
    </View>
  )
}

export default NearbyJobCard