import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" translucent />

      {/* Title */}
      <Text style={styles.title}>Let’s You In</Text>

      {/* Social Buttons */}
      <View style={styles.buttonview}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../asset/Image/google.png')}
            style={styles.icon}
          />
          <Text style={styles.text1}>Continue With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../asset/Image/apple.png')}
            style={styles.icon}
          />
          <Text style={styles.text1}>Continue With Apple</Text>
        </TouchableOpacity>
      </View>

      {/* OR Divider */}
      <Text style={styles.orText}>Or</Text>

      {/* Sign Up Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpDetails')}
        style={styles.SignUp}
      >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already have account */}
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>I already have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginDetails')}>
          <View style={styles.arrowCircle}>
            <Icon name="arrow-right" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 80,
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 60,
    width: '80%',
  },

  buttonview: {
    width: '80%',
    marginTop: 60,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#dcdcdc',
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },

  text1: {
    marginLeft: 25,
    fontSize: 17,
    color: '#000',
    fontWeight: '500',
  },

  orText: {
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },

  SignUp: {
    width: '80%',
    height: 55,
    backgroundColor: '#248907',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },

  footerText: {
    fontSize: 16,
    color: '#000',
    marginRight: 10,
  },

  arrowCircle: {
    backgroundColor: '#248907',
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
