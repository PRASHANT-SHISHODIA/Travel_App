import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const OfferRide = () => {
  const navigation = useNavigation();
  const [homePickup, setHomePickup] = useState(false);
  const [luggageAllowed, setLuggageAllowed] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1fa000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Offer Ride</Text>

        <View style={{ width: 28 }} />
      </View>

      {/* Scroll Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={styles.createTitle}>Create New Ride</Text>

        {/* Form Inputs */}
        <TextInput placeholder="Pickup Point" placeholderTextColor="#777" style={styles.input} />
        <TextInput placeholder="Drop Point" placeholderTextColor="#777" style={styles.input} />
        <TextInput placeholder="Date & Time" placeholderTextColor="#777" style={styles.input} />
        <TextInput placeholder="Total Seats" placeholderTextColor="#777" keyboardType="numeric" style={styles.input} />
        <TextInput placeholder="Price per Seat" placeholderTextColor="#777" keyboardType="numeric" style={styles.input} />

        {/* Home Pickup Switch */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Optional Home Pickup</Text>
          <Switch value={homePickup} onValueChange={setHomePickup} />
        </View>

        <TextInput placeholder="Car Type" placeholderTextColor="#777" style={styles.input} />

        {/* Luggage Allowed Switch */}
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Luggage Allowed</Text>
          <Switch value={luggageAllowed} onValueChange={setLuggageAllowed} />
        </View>

        {/* Notes */}
        <TextInput
          placeholder="Write Notes..."
          placeholderTextColor="#777"
          multiline
          style={styles.notes}
        />

        {/* Offer Ride Button */}
        <TouchableOpacity style={styles.offerButton}>
          <Text style={styles.offerText}>Offer Ride</Text>
        </TouchableOpacity>

        {/* Manage Rides */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Manage Offered Rides</Text>

          {[ 
            { route: 'Pickup A to Drop B', bookings: '2 bookings' },
            { route: 'Pickup C to Drop D', bookings: '1 booking' },
            { route: 'Pickup E to Drop F', bookings: '3 bookings' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.rideItem}>
              <View>
                <Text style={styles.rideRoute}>{item.route}</Text>
                <Text style={styles.rideBookings}>{item.bookings}</Text>
              </View>
              <Icon name="chevron-right" size={22} color="#333" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Earnings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earnings Summary</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Total Earnings</Text>
            <Text style={styles.value}>Rs1550.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Available for Withdrawal</Text>
            <Text style={styles.value}>Rs1219.00</Text>
          </View>

          <TouchableOpacity style={styles.withdrawButton}>
            <Text style={styles.withdrawText}>Request Withdrawal</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OfferRide;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 0,
  },

  header: {
    backgroundColor: '#1fa000',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

  createTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    fontSize: 14,
  },

  notes: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    height: 110,
    textAlignVertical: 'top',
    fontSize: 14,
  },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },

  switchLabel: {
    fontSize: 15,
    fontWeight: '500',
  },

  offerButton: {
    backgroundColor: '#1fa000',
    marginHorizontal: 15,
    marginTop: 10,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  offerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  section: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },

  rideItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  rideRoute: {
    fontSize: 15,
    fontWeight: '600',
  },

  rideBookings: {
    fontSize: 13,
    color: '#888',
    marginTop: 3,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },

  label: {
    fontSize: 14,
    color: '#555',
  },

  value: {
    fontSize: 14,
    fontWeight: '700',
  },

  withdrawButton: {
    backgroundColor: '#cc0000',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },

  withdrawText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});
