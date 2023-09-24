import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";
import Toast from "react-native-root-toast";
import React from "react";
import PlaySvg from "../../assets/icon/play.svg";
import PointSvg from "../../assets/icon/point.svg";

const DeviceCard = ({ navigation }) => {


  return (
    <View>
      <Card style={{ margin: 20 }}>
        <View style={styles.top}>
          <Text style={styles.title}>A区域</Text>
          <View style={styles.action}>
            <TouchableOpacity
              onPress={() => {
                Toast.show("全部设备");
              }}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <PlaySvg width={40} height={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Toast.show("功能菜单");
            }}>
              <Image
                source={require("../../assets/icon/menu.png")}
                style={{ width: 30, height: 30, margin: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Card.Content>
          <Card style={{ marginHorizontal: 5, backgroundColor: "#BDBABE" }}>
            <View style={styles.top}>
              <Text style={styles.title}>a设备</Text>
              <TouchableOpacity
                onPress={() => {
                  Toast.show("设备选项");
                }}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <PointSvg width={22} height={22} margin={10} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                Toast.show("测试视频");
              }}
            >
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
              />
            </TouchableOpacity>
          </Card>
        </Card.Content>
      </Card>
    </View>
  );
};

export default DeviceCard;

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#000",
    fontSize: 26,
    margin: 10,
  },
  action: {
    flexDirection: "row",
  },
});

