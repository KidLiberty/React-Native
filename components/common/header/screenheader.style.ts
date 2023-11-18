import { StyleSheet } from "react-native";
import { StyleProps } from 'react-native-reanimated';

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create<StyleProps>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension: string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  friend: {
    width: 1
  }
});

export default styles;
