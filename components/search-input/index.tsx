import { useSearchInput } from "@/hooks/saerch-input/useSearchInput";
import { StyleSheet, View, TextInput, Text } from "react-native";

type Props = {
  text: string;
  onPress: (text: string) => void;
};

const SearchOption = (props: Props) => {
  const { text, onPress } = props;
  return (
    <Text
      style={styles.itemStyle}
      numberOfLines={1}
      onPress={() => onPress(text)}
    >
      {text}
    </Text>
  );
};

export default () => {
  const {
    state: { options, searchText, showSearch },
    search,
    hideSearchOptions,
    showSearchOptions,
  } = useSearchInput();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        {/* 输入框 */}
        <TextInput
          style={styles.inputStyle}
          placeholder="Please enter keywords"
          returnKeyType="search"
          value={searchText}
          onChangeText={showSearchOptions}
        />
        {/* 搜索按钮 */}
        <View style={styles.btnStyle}>
          <Text style={styles.search} onPress={search}>
            Search
          </Text>
        </View>
      </View>
      {/* 搜索联想 */}
      {showSearch && (
        <View style={styles.resultStyle}>
          {options.map((item) => (
            <SearchOption key={item} text={item} onPress={hideSearchOptions} />
          ))}
        </View>
      )}
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
