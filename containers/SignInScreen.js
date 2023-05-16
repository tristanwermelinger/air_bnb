import { useNavigation } from "@react-navigation/core";
import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import axios from "axios";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <Text>Name: </Text>
        <TextInput placeholder="Username" />
        <Text>Password: </Text>
        <TextInput placeholder="Password" secureTextEntry={true} />
        <Button
          title="Sign in"
          onPress={async () => {
            const userToken = "secret-token";
            setToken(userToken);

            const response = await axios.post(
              "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
              {
                email: email,
                password: password,
              }
            );
            console.log(response.data);
            setData(response.data);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>No account ? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
