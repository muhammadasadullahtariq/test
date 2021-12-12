import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import Arr from "../Data/subscription";

function screen(props) {
  const [tableHead, setTableHead] = useState(["Title", "status"]);
  return (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={Arr[0]} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default screen;
