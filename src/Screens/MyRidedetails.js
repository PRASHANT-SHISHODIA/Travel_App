import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const MyRidedetails = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#248907" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" style={{marginTop:30,}} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ride confirmed</Text>
      </View>

      {/* Map Section */}
      <Image
        source={
        require('../asset/Image/Map.png')}
        style={styles.mapImage}
      />

      {/* Driver Info */}
      <View style={styles.content}>
        <View style={styles.driverRow}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={styles.driverImage}
          />
          <View>
            <Text style={styles.driverName}>Ethan</Text>
            <Text style={styles.arrivalText}>Arriving in 5 min</Text>
          </View>
        </View>

        {/* Pickup */}
        <View style={styles.locationCard}>
          <View style={styles.locationIconContainer}>
            <Icon name="map-marker" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.locationLabel}>Pickup</Text>
            <Text style={styles.locationAddress}>123 Main St</Text>
          </View>
        </View>

        {/* Dropoff */}
        <View style={styles.locationCard}>
          <View style={styles.locationIconContainer}>
            <Icon name="map-marker" size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.locationLabel}>Dropoff</Text>
            <Text style={styles.locationAddress}>456 Oak Ave</Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyRidedetails;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#248907',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 10,
    marginTop:30,
  },
  mapImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  driverImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 15,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  arrivalText: {
    color: '#777',
    fontSize: 13,
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  locationIconContainer: {
    backgroundColor: '#248907',
    borderRadius: 8,
    padding: 6,
    marginRight: 12,
  },
  locationLabel: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  locationAddress: {
    color: '#555',
    fontSize: 13,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  callButton: {
    flex: 1,
    backgroundColor: '#b60000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  callText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  messageButton: {
    flex: 1,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  messageText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
