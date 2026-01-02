import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const LoginDetails = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigation= useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Email Input */}
      <View style={styles.inputBox}>
        <Icon name="email-outline" size={22} color="#000" />
        <TextInput
          placeholder="Email/ Mobile No"
          placeholderTextColor="#777"
          style={styles.input}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputBox}>
        <Icon name="lock-outline" size={22} color="#000" />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry={!showPassword}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{ paddingHorizontal: 5 }}
        >
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ProfileSetUp')}>
        <Text style={styles.nextText}>Login</Text>
      </TouchableOpacity>

      {/* Cancel */}
      <TouchableOpacity>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 50,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
  },

  inputBox: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#6EC16E',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 18,
    backgroundColor: '#fff',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },

  nextButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#248907',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  nextText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

  cancelText: {
    marginTop: 20,
    fontSize: 17,
    color: '#000',
    textAlign: 'center',
  },
});
