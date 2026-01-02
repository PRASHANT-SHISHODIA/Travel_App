import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#248907" />

      {/* GREEN HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Account</Text>

        <TouchableOpacity style={styles.headerBell}>
          <Icon name="bell-outline" size={26} color="#fff" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* WHITE CONTAINER FLOATING UP */}
      <View style={styles.contentBox}>

        {/* Photo Circle */}
        <TouchableOpacity style={styles.photoCircle}>
          <Icon name="camera" size={35} color="#000" />
        </TouchableOpacity>

        {/* Email */}
        <View style={styles.inputBox}>
          <Icon name="email-outline" size={22} color="#000" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputBox}>
          <Icon name="lock-outline" size={22} color="#000" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#777"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* Phone Number */}
        <View style={styles.inputBox}>
          <Image
            source={require('../asset/Image/india.png')}
            style={{ width: 25, height: 25, marginRight: 8 }}
          />
          <TouchableOpacity>
            <Icon name="chevron-down" size={22} color="#000" style={{ marginRight: 5 }} />
          </TouchableOpacity>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#777"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>




        {/* NEXT BUTTON */}
        <TouchableOpacity   onPress={()=>navigation.navigate('RideBookingPage')} style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>

        {/* CANCEL */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#248907',
  },

  /* HEADER */
  header: {
    height: 160,
    backgroundColor: '#248907',
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    flex: 1,
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
  },

  headerBell: {
    padding: 8,
    position: 'relative',
  },

  notificationDot: {
    width: 9,
    height: 9,
    backgroundColor: 'red',
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: 5,
  },

  /* WHITE FLOATING CONTENT BOX */
  contentBox: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingTop: 30,
  },

  photoCircle: {
    width: 90,
    height: 90,
    borderRadius: 90,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 35,
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
    backgroundColor: '#248907',
    height: 55,
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
    textAlign: 'center',
    marginTop: 18,
    fontSize: 17,
    color: '#000',
  },
});
