import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

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

          {/*</View>*/}
          {/*<View style={styles.second}>*/}


          {/*</View>*/}
          {/*<View style={styles.main}>*/}

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
    },
  )
;
