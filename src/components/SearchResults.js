import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  Dimensions,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
const entireScreenWidth = Dimensions.get("window").width;
import GLOBALS from "../constants/globals";
import Ico from "./Ico";
import GridViewItem from "./GridViewItemComponent";
import ListViewItem from "./ListViewItemComponent";

let requestSended = false;

function screen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        {_.map(props.filterData, function (val, key) {
          let str = "";

          if (typeof val != "object") {
            str = val;
          } else {
            let i = 0;
            _.map(val, function (v, k) {
              if (i != 0) str += ", ";

              str += v;

              i += 1;
            });
          }

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={key}
              onPress={() => {
                props._deleteFilterParam(key, val);
              }}
            >
              <View style={styles.filterItem}>
                <Text style={styles.filterTitle}>{str}</Text>
                <Ico
                  style={styles.IcoStyle}
                  icoName="lnr-cross"
                  icoSize={13}
                  icoColor={GLOBALS.COLOR.gray88}
                ></Ico>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {props.dataListings != "" ? (
        props.inventoryView == "inventory_view_list" ? (
          <FlatList
            style={styles.flatStyle}
            data={props.dataListings}
            extraData={this.state}
            onEndReachedThreshold={0.5}
            onEndReached={({ distanceFromEnd }) => {
              if (!requestSended) {
                requestSended = true;
                props._loadListings();
              }
            }}
            renderItem={({ item }) => (
              <ListViewItem
                navigation={props.navigation}
                invId={item.ID}
                featureImg={item.imgUrl}
                title={item.list.title}
                price={item.price}
                imgsSrc={item.gallery}
                imgsNum={item.imgCount}
                infOneIcon={item.list.infoOneIcon}
                infOneTitle={item.list.infoOneTitle}
                infOneDesc={item.list.infoOneDesc}
                infTwoIcon={item.list.infoTwoIcon}
                infTwoTitle={item.list.infoTwoTitle}
                infTwoDesc={item.list.infoTwoDesc}
                infThreeIcon={item.list.infoThreeIcon}
                infThreeTitle={item.list.infoThreeTitle}
                infThreeDesc={item.list.infoThreeDesc}
                infFourIcon={item.list.infoFourIcon}
                infFourTitle={item.list.infoFourTitle}
                infFourDesc={item.list.infoFourDesc}
                hasPadding={false}
                doReplace={false}
              />
            )}
            ListFooterComponent={props._footerComponent()}
            keyExtractor={({ item }, index) => index.toString()}
          />
        ) : (
          <FlatList
            style={styles.flatStyle}
            data={props.dataListings}
            extraData={this.state}
            onEndReachedThreshold={0.5}
            onEndReached={({ distanceFromEnd }) => {
              if (!requestSended) {
                requestSended = true;
                props._loadListings();
              }
            }}
            ListFooterComponent={props._footerComponent()}
            renderItem={({ item }) => (
              <GridViewItem
                navigation={props.navigation}
                invId={item.ID}
                featureImg={item.imgUrl}
                title={item.grid.title}
                subtitle={item.grid.subTitle}
                price={item.price}
                imgsSrc={item.gallery}
                imgsNum={item.imgCount}
                infIcon={item.grid.infoIcon}
                infTitle={item.grid.infoTitle}
                infDesc={item.grid.infoDesc}
              />
            )}
            keyExtractor={({ item }, index) => index.toString()}
          />
        )
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>{"No Result Found"}</Text>
        </View>
      )}
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    position: "absolute",
    top: 50,
    left: 50,
  },

  invisibleBlock: {
    width: "30rem",
  },

  appMainTitle: {
    flex: 1,
    justifyContent: "center",
  },

  center: {
    textAlign: "center",
  },

  indicatorWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: "10rem",
    height: "60rem",
  },

  flatStyle: {
    flex: 1,
    padding: "20rem",
    height: "100%",
  },

  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "15rem",
    paddingRight: "15rem",
    marginTop: "10rem",
  },

  filterItem: {
    width: "auto",
    height: "30rem",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "6rem",
    paddingBottom: "6rem",
    paddingLeft: "13rem",
    paddingRight: "10rem",
    margin: 5,
    borderRadius: "15rem",
    backgroundColor: GLOBALS.COLOR.bg,
  },

  IcoStyle: {
    paddingTop: 2,
    marginLeft: "7rem",
  },

  filterTitle: {
    fontSize: "15rem",
    color: GLOBALS.COLOR.gray88,
    marginRight: 5,
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
});

export default screen;
