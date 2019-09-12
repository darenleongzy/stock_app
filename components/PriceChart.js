import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

import { Dimensions, View, Text, StyleSheet } from 'react-native'
const screenWidth = Dimensions.get('window').width

// const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [{
//       data: [ 20, 45, 28, 80, 99, 43 ],
//       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
//       strokeWidth: 2 // optional
//     }]
// }

const PriceChart = () => {
    return (
        <View style={styles.chart}>
            <LineChart
                data={{
                labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'july'],
                datasets: [{
                    data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,

                    ]
                }]
                }}
                width={350} // from react-native
                height={180}
                yAxisLabel={'$'}
                chartConfig={{
                backgroundColor: '#fff',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(47, 79, 79, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
        </View>
    );
}

const styles =  StyleSheet.create(
    {
        chart: {
            alignItems:'center',
            width: '100%',
        }
    }
)

export default PriceChart;