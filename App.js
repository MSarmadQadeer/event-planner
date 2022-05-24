import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList, Alert }
  from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const widthAfterPadding = width - 20;
const primaryColor = '#00C750';

const SizedBox = props => {
  return (
    <View style={{ width: props.width, height: props.height }}></View>
  )
}

const DateDayButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.dateDayButton}>
      <Text style={{ fontSize: 16 }}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const TextInput_Custom = props => {
  return (
    <View style={{ paddingVertical: 10, ...props.style }}>
      <Text style={styles.labelText}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        style={{ borderBottomWidth: 1 }}
        value={props.value}
        onChangeText={props.onChangeText}></TextInput>
    </View>
  )
}

const AwesomeButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ alignItems: 'center', marginLeft: 10 }}>
      <Text
        style={{
          paddingHorizontal: 16,
          backgroundColor: props.backgroundColor,
          color: props.color,
          fontWeight: "500",
          paddingVertical: 8,
          textAlign: 'center',
          borderRadius: 7,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

const App = () => {
  const [eventName, setEventName] = useState('');
  const [eventDateDay, setEventDateDay] = useState('');
  const [list, setList] = useState([]);

  const addToEvent = () => {
    if (eventName == '' || eventDateDay == '') {
      Alert.alert('Note!', 'Please fill both fields');
      setEventName('');
      setEventDateDay('');
    } else {
      setList([...list, { text: `${eventName}, ${eventDateDay}`, id: list.length + 1 }]);
      setEventName('');
      setEventDateDay('');
    }
  }

  const removeAll = () => setList([])

  const renderItem = ({ item }) => <Text style={styles.listItem}>{item.text}</Text>;

  return (
    <SafeAreaView style={{ paddingHorizontal: 10 }}>
      <ScrollView style={{ height: height * 0.7 }}>
        {/* Header */}
        <Text style={styles.header}>Event Planner</Text>

        {/* Calendar */}
        <View>
          <View style={styles.week}>
            <Text style={styles.WeekDayAlphabet}>M</Text>
            <Text style={styles.WeekDayAlphabet}>T</Text>
            <Text style={styles.WeekDayAlphabet}>W</Text>
            <Text style={styles.WeekDayAlphabet}>T</Text>
            <Text style={styles.WeekDayAlphabet}>F</Text>
            <Text style={styles.WeekDayAlphabet}>S</Text>
            <Text style={styles.WeekDayAlphabet}>S</Text>
          </View>
          <View style={styles.week}>
            <SizedBox width={widthAfterPadding / 7} />
            <SizedBox width={widthAfterPadding / 7} />
            <DateDayButton text="1" onPress={() => setEventDateDay('1 - Wednesday')} />
            <DateDayButton text="2" onPress={() => setEventDateDay('2 - Thursday')} />
            <DateDayButton text="3" onPress={() => setEventDateDay('3 - Friday')} />
            <DateDayButton text="4" onPress={() => setEventDateDay('4 - Saturday')} />
            <DateDayButton text="5" onPress={() => setEventDateDay('5 - Sunday')} />
          </View>
          <View style={styles.week}>
            <DateDayButton text="6" onPress={() => setEventDateDay('6 - Monday')} />
            <DateDayButton text="7" onPress={() => setEventDateDay('7 - Tuesday')} />
            <DateDayButton text="8" onPress={() => setEventDateDay('8 - Wednesday')} />
            <DateDayButton text="9" onPress={() => setEventDateDay('9 - Thursday')} />
            <DateDayButton text="10" onPress={() => setEventDateDay('10 - Friday')} />
            <DateDayButton text="11" onPress={() => setEventDateDay('11 - Saturday')} />
            <DateDayButton text="12" onPress={() => setEventDateDay('12 - Sunday')} />
          </View>
          <View style={styles.week}>
            <DateDayButton text="13" onPress={() => setEventDateDay('13 - Monday')} />
            <DateDayButton text="14" onPress={() => setEventDateDay('14 - Tuesday')} />
            <DateDayButton text="15" onPress={() => setEventDateDay('15 - Wednesday')} />
            <DateDayButton text="16" onPress={() => setEventDateDay('16 - Thursday')} />
            <DateDayButton text="17" onPress={() => setEventDateDay('17 - Friday')} />
            <DateDayButton text="18" onPress={() => setEventDateDay('18 - Saturday')} />
            <DateDayButton text="19" onPress={() => setEventDateDay('19 - Sunday')} />
          </View>
          <View style={styles.week}>
            <DateDayButton text="20" onPress={() => setEventDateDay('20 - Monday')} />
            <DateDayButton text="21" onPress={() => setEventDateDay('21 - Tuesday')} />
            <DateDayButton text="22" onPress={() => setEventDateDay('22 - Wednesday')} />
            <DateDayButton text="23" onPress={() => setEventDateDay('23 - Thursday')} />
            <DateDayButton text="24" onPress={() => setEventDateDay('24 - Friday')} />
            <DateDayButton text="25" onPress={() => setEventDateDay('25 - Saturday')} />
            <DateDayButton text="26" onPress={() => setEventDateDay('26 - Sunday')} />
          </View>
          <View style={styles.week}>
            <DateDayButton text="27" onPress={() => setEventDateDay('27 - Monday')} />
            <DateDayButton text="28" onPress={() => setEventDateDay('28 - Tuesday')} />
            <DateDayButton text="29" onPress={() => setEventDateDay('29 - Wednesday')} />
            <DateDayButton text="30" onPress={() => setEventDateDay('30 - Thursday')} />
            <SizedBox width={widthAfterPadding / 7} />
            <SizedBox width={widthAfterPadding / 7} />
            <SizedBox width={widthAfterPadding / 7} />
          </View>
        </View>

        {/* Event Name Field */}
        <TextInput_Custom label="Event Name:" placeholder="Enter the name of the Event"
          value={eventName}
          onChangeText={val => setEventName(val)}
          style={{ marginTop: 10 }}
        />

        {/* Event Date/Day Field */}
        <TextInput_Custom label="Date/Day:" placeholder="Select the Date/Day from Calendar"
          value={eventDateDay}
        />

        {/* Buttons Container */}
        <View style={{ flexDirection: "row-reverse", marginTop: 6 }}>
          <AwesomeButton
            backgroundColor={primaryColor} color="white" text="Add to Event"
            onPress={addToEvent} />

          <AwesomeButton
            backgroundColor="orange" color="white" text="Remove All"
            onPress={removeAll}
          />
        </View>
      </ScrollView>

      {/* Events Container */}
      <View style={{ height: height * 0.3 - 20, borderWidth: 1, marginVertical: 10 }}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'center',
    paddingVertical: 15,
    color: "black",
  },
  WeekDayAlphabet: {
    color: 'white',
    backgroundColor: primaryColor,
    fontWeight: '600',
    width: widthAfterPadding / 7,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 5
  },
  week: {
    flexDirection: 'row'
  },
  labelText: { fontSize: 16, color: 'black' },
  listItem: {
    backgroundColor: primaryColor,
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: .5,
    fontWeight: '600'
  },
  dateDayButton: {
    width: widthAfterPadding / 7,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: "#F0F0F0",
    borderRadius: 3,
    borderWidth: .5,
    borderColor: "white"
  }
});

export default App;
