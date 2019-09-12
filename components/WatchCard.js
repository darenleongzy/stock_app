import React from 'react';
import { Text, Card } from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import PriceChart from './PriceChart';



const WatchCard = ({data, index}) => {
    return (
        <Card key={index} containerStyle = {styles.card}>
                {/* <View style={styles.cardItemLayout}> */}
                    <View  style={styles.cardText}>
                        <Text style={styles.cardTextName}>{data.name}</Text>
                        <Text style={styles.cardTextPrice}>{data.price}</Text>
                    </View>
                    <View style={styles.chart}>
                            <PriceChart />
                    </View>
                {/* </View> */}
        </Card>
    )

}

const styles =  StyleSheet.create(
    {
        card: {
            borderRadius: 12,
            alignItems:'center',
            paddingBottom: 0,
            
        },
        // cardItemLayout: {
        //     alignItems:'center',
        // },
        cardText: {
            flexDirection: 'row',
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,

        },
        cardTextName: {
            flex: 1,
            justifyContent: 'flex-start',
            textAlign:'left',
            fontWeight: 'bold',
            fontSize: 20

        },
        cardTextPrice: {
            flex: 1,
            justifyContent: 'flex-end',
            textAlign: 'right',
            fontSize: 20

        },
        chart: {
            marginBottom: 10
        }

    }
)
export default WatchCard;