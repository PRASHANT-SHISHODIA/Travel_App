import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const AddYourCar = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120, paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerText}>Add Your Car</Text>
        </View>

        {/* Inputs */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <TextInput placeholder="Car Make" placeholderTextColor="#777" style={styles.input} />
          <TextInput placeholder="Car Model" placeholderTextColor="#777" style={styles.input} />
          <TextInput placeholder="Car Year" placeholderTextColor="#777" keyboardType="numeric" style={styles.input} />
          <TextInput placeholder="Car Color" placeholderTextColor="#777" style={styles.input} />
          <TextInput placeholder="License Plate" placeholderTextColor="#777" style={styles.input} />
        </View>

        {/* Add Photos */}
        <Text style={styles.sectionTitle}>Add photos of your car</Text>

        <View style={styles.uploadBox}>
          <Text style={styles.uploadTitle}>Add photos</Text>
          <Text style={styles.uploadSubtitle}>
            Add photos of your car to help{'\n'}passengers identify it
          </Text>

          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Add photos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Fixed Buttons */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          onPress={() => navigation.navigate('VerifyLogin')}
          style={styles.continueButton}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom:20,}}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddYourCar;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },

  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },

  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 24,
  },

  input: {
    width: '100%',
    height: 55,
    borderWidth: 1.2,
    borderColor: '#6EC16E',
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 12,
    color: '#000',
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 15,
  },

  uploadBox: {
    marginTop: 15,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 40,
    alignItems: 'center',
  },

  uploadTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  uploadSubtitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },

  uploadButton: {
    marginTop: 20,
    backgroundColor: '#248907',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  uploadButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  bottomSection: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    alignItems: 'center',
  },

  continueButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#248907',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  continueText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },

  nextText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
});
