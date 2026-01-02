import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('Notifications');

  const notifications = [
    { id: 1, name: 'Driver is arriving', desc: 'Your ride is on the way', img: require('../asset/Image/Inbox.png') },
    { id: 2, name: 'Driver is arriving', desc: 'Your ride is on the way', img: require('../asset/Image/Inbox.png') },
    { id: 3, name: 'Driver is arriving', desc: 'Your ride is on the way', img: require('../asset/Image/Inbox.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#248907" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Inbox</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Notifications' && styles.activeTab]}
          onPress={() => setActiveTab('Notifications')}
        >
          <Text style={[styles.tabText, activeTab === 'Notifications' && styles.activeTabText]}>
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Messages' && styles.activeTab]}
          onPress={() => setActiveTab('Messages')}
        >
          <Text style={[styles.tabText, activeTab === 'Messages' && styles.activeTabText]}>
            Messages
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ paddingHorizontal: 15 }}>

        {/* Today Section */}
        <Text style={styles.sectionTitle}>Today</Text>

        {notifications.map(item => (
          <View key={item.id} style={styles.notificationItem}>
            <Image source={item.img} style={styles.userImage} />

            <View style={{ flex: 1 }}>
              <Text style={styles.notifTitle}>{item.name}</Text>
              <Text style={styles.notifDesc}>{item.desc}</Text>
            </View>
          </View>
        ))}

        {/* Support Section */}
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Support</Text>

        <TouchableOpacity>
          <View style={styles.supportItem}>
          <View style={styles.supportIcon}>
            <Icon name="headset" size={22} color="#fff" />
          </View>

          <Text style={styles.supportText}>Support Chat with Admin (ticket…)</Text>
        </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    width: '100%',
    height: 120,
    backgroundColor: '#248907',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backBtn: { position: 'absolute', top: 50, left: 15 },

  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 20,
  },

  tabsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  tab: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: 12,
  },

  tabText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },

  activeTab: {
    borderBottomWidth: 3,
    borderColor: '#248907',
  },

  activeTabText: {
    color: '#248907',
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 10,
    color: '#000',
  },

  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 35,
    marginRight: 12,
  },

  notifTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  notifDesc: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },

  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    padding: 12,
    borderRadius: 10,
  },

  supportIcon: {
    width: 45,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#248907',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  supportText: { fontSize: 15, fontWeight: '600', color: '#000' },
});
