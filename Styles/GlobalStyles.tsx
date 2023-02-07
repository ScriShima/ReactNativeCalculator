import { StyleSheet } from "react-native";
import { myColor } from "./Colors";

export const Styles = StyleSheet.create({
  btnStyleCommon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: myColor.lightGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },

  btnBGColorOrange: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: myColor.orange,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },

  btnBGColorGrey: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: myColor.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },

  btnBGColorLightGray: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: myColor.lightGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },

  btnZero: {
    width: 170,
    height: 80,
    borderRadius: 34,
    backgroundColor: myColor.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },

  bgGrayOrOrangeTextStyle: {
    fontSize: 36,
    color: myColor.white,
  },

  bgLightGrayTextStyle: {
    fontSize: 36,
    color: myColor.black,
  },

  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },

  screenFirstNumber: {
    fontSize: 96,
    color: myColor.black,
    fontWeight: "200",
    textAlign: "right",
  },

  screenSecondNumber: {
    fontSize: 96,
    color: myColor.lightGray,
    fontWeight: "200",
    textAlign: "right",
  },

  viewBottom: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
