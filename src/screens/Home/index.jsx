import React from "react";
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import Toast from "react-native-root-toast";
import DeviceCard from "../../components/DeviceCard";


const Index = ({ navigation }) => {

  const image = "../../../assets/img/index.png";
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = query => setSearchQuery(query);


  return (
    <View style={styles.container}>
      <ImageBackground source={require(image)} style={[styles.imageBack]} blurRadius={70}>
        <View style={styles.background}>
          <View style={styles.top}>
            <Searchbar
              placeholder="设备搜索"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.searchBar}
            />
          </View>

          <View style={styles.second}>
            <TouchableOpacity onPress={() => {
              Toast.show("消息");
            }}>
              <Image
                source={require("../../../assets/icon/message.png")}
                style={{ width: 40, height: 40, margin: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              Toast.show("添加");
            }}>
              <Image
                source={require("../../../assets/icon/add.png")}
                style={{ width: 40, height: 40, margin: 5 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <Text style={styles.title}>全部设备</Text>
            <DeviceCard />

          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
      container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
      },
      imageBack: {
        flex: 1,
      },
      background: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      },
      top: {
        marginTop: 40,
        marginHorizontal: 20,
      },
      searchBar: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      },
      second: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: 10,
      },
      title: {
        color: "#000",
        fontSize: 30,
        fontWeight: 700,
        marginHorizontal: 20,
      },
    },
  )
;
