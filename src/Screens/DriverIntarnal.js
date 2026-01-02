import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  Switch,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal, TextInput } from 'react-native';





const DriverIntarnal = () => {
  const navigation = useNavigation();
   const route = useRoute();
  const { seatId, price } = route.params;

  const [pickup, setPickup] = useState(false);
  const [drop, setDrop] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
const [step, setStep] = useState(1);

const [pickupLocation, setPickupLocation] = useState("");
const [dropLocation, setDropLocation] = useState("");


  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#248907" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Trip Summary</Text>
          </View>

          <Text style={styles.date}>Tue, Jul 23</Text>

          {/* Route info */}
          <View style={styles.routeContainer}>
            <View style={styles.routeRow}>
              <Icon name="clock-outline" size={22} color="#fff" />
              <View>
                <Text style={styles.routeTime}>10:00 AM</Text>
                <Text style={styles.routePlace}>Dehradun, Uttarakhand</Text>
                <Text style={styles.routeSub}>Uttarakhand, India</Text>
              </View>
            </View>

            <View style={styles.routeDivider} />

            <View style={styles.routeRow}>
              <Icon name="map-marker" size={22} color="#fff" />
              <View>
                <Text style={styles.routeTime}>11:30 AM</Text>
                <Text style={styles.routePlace}>Noida, Uttar Pradesh</Text>
                <Text style={styles.routeSub}>Uttar Pradesh, India</Text>
              </View>
            </View>
          </View>

          <Text style={styles.duration}>1 hr 30 min</Text>
        </View>

        {/* Ride Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ride Information</Text>
          <Text style={styles.sectionText}>2 passengers allowed</Text>
          <View style={styles.priceBox}>
            <Icon name="currency-inr" size={22} color="#248907" />
            <Text style={styles.priceText}>1250.00 per passenger</Text>
          </View>
        </View>

        {/* Driver Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Driver</Text>

          <View style={styles.driverRow}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
              }}
              style={styles.driverImage}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.driverName}>Mukesh Kumar</Text>
              <Text style={styles.driverSub}>
                Verified Profile • Rarely Cancels Rides
              </Text>
            </View>
          </View>

          <Text style={styles.driverRating}>4.8 • 123 rides</Text>

          <Text style={styles.driverNote}>
            Driver’s note: I’m a friendly driver and enjoy chatting with passengers.
          </Text>
        </View>

        {/* Pickup & Drop */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pickup & Drop Preferences</Text>

          <View style={styles.toggleRow}>
            <View>
              <Text style={styles.toggleLabel}>Pickup from your Home</Text>
              <Text style={styles.toggleSub}>Charges As Per Kilometer</Text>
            </View>

            <Switch
              trackColor={{ false: '#ccc', true: '#248907' }}
              thumbColor="#fff"
              value={pickup}
              onValueChange={setPickup}
            />
          </View>

          <View style={styles.toggleRow}>
            <View>
              <Text style={styles.toggleLabel}>Drop at your Home</Text>
              <Text style={styles.toggleSub}>Charges As Per Kilometer</Text>
            </View>

            <Switch
              trackColor={{ false: '#ccc', true: '#248907' }}
              thumbColor="#fff"
              value={drop}
              onValueChange={setDrop}
            />
          </View>
        </View>

        {/* Policy */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Booking Policy</Text>
          <Text style={styles.sectionText}>
            Driver approval required. No smoking. No pets.
          </Text>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>

          <View style={styles.contactRow}>
            <TouchableOpacity style={styles.contactButtonRed}>
              <Text style={styles.contactTextWhite}>Contact Driver</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactButtonBlue}>
              <Text style={styles.contactTextWhite}>Share Ride</Text>
            </TouchableOpacity>
          </View>

          {/* Publish */}
     <TouchableOpacity
  onPress={() => {
    setModalVisible(true);
    setStep(1);              // Reset step
    setPickupLocation("");    // Reset input values
    setDropLocation("");
  }}
  style={styles.publishButton}
>
  <Text style={styles.publishText}>Publish ride</Text>
</TouchableOpacity>


<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalBackground}>
    <View style={styles.modalContainer}>

      {/* Step Title */}
      <Text style={styles.modalTitle}>
        {step === 1 ? "Enter Pickup Location" : "Enter Drop Location"}
      </Text>

      {/* Input */}
      <TextInput
        placeholder={step === 1 ? "Pickup location..." : "Drop location..."}
        style={styles.inputBox}
        value={step === 1 ? pickupLocation : dropLocation}
        onChangeText={step === 1 ? setPickupLocation : setDropLocation}
      />

      {/* Action Button */}
      <TouchableOpacity
        style={styles.modalButton}
        onPress={async () => {
          if (step === 1) {
            if (!pickupLocation.trim()) return alert("Enter pickup location");
            setStep(2); // go to next step
          } else {
            if (!dropLocation.trim()) return alert("Enter drop location");

            // NOW CHECK LOGIN STATUS
            const loginStatus = await AsyncStorage.getItem("isLoggedIn");

            setModalVisible(false); // close modal

            if (loginStatus !== "true") {
              navigation.navigate("SignUpDetails");
            } else {
              navigation.navigate("ConfirmRide", {
                seatId,
                price,
                pickupLocation,
                dropLocation
              });
            }
          }
        }}
      >
        <Text style={styles.btnText}>
          {step === 1 ? "Next" : "Continue"}
        </Text>
      </TouchableOpacity>

      {/* Cancel */}
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => {
          setModalVisible(false);
          setStep(1);
        }}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>

    </View>
  </View>
