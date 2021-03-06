import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { FlatList, Text, Image, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

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
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
                >
                    <View>
                        <Image
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>
                            {item.title}
                        </Text>
                        <Icon
                            type='antdesign'
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name='arrowright'
                            color='white'
                        />
                        
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions;
