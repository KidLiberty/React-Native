import { StyleSheet } from "react-native";
import { StyleProps } from 'react-native-reanimated';

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create<StyleProps>({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    // fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    // fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
