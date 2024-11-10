import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as ImageShare from "expo-sharing";
import { Platform } from "react-native";

export function useImageShare() {
  const [uri, setUri] = useState("");

  const resetUri = () => setUri("");

  const shareImage = async () => {
    if (Platform.OS === "web") {
      alert("Sorry, we don't support sharing images on web");
      return;
    }
    await ImageShare.shareAsync(uri);
  };

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // 相册未授权
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to share your photos");
      return;
    }
    // 选择图片
    const picker = await ImagePicker.launchImageLibraryAsync();
    if (!picker.canceled) {
      setUri(picker.assets[0].uri);
    }
  };

  return {
    state: {
      uri,
    },
    resetUri,
    shareImage,
    openImageLibrary,
  };
}
