import AsyncStorage from '@react-native-community/async-storage';
import ToastController from "../utils/ToastController";

export default AsyncStorageItem = {

  /** Method to set data in local storage
   * @param key name of the key
   * @param value value for the key
   */

  async setData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
      ToastController.showToastTop(error)
    }
  },

  /** Method to get data from local storage
   * @param key name of the key
   */

  async getData(key) {
    try {
      let value = await AsyncStorage.getItem(key);
      let parsedValue = JSON.parse(value);
      return parsedValue
    }
    catch (error) {
      ToastController.showToastTop(error)
    }
  },

  /** Method to remove key/value according to the key from local storage
   * @param key name of the key
   */

  async removeData(key) {
    try {
      await AsyncStorage.removeItem(key);
    }
    catch (error) {
      ToastController.showToastTop(error)
    }
  },

  /** 
   * Method to clear all data from local storage
  */

  async clearData() {
    try {
      await AsyncStorage.clear();
    }
    catch (error) {
      ToastController.showToastTop(error)
    }
  }

}