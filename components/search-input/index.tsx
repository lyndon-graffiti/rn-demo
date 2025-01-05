import React from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SearchInput = () => {
  const [text, setText] = useState<string>("");

  const [isShow, setIsShow] = useState<boolean>(false);

  // 展开联想
  const showOptions = (t: string) => {
    setText(t);
    setIsShow(true);
  };

  // 收起联想
  const hideOptions = (t: string) => {
    setText(t);
    setIsShow(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputStyle}
          returnKeyType="search"
          value={text}
          onChangeText={(t) => showOptions(t)}
        />
        <View style={styles.btnStyle}>
          <Text style={styles.search}>Search</Text>
        </View>
      </View>
      {/* 搜索联想 */}
      {isShow ? (
        <View style={styles.resultStyle}>
          <Text
            style={styles.itemStyle}
            numberOfLines={1}
            onPress={() => hideOptions(`${text}省份`)}
          >
            {text}省份
          </Text>
          <Text
            style={styles.itemStyle}
            numberOfLines={1}
            onPress={() => hideOptions(`${text}城市`)}
          >
            {text}城市
          </Text>
          <Text
            style={styles.itemStyle}
            numberOfLines={1}
            onPress={() => hideOptions(`${text}城市`)}
          >
            {text}行政区
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 25,
  },
  searchContainer: {
    height: 45,
    flexDirection: "row",
  },
  inputStyle: {
    height: 45,
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    marginLeft: 10,
    paddingLeft: 5,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  btnStyle: {
    width: 80,
    marginTop: 20,
    marginLeft: -5,
    marginRight: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#23BEFF",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  resultStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    borderColor: "#ccc",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  itemStyle: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderTopWidth: 0,
  },
});

export default SearchInput;
