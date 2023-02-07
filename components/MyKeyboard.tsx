import { useState } from "react";
import Button from "./Buttons";
import { View, Text } from "react-native";
import { Styles } from "../Styles/GlobalStyles";
import { myColor } from "../Styles/Colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 9999
              ? [Styles.screenFirstNumber, { color: myColor.black }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColor.black },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }

    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }

    if (firstNumber == "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }

    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={(Styles.screenFirstNumber, { fontSize: 70 })}>
          {firstNumber}
        </Text>
      );
    }

    if (firstNumber.length > 7) {
      return (
        <Text style={(Styles.screenFirstNumber, { fontSize: 50 })}>
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>{secondNumber}</Text>
        <Text style={Styles.screenFirstNumber}>{firstNumberDisplay()}</Text>
      </View>
      <View style={Styles.row}>
        <Button title="AC" isLightGray onPress={clear} />
        <Button
          title="+/-"
          isLightGray
          onPress={() => handleOperationPress("+/-")}
        />
        <Button
          title="%"
          isLightGray
          onPress={() => handleOperationPress("%")}
        />
        <Button title="/" isOrange onPress={() => handleOperationPress("/")} />
      </View>

      <View style={Styles.row}>
        <Button title="7" isGray onPress={() => handleNumberPress("7")} />
        <Button title="8" isGray onPress={() => handleNumberPress("8")} />
        <Button title="9" isGray onPress={() => handleNumberPress("9")} />
        <Button title="x" isOrange onPress={() => handleOperationPress("*")} />
      </View>

      <View style={Styles.row}>
        <Button title="4" isGray onPress={() => handleNumberPress("4")} />
        <Button title="5" isGray onPress={() => handleNumberPress("5")} />
        <Button title="6" isGray onPress={() => handleNumberPress("6")} />
        <Button title="-" isOrange onPress={() => handleOperationPress("-")} />
      </View>

      <View style={Styles.row}>
        <Button title="1" isGray onPress={() => handleNumberPress("1")} />
        <Button title="2" isGray onPress={() => handleNumberPress("2")} />
        <Button title="3" isGray onPress={() => handleNumberPress("3")} />
        <Button title="+" isOrange onPress={() => handleOperationPress("+")} />
      </View>

      <View style={Styles.row}>
        <Button title="0" isBtnZero onPress={() => handleNumberPress("0")} />
        <Button title="." isGray onPress={() => handleNumberPress(".")} />
        <Button title="=" isOrange onPress={() => getResult()} />
      </View>
    </View>
  );
}