</Modal>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverIntarnal;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
  },

  header: {
    backgroundColor: '#248907',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },

  date: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 12,
  },

  routeContainer: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 12,
    borderRadius: 10,
  },

  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  routeTime: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 10,
  },

  routePlace: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },

  routeSub: {
    color: '#d9f8d9',
    fontSize: 12,
    marginLeft: 10,
  },

  routeDivider: {
    height: 1,
    backgroundColor: '#a9f3a9',
    marginVertical: 8,
  },

  duration: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    fontWeight: '600',
  },

  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  sectionTitle: {
    fontWeight: '700',
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },

  sectionText: {
    color: '#333',
    fontSize: 14,
    marginBottom: 8,
  },

  priceBox: {
    backgroundColor: '#e6f5e6',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '80%',
    borderRadius: 10,
  },

  priceText: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: '600',
    color: '#248907',
  },

  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  driverImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 12,
  },

  driverName: {
    fontWeight: '700',
    fontSize: 15,
  },

  driverSub: {
    color: '#777',
    fontSize: 13,
  },

  driverRating: {
    color: '#333',
    marginTop: 10,
    fontWeight: '600',
  },

  driverNote: {
    color: '#555',
    marginTop: 5,
    lineHeight: 18,
  },

  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  toggleLabel: {
    fontWeight: '600',
    color: '#000',
  },

  toggleSub: {
    fontSize: 13,
    color: '#777',
  },

  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  contactButtonRed: {
    backgroundColor: '#b60000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },

  contactButtonBlue: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
  },

  contactTextWhite: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },

  publishButton: {
    backgroundColor: '#248907',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },

  publishText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  modalBackground: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  width: "85%",
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 12,
  elevation: 10,
},

modalTitle: {
  fontSize: 18,
  fontWeight: "700",
  marginBottom: 15,
},

inputBox: {
  borderWidth: 1,
  borderColor: "#aaa",
  padding: 12,
  borderRadius: 8,
  marginBottom: 20,
},

modalButton: {
  backgroundColor: "#248907",
  padding: 14,
  borderRadius: 8,
  alignItems: "center",
},

btnText: {
  color: "#fff",
  fontWeight: "700",
  fontSize: 16,
},

cancelButton: {
  marginTop: 12,
  alignItems: "center",
},

cancelText: {
  color: "red",
  fontSize: 15,
  fontWeight: "600",
}

});
