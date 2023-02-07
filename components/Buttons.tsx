import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../Styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isOrange?: boolean;
  isGray?: boolean;
  isLightGray?: boolean;
  isBtnZero?: boolean;
}

export default function Button({
  title,
  onPress,
  isOrange,
  isGray,
  isLightGray,
  isBtnZero,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        isOrange
          ? Styles.btnBGColorOrange
          : isGray
          ? Styles.btnBGColorGrey
          : isLightGray
          ? Styles.btnBGColorLightGray
          : isBtnZero
          ? Styles.btnZero
          : Styles.btnStyleCommon
      }
      onPress={onPress}
    >
      <Text
        style={
          isGray || isOrange || isBtnZero
            ? Styles.bgGrayOrOrangeTextStyle
            : Styles.bgLightGrayTextStyle
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
