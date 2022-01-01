import React from "react";
import { Dimensions, View, Image, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import GLOBALS from "../constants/globals";
import Ico from "../components/Ico";
import _ from "lodash";
import { Table, Row, Rows } from "react-native-table-component";
import Arr from "../Data/subscription";
import Translation from "../helpers/Translation";
import Button from "../components/button";
const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
import Text from "../components/normalText";
import HeaderText from "../components/headerText";

let _this;

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    _this = this;

    this.state = {
      tableHead: ["Title", "Status"],
      mainColor: "",
      secondColor: "",
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

  onPress = (option, link) => {
    _this.props.navigation.navigate("SubscriptionDetaile", {
      option: option,
      link: link,
    });
  };

  async componentWillMount() {
    try {
      let mc = await AsyncStorage.getItem("main_color");
      let sc = await AsyncStorage.getItem("secondary_color");

      _this.setState({
        mainColor: mc,
        secondColor: sc,
      });

      _this.setState({ tableHead: ["Title", "status"] });
    } catch (e) {}
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <HeaderText
            text={"Subscription Plan"}
            componentStyle={{ textAlign: "center" }}
          />
          <Text
            componentStyle={{ textAlign: "center" }}
            text={"We offer three different plan user can Subscribe to any one"}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Button
            onPress={() => _this.onPress(0, "https://gamer-79506.web.app/")}
            text={"QUICK SELLER PLAN"}
          />
          <Button
            onPress={() =>
              _this.onPress(1, "https://gamer-79506.web.app/detail")
            }
            text={"DEALER PLAN"}
          />
          <Button
            onPress={() =>
              _this.onPress(2, "https://gamer-79506.web.app/collections")
            }
            text={"GOLD SELLER PLAN"}
          />
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  container: {
    flex: 3,
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
  searchButton: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: "15rem",
    paddingBottom: "15rem",
    borderRadius: "30rem",
  },

  btnText: {
    fontSize: "15rem",
    color: GLOBALS.COLOR.white,
    fontWeight: "700",
    marginLeft: "10rem",
  },
});
