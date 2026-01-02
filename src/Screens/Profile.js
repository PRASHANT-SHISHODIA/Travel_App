import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Switch,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const navigation = useNavigation();
  const [switchRole, setSwitchRole] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#248907" />

      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>

        {/* ================= HEADER ================= */}
        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <Icon name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Account</Text>
        </View>

        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../asset/Image/Profile.png')}
            style={styles.profileImage}
          />

          <Text style={styles.profilename}>Mukesh Kumar</Text>

          <TouchableOpacity>
            <Text style={styles.viewProfileText}>View Profile</Text>
          </TouchableOpacity>
        </View>

        {/* MAIN CONTENT */}
        <View style={styles.mainview}>

          {/* Account Info Section */}
          <Text style={styles.sectionTitle}>Account</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text style={styles.infoValue}>Mukesh Kumar</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>Male</Text>
          </View>

          {/* Offering rides */}
          <Text style={styles.subTitle}>Offering Rides</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('AddYourCar')}
            style={styles.row}
          >
            <Text style={styles.rowText}>Add Car Details</Text>
            <Icon name="chevron-right" size={22} color="#000" />
          </TouchableOpacity>

          <View style={styles.row}>
            <Text style={styles.rowText}>Switch Role</Text>

            <Switch
              value={switchRole}
              onValueChange={setSwitchRole}
              trackColor={{ false: '#ccc', true: '#4caf50' }}
              thumbColor="#fff"
            />
          </View>

          {/* Ratings Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Ratings & Reviews</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Review')}
            style={styles.row}
          >
            <Text style={styles.rowText}>View Ratings & Reviews</Text>
            <Icon name="chevron-right" size={22} color="#000" />
          </TouchableOpacity>

          {/* Help Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Help And Support</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('HelpSupport')}
            style={styles.row}
          >
            <Text style={styles.rowText}>Help And Support</Text>
            <Icon name="chevron-right" size={22} color="#000" />
          </TouchableOpacity>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 0,
  },

  /* HEADER */
  header: {
    height: 150,
    backgroundColor: '#248907',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  backBtn: {
    position: 'absolute',
    left: 20,
    top: Platform.OS === 'android' ? 15 : 10,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 30,
  },

  /* PROFILE IMAGE */
  profileContainer: {
    alignItems: 'center',
    marginTop: -40,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  profilename: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 10,
  },

  viewProfileText: {
    color: '#248907',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },

  /* MAIN CONTENT */
  mainview: {
    padding: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.8,
    borderColor: '#e5e5e5',
  },

  infoLabel: {
    fontSize: 16,
    color: '#000',
  },

  infoValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 25,
    color: '#000',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 0.7,
    borderColor: '#e5e5e5',
  },

  rowText: {
    fontSize: 16,
    color: '#000',
  },

  sectionHeader: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 18,
  },

  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },

  logoutBtn: {
    backgroundColor: '#b60000',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
});
