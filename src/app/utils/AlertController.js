import { Alert } from "react-native";

export default AlertController = {

    /** Method to show alert with two options : OK/Cancel
     * @param title title of the alert
     * @param message message of the alert
     */

    confirmAlert(title, message) {
        return new Promise((resolve, reject) => {
            Alert.alert(
                title.toString(),
                message.toString(),
                [
                    {
                        text: "Cancel",
                        onPress: () => {
                            console.log("Cancel Pressed")
                            resolve(false)
                        },
                        style: "cancel"
                    },
                    {
                        text: "OK", onPress: () => {
                            console.log("OK Pressed")
                            resolve(true)
                        }
                    }
                ],
                { cancelable: false });
        });
    },

    /** Method to show alert with OK option
    * @param title title of the alert
    * @param message message of the alert
    */

    alert(title, message) {
        return new Promise((resolve, reject) => {
            Alert.alert(
                title.toString(),
                message.toString(),
                [
                    {
                        text: "OK", onPress: () => {
                            console.log("OK Pressed");
                            resolve(true);
                        }
                    }
                ],
                { cancelable: false });
        });
    }

}