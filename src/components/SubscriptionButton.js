import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/AntDesign";

const screen = (props) => {
  //const [bColor, setColor] = useState(AsyncStorage.getItem("main_color"));
  useEffect(() => {}, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.mainContainer, props.viewStyle]}
      onPress={props.onPress}
    >
      <View style={[styles.componentContainer, props.componentStyle]}>
        <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <Text
            style={{
              alignSelf: "center",
              color: "white",
            }}
          >
            {props.text}
          </Text>
          <View style={{ alignSelf: "center", paddingRight: 20 }}>
            <Icon name={"arrowright"} size={15} color={"white"} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: { width: "100%" },
  componentContainer: {
    width: "45%",
    height: 50,
    backgroundColor: "#6b99e1",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

export default screen;
