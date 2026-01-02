import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const YourRides = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Upcoming');

  const rideData = [
    {
      time: '10:00 AM',
      title: 'Dehradun, Uttarakhand',
      date: 'Today',
      price: '$15.00',
      image: require('../asset/Image/Rides.png'),
    },
    {
      time: '2:30 PM',
      title: 'Noida, Uttar Pradesh',
      date: 'Tomorrow',
      price: '$20.00',
      image: require('../asset/Image/Rides.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#248907" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Rides</Text>

        <View style={{ width: 20 }} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['Upcoming', 'Completed', 'Cancelled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView style={{ padding: 15 }}>
        {rideData.map((item, index) => (
          <View key={index} style={styles.rideCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.timeText}>{item.time}</Text>
              <Text style={styles.titleText}>{item.title}</Text>

              <Text style={styles.datePriceText}>
                {item.date} • {item.price}
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('MyRidedetails')}
                style={styles.detailsButton}
              >
                <Text style={styles.detailsButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>

            <Image source={item.image} style={styles.rideImage} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default YourRides;

/* =============== FIXED SAFE AREA STYLES =============== */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0,
  },

  header: {
    height: 60,
    backgroundColor: '#248907',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#e6f5e6',
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },

  tabText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#666',
  },

  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#248907',
  },

  activeTabText: {
    color: '#248907',
    fontWeight: '700',
  },

  rideCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },

  rideImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginLeft: 15,
  },

  timeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },

  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginTop: 2,
  },

  datePriceText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },

  detailsButton: {
    backgroundColor: '#248907',
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },

  detailsButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});