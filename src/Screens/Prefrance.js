import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  Platform,
  Modal,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

/* ---------------- SEAT ITEM ---------------- */
const renderSeat = (item, selectedSeats, handleSelectSeat) => {
  const isSelected = selectedSeats.includes(item.id);
  const isBooked = item.booked;

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.seatContainer}
      onPress={() => handleSelectSeat(item)}
      disabled={isBooked}
    >
      <Image
        source={item.img}
        style={[
          styles.seatImage,
          isBooked && { tintColor: '#777' },
          isSelected && { tintColor: '#248907' }
        ]}
      />
      <Text style={styles.seatPrice}>Rs {item.price}</Text>
    </TouchableOpacity>
  );
};

const SeatSelection = () => {
  const navigation = useNavigation();

  /* ---------------- SEAT ARRAY ---------------- */
  const seats = [
    { id: 1, price: 235, img: require('../asset/Image/seat.png'), booked: false },
    { id: 2, price: 235, img: require('../asset/Image/seat.png'), booked: false },
    { id: 3, price: 235, img: require('../asset/Image/seat.png'), booked: true },
    { id: 4, price: 235, img: require('../asset/Image/seat.png'), booked: false },
    { id: 5, price: 235, img: require('../asset/Image/seat.png'), booked: true },
    { id: 6, price: 235, img: require('../asset/Image/seat.png'), booked: false },
    { id: 7, price: 235, img: require('../asset/Image/seat.png'), booked: false },
  ];

  /* ---------------- STATES ---------------- */
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  /* ---------------- SELECT SEAT ---------------- */
  const handleSelectSeat = (seat) => {
    if (seat.booked) return;

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  /* ---------------- PRICE CALCULATION ---------------- */
  const selectedSeatObjects = seats.filter(s => selectedSeats.includes(s.id));
  const totalPrice = selectedSeatObjects.reduce((sum, s) => sum + s.price, 0);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#248907" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationBox}>
          <Text style={styles.locationText}>Dehradun → Noida</Text>
          <Icon name="bell-outline" size={24} color="#248907" />
        </View>

        <View style={styles.filterBox}>
          <Text style={styles.filterText}>Today, {selectedSeats.length} Passenger</Text>

          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-variant" size={20} color="#fff" />
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Book Your Preferred Seat</Text>
        </View>

        {/* SEAT AREA */}
        <View style={styles.seatArea}>
          <View style={styles.singleSeatRow}>
            {renderSeat(seats[0], selectedSeats, handleSelectSeat)}
          </View>

          <View style={styles.row}>
            {seats.slice(1, 4).map((s) =>
              renderSeat(s, selectedSeats, handleSelectSeat)
            )}
          </View>

          <View style={styles.row}>
            {seats.slice(4, 7).map((s) =>
              renderSeat(s, selectedSeats, handleSelectSeat)
            )}
          </View>
        </View>

        {/* NEXT BUTTON */}
        <TouchableOpacity
          style={[
            styles.nextButton,
            { backgroundColor: selectedSeats.length > 0 ? '#248907' : '#a0a0a0' }
          ]}
          disabled={selectedSeats.length === 0}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.nextText}>Pay Rs {totalPrice}</Text>
        </TouchableOpacity>
      </View>

      {/* ---------------- MODAL ---------------- */}
      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Enter Passenger Details</Text>

            <TextInput
              placeholder="Full Name"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />

            <TextInput
              placeholder="Mobile Number"
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              keyboardType="number-pad"
              maxLength={10}
            />

            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Text style={styles.seatCountText}>
              Total Seats Selected: {selectedSeats.length}
            </Text>

            <TouchableOpacity
              style={styles.confirmBtn}
             onPress={() => {
  Alert.alert(
    "Confirm Booking",
    `Are you sure you want to book ${selectedSeats.length} seat(s) for Rs ${totalPrice}?`,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Yes, Book Now",
        onPress: () => {
          setShowModal(false);
          navigation.navigate("DriverIntarnal", {
            seats: selectedSeats,
            name,
            mobile,
            email,
            totalPrice
          });
        }
      }
    ]
  );
}}

            >
              <Text style={styles.confirmText}>Confirm & Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeModal} onPress={() => setShowModal(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default SeatSelection;

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    backgroundColor: '#248907',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 20,
  },

  locationText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  filterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  filterText: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: '500',
    flex: 1,
    marginRight: 10,
  },

  filterButton: {
    backgroundColor: '#248907',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
  },

  filterButtonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 5,
  },

  body: {
    flex: 1,
    padding: 20,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  seatArea: {
    alignItems: 'center',
    marginTop: 20,
  },

  singleSeatRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },

  seatContainer: {
    alignItems: 'center',
  },

  seatImage: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },

  seatPrice: {
    fontSize: 13,
    marginTop: 5,
    color: '#333',
  },

  nextButton: {
    marginTop: 20,
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  nextText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  seatCountText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: "#000",
  },

  confirmBtn: {
    backgroundColor: '#248907',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  closeModal: {
    marginTop: 10,
    alignItems: 'center',
  },

  closeText: {
    fontSize: 15,
    color: '#248907',
    fontWeight: '600',
  },
});
