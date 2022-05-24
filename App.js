import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const widthAfterPadding = width - 20;

const App = () => {
  const [eventName, setEventName] = useState('');
  const [eventDateDay, setEventDateDay] = useState('');
  const [list, setList] = useState([]);

  const renderItem = ({item}) => (
    <Text
      style={{
        backgroundColor: 'green',
        color: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}>
      {item}
    </Text>
  );
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
      }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: 'green',
        }}>
        Event Planner App
      </Text>
      <View>
        <View
          style={{
            flexDirection: 'row',
            color: 'white',
            backgroundColor: 'green',
            marginTop: 20,
          }}>
          <Text style={styles.headerText}>M</Text>
          <Text style={styles.headerText}>T</Text>
          <Text style={styles.headerText}>W</Text>
          <Text style={styles.headerText}>T</Text>
          <Text style={styles.headerText}>F</Text>
          <Text style={styles.headerText}>S</Text>
          <Text style={styles.headerText}>S</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{width: widthAfterPadding / 7}}></View>
          <View style={{width: widthAfterPadding / 7}}></View>
          <TouchableOpacity
            onPress={() => setEventDateDay('1 - Wednesday')}
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEventDateDay('2 - Thursday')}
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEventDateDay('3 - Friday')}
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEventDateDay('4 - Saturday')}
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEventDateDay('5 - Sunday')}
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>5</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>10</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>11</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>12</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>13</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>14</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>15</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>16</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>17</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>18</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>19</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => setDateDay('20 - Monday')}
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>20</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>21</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>22</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>23</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>24</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>25</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>26</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>27</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>28</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>29</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: widthAfterPadding / 7, alignItems: 'center'}}>
            <Text>30</Text>
          </TouchableOpacity>
          <View style={{width: widthAfterPadding / 7}}></View>
          <View style={{width: widthAfterPadding / 7}}></View>
          <View style={{width: widthAfterPadding / 7}}></View>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            marginTop: 26,
          }}>
          Event Name:
        </Text>
        <TextInput
          placeholder="Enter the name of the Event"
          style={{
            borderBottomWidth: 1,
          }}
          value={eventName}
          onChangeText={val => setEventName(val)}></TextInput>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            marginTop: 26,
          }}>
          Date/Day:
        </Text>
        <TextInput
          placeholder="Select the Date/Day from Calendar"
          style={{
            borderBottomWidth: 1,
          }}
          value={eventDateDay}></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          if (eventDateDay != '' && eventDateDay != '') {
            setList([...list, `${eventName},${eventDateDay}`]);
            setEventName('');
            setEventDateDay('');
          } else {
            Alert.alert('Please Fill Event Name and Date/Day');
          }
        }}
        style={{
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text
          style={{
            backgroundColor: 'green',
            paddingHorizontal: 16,
            color: 'white',
            paddingVertical: 8,
            textAlign: 'center',
          }}>
          Add to Event
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setList([])}
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            backgroundColor: 'orange',
            paddingHorizontal: 16,
            color: 'white',
            paddingVertical: 8,
            textAlign: 'center',
          }}>
          Remove All
        </Text>
      </TouchableOpacity>
      <ScrollView
        style={{
          marginTop: 20,
        }}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontWeight: '900',
    width: widthAfterPadding / 7,
    textAlign: 'center',
  },
});

export default App;
