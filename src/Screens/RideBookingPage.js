import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const RideBookingPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1fa000" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 140 }}
        >
          {/* Header */}
          <View style={styles.headerContainer}>
            <Image
              source={require('../asset/Image/Ellipse.png')}
              style={styles.bgImage}
            />
            <Text style={styles.title}>Pick your ride at lowest{'\n'}prices</Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            {/* From */}
            <Text style={styles.label}>From</Text>
            <View style={styles.row}>
              <TextInput placeholder="Noida" style={styles.input} />
              <TouchableOpacity style={styles.swapBtn}>
                <Icon name="swap-vertical" size={22} color="#fff" />
              </TouchableOpacity>
            </View>

            {/* To */}
            <Text style={styles.label}>To</Text>
            <TextInput placeholder="Agra" style={styles.input} />

            {/* Depart & Passenger */}
            <View style={styles.smallRow}>
              <View style={styles.smallBox}>
                <Text style={styles.label}>Departing</Text>
                <TextInput placeholder="24 Oct 2025" style={styles.smallInput} />
              </View>

              <View style={styles.smallBox}>
                <Text style={styles.label}>Passengers</Text>
                <TextInput placeholder="2 Adult" style={styles.smallInput} />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('TabNavigation')}
              style={styles.searchBtn}
            >
              <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
          </View>

          {/* Map */}
          <Image
            source={require('../asset/Image/Map.png')}
            style={styles.map}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={32} color="#fff" />
          <Text style={styles.bottomText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Publish")}>
          <Icon name="plus" size={32} color="#fff" />
          <Text style={styles.bottomText}>Publish</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("YourRides")}>
          <Icon name="car" size={32} color="#fff" />
          <Text style={styles.bottomText}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="account" size={32} color="#fff" />
          <Text style={styles.bottomText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideBookingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerContainer: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgImage: {
    width: '100%',
    height: 240,
    position: 'absolute',
    resizeMode: 'cover',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },

  card: {
    width: '85%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: -40,
    borderRadius: 15,
    padding: 20,
    elevation: 10,
  },

  label: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  swapBtn: {
    backgroundColor: '#1fa000',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 35,
  },

  smallRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  smallBox: {
    width: '48%',
  },

  smallInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 10,
  },

  searchBtn: {
    backgroundColor: '#1fa000',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 15,
  },

  searchText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },

  map: {
    width: '90%',
    height: 180,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 25,
    resizeMode: 'cover',
  },

  bottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#1fa000',
    paddingVertical: 10,
    marginHorizontal: 40,
    borderRadius: 30,
    elevation: 10,
  },

  bottomText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
});
