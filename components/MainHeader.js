import React from 'react';
import { Header, Icon } from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';
import SearchPage from './SearchPage';

const MainHeader = () => {
    return (
        <Header 
            leftComponent={{ icon: 'menu', color: 'black' }}
            centerComponent={{ text: 'Stocks ', style: { color: 'black', fontSize: 30 } }}
            rightComponent={<Icon name='search' onPress={()=> <SearchPage/>} underlayColor={'#3F704D'} />}
            containerStyle={styles.header}
        />
    );
}

const styles = StyleSheet.create(
    {
        header: {
            backgroundColor: '#3F704D',
        }
    }
)


export default MainHeader;