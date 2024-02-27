import React  from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { BarChart,LineChart } from 'react-native-chart-kit';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
// import Svg, { Circle, Rect } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;

const units = 300;

let perUnitCost;
if (units >= 1 && units <= 100) {
  perUnitCost = 5.79;
} else if (units >= 101 && units <= 200) {
  perUnitCost = 8.11;
} else if (units >= 201 && units <= 300) {
  perUnitCost = 10.20;
} else if (units >= 301 && units <= 700) {
  perUnitCost = 17.60;
} else {
  perUnitCost = 20.70;
}

const totalCost = units * perUnitCost;

const App = () => {
  const navigation = useNavigation();

  const chartConfig = {
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 0,
    barPercentage: 0.3,
  };
  const data1={
    "monthwise_units": {
        "January-2019": [
            199
        ],
        "May-2021": [
            1000
        ],
        "March-2022": [
            750
        ],
        "July-2023": [
            400
        ],
        "August-2023": [
            500
        ],
        "April-2024": [
            100
        ],
        "September-2024": [
            299
        ]
    }
  };

  const labels = Object.keys(data1.monthwise_units);
  const values = Object.values(data1.monthwise_units).map((valueArray)=>valueArray[0]);

  const data ={
    
    labels :labels,
    datasets:[
      {
        label:'previos months consumption',
        data:values,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth:2
      }
    ]
  };

  return (
    <MenuProvider skipInstanceCheck={true} style={styles.container}>
      <View style={styles.header}>
      <View style={{ flex: 1 }}> 
        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 20, color: '#171A1F', textAlign: 'left' }}>
          <Text>Bill-E Prediction Summary</Text>
        </Text>  
      </View>
        <Menu>
          <MenuTrigger>
            <Ionicons name="menu" size={30} color="black" style={styles.menuIcon} />
          </MenuTrigger>
          <MenuOptions style={styles.menuOptionsStyle}>
            <MenuOption onSelect={() => navigation.navigate('EditProfile')}>
              <Text style={styles.menuOptionText}>Profile</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('Settings')}>
              <Text style={styles.menuOptionText}>Settings</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('HelpCenter')}>
              <Text style={styles.menuOptionText}>Help Center</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('SignIn')}>
              <Text style={styles.menuOptionText}>Sign Out</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.predictionCard}>
          <Text style={styles.title}>Predicted Consumption</Text>
          <View style={styles.consumptionCircle}>
            <Text style={styles.consumptionValue}>{units}</Text>
            <Text style={styles.consumptionUnit}>Predicted Units</Text>
          </View>
          <Text style={styles.estimatedBill}>
            Your estimated bill for this month will be Pkr. {totalCost.toFixed(2)}
          </Text>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigation.navigate('RoomwisePrediction')}
          >
            <Text style={styles.detailsButtonText}>View Room Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.graphCard}>
        <LineChart
          data={data}
          width={screenWidth-32}
          height={500}
          yAxisLabel=""
          verticalLabelRotation={90}
          chartConfig={{
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 0,
            barPercentage: 0.3,
            propsForLabels:{fontsize:2}
          }}
          bezier
          style={{ marginVertical: 8, borderRadius: 16 }}/>
        </View>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('DashBoard')}>
          <Ionicons name="home-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Prediction')}>
          <Ionicons name="stats-chart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RoomwisePrediction')}>
          <Ionicons name="grid-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Ionicons name="person-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuIcon: {
    marginTop: 5,
    marginRight: 10, 
  },
  menuOptionsStyle: {
    marginTop: 0,
    marginVertical: 2,
    zIndex: 1,
  },
  menuOptionText: {
    fontSize: 16,
    padding: 10,
    fontFamily: 'Lato-Bold',
  },
  scrollContainer: {
    flex: 1,
  },
  predictionCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontFamily: 'Lato-Bold',
  },
  consumptionCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderColor: '#00BCD4',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  consumptionValue: {
    fontSize: 48,
    // fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Lato-Bold',
  },
  consumptionUnit: {
    fontSize: 18,
    color: '#666',
  },
  estimatedBill: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsButton: {
    backgroundColor: '#535CE8',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  detailsButtonText: {
    color: 'white',
    // fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
  },
  graphCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 1,
    paddingVertical: 16,
    paddingHorizontal: 16, // Adjust padding as needed
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 70,
    overflow: 'hidden', // Ensures that the graph does not overflow the card
  },
  graphStyle: {
    // position:'absolute'
    marginVertical: 1,
    marginRight:10,
    borderRadius:1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Ensures that navBar is clickable
  },
});

export default App;