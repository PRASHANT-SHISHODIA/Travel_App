import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HelpSupport = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#1fa000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Help & Support</Text>

        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={22} color="#777" />
          <TextInput
            placeholder="Search for help"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        {/* Common Issues */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Issues</Text>

          {[
            'Account & Payment',
            'Ride Issues',
            'Safety & Security',
            'App & Features',
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text style={styles.listText}>{item}</Text>
              <Icon name="chevron-right" size={24} color="#333" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Support</Text>

          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.redButtonText}>Raise a Support Ticket</Text>
          </TouchableOpacity>
        </View>

        {/* Feedback */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Feedback</Text>

          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>

        {/* Legal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Legal & Policies</Text>

          {[
            'Terms & Conditions',
            'Refund & Privacy Policy',
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text style={styles.listText}>{item}</Text>
              <Icon name="chevron-right" size={24} color="#333" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpSupport;

const styles = StyleSheet.create({

  /* FIXED SAFE AREA */
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },

  header: {
    backgroundColor: '#1fa000',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  searchContainer: {
    backgroundColor: '#fff',
    elevation: 3,
    margin: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    marginLeft: 10,
    fontSize: 14,
    flex: 1,
  },

  section: {
    marginTop: 10,
    backgroundColor: '#fff',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  listText: {
    fontSize: 15,
  },

  redButton: {
    backgroundColor: '#cc0000',
    marginHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  redButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  greenButton: {
    backgroundColor: '#1fa000',
    marginHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  greenButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});
