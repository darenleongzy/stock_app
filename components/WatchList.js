import React from 'react';
import { Text, Card } from 'react-native-elements';
import {View, StyleSheet, FlatList} from 'react-native';
import WatchCard from './WatchCard';

const watchlistData = [
    {
        name: 'stock1',
        price: '5.86',
    },
    {
        name: 'stock2',
        price: '20.01',
    },
    {
        name: 'stock3',
        price: '3.16',
    },
    {
        name: 'stock5',
        price: '4.26',
    },
    {
        name: 'stock6',
        price: '3.18',
    },

]

const WatchList = () => {
    return (
        // watchlistData.map((data, i) => {
        //     return (
        //         <WatchCard key={i} data={data} />
        //     )
        // })
        <FlatList
            data={watchlistData}
            renderItem={({item, id}) => (
                <WatchCard data={item} key={id}/>
                // <Text >{item.name} </Text>
            )}
            keyExtractor={item=> item.name}

        />
    );
}

const styles =  StyleSheet.create(
    {
        card: {
            alignItems:'center',
        },
        cardText: {
            flexDirection: 'row'
        },
        cardTextName: {
            flex: 1,
            justifyContent: 'flex-start',
            textAlign:'left'

        },
        cardTextPrice: {
            flex: 1,
            justifyContent: 'flex-end',
            textAlign: 'right',
        },

    }
)
export default WatchList;