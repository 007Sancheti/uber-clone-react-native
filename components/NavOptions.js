import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapsScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    },
];

const NavOptions = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
