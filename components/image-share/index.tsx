import { useImageShare } from "@/hooks/image-share/useImageShare";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default () => {
  const {
    state: { uri },
    resetUri,
    shareImage,
    openImageLibrary,
  } = useImageShare();

  if (uri) {
    return (
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.thumbnail} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.mr10]}
            onPress={shareImage}
          >
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.mr10]}
            onPress={openImageLibrary}
          >
            <Text style={styles.buttonText}>Reselect</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetUri}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/image-share/init.png")} />
      <Text style={styles.text}>Share the phone image with friends</Text>
      <TouchableOpacity style={styles.button} onPress={openImageLibrary}>
        <Text style={styles.buttonText}>Share Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    color: "#666",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    marginTop: 10,
  },
  mr10: {
    marginRight: 10,
  },
});
