import React from "react";
import { Dimensions, View, Image, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import GLOBALS from "../constants/globals";
import _ from "lodash";
import { Table, Row, Rows } from "react-native-table-component";
import AsyncStorage from "@react-native-community/async-storage";
import Arr from "../Data/subscription";
import SelectButton from "../components/Button/Button";
import SubscriptionButton from "../components/SubscriptionButton";
import HeaderText from "../components/headerText";
import Button from "../components/button";
const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
//import { WebView } from "react-native-webview";
import { WebView } from "react-native-webview";

let _this;

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    _this = this;

    this.state = {
      tableHead: ["Title", "Status"],
      mainColor: "",
      secondColor: "",
      option: 1,
      test: "",
      yearFlag: false,
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        height: 50,
        borderBottomWidth: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
      },
      headerTitle: (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            style={{ width: "auto", height: 50, resizeMode: "contain" }}
            source={require("../assets/img/logo-dark.png")}
          />
        </View>
      ),
      headerLeft: <View style={styles.invisibleBlock}></View>,
      headerRight: <View style={styles.invisibleBlock}></View>,
    };
  };

  async componentWillMount() {
    try {
      let mc = await AsyncStorage.getItem("main_color");
      let sc = await AsyncStorage.getItem("secondary_color");

      _this.setState({
        mainColor: mc,
        secondColor: sc,
      });

      _this.setState({
        tableHead: ["Title", "status"],
        test: this.props.navigation.state.params.link,
      });
    } catch (e) {
      console.log(e);
    }
  }
  TriggerFlag() {
    this.setState({ yearFlag: !this.state.yearFlag });
  }

  componentDidMount() {}
  onMessage(e) {
    let data = e.nativeEvent.data;
    console.log(data);
    let payment = JSON.parse(data);
    if (payment.status === "COMPLETED") {
      alert("PAYMENT MADE SUCCESSFULLY!");
    } else {
      alert("PAYMENT FAILED. PLEASE TRY AGAIN.");
    }
    _this.props.navigation.pop(1);
  }

  render() {
    return (
      //   <View style={styles.container}>
      <WebView
        useWebKit={true}
        source={{ uri: _this.state.test }}
        style={{ flex: 1, width: "100%", height: "100%" }}
        onLoadStart={() => {}}
        onLoadProgress={() => {}}
        onLoadEnd={() => {}}
        onLoad={() => {}}
        onMessage={_this.onMessage}
      />
      //   </View>
    );
  }
}

const styles = EStyleSheet.create({
  head: { height: 60, backgroundColor: "#6b99e1" },
  text: { margin: 6, textAlign: "center", fontSize: 15 },
  headerText: { margin: 6, textAlign: "center", fontSize: 18, color: "white" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },

  content: {
    position: "absolute",
    top: 50,
    left: 50,
  },

  mainTitle: {
    fontSize: "14rem",
    fontWeight: "700",
    paddingTop: "20rem",
    paddingBottom: "20rem",
    color: GLOBALS.COLOR.title,
    borderBottomColor: GLOBALS.COLOR.gray88,
    borderBottomWidth: "1rem",
    borderStyle: "solid",
    borderTopWidth: "1rem",
  },

  svgStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "34rem",
    height: "34rem",
    borderColor: GLOBALS.COLOR.gray88,
    borderRadius: 34,
    borderWidth: 1,
    marginLeft: "10rem",
    marginRight: "10rem",
  },

  invisibleBlock: {
    width: "30rem",
  },

  indicatorWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: "10rem",
    height: "60rem",
  },

  indicatorWrapEmpty: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: "10rem",
  },

  similarWrap: {
    paddingTop: "20rem",
    paddingBottom: "20rem",
    paddingLeft: "10rem",
    backgroundColor: GLOBALS.COLOR.title,
  },

  similarMainTitle: {
    marginTop: "10rem",
    marginBottom: "30rem",
    marginLeft: "10rem",
    marginRight: "20rem",
    color: GLOBALS.COLOR.white,
    fontSize: "14rem",
    fontWeight: "600",
  },

  similarItemWrap: {
    width: "150rem",
    marginLeft: "10rem",
    marginRight: "10rem",
  },

  similarImgWrap: {
    position: "relative",
  },

  similarImg: {
    height: "100rem",
  },

  similarPriceWrap: {
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  similarPrice: {
    fontSize: "14rem",
    color: GLOBALS.COLOR.white,
    fontWeight: "700",
  },

  similarTitleWrap: {
    flex: 1,
    backgroundColor: GLOBALS.COLOR.dark,
    padding: "12rem",
  },

  similarTitle: {
    fontSize: "12rem",
    fontWeight: "500",
    color: GLOBALS.COLOR.white,
  },

  recentWrap: {
    paddingLeft: "20rem",
    paddingRight: "20rem",
  },
});
