import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { ImageSourcePropType } from 'react-native'

import styles from './screenheader.style'

type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType
  dimension: string
  handlePress?: () => void
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn