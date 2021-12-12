import React from "react";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";

const component = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => props.onPress(props.user)}
    >
      <Text
        style={[
          {
            padding: 14,
            height: 50,
            fontFamily: "Montserrat",
            fontSize: 15,
            borderWidth: 1,
            borderColor: "#6b99e1",
            backgroundColor: props.flag ? "white" : "#6b99e1",
            borderRadius: 30,
            alignSelf: "center",
            alignItems: "center",
            textAlign: "center",
            color: props.flag ? "#6b99e1" : "white",
            marginBottom: 10,
            width: 150,
            overflow: "hidden",
          },
          props.style,
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    // padding: 10,
    // borderWidth: 1,
    // borderColor: '#2097f5',
    // {backgroundColor:props.flag==true? 'white':'#2097f5'},
    // borderRadius: 10,
    // alignSelf: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    // color: '#2097f5',
    // marginBottom: 10,
  },
});

export default component;
