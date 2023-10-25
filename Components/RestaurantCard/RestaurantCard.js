import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../sanity';

const RestaurantCard = ({ name, rating, address, imageUrl, categories }) => {
    const image = urlFor(imageUrl).width(350).url();
    //console.log({image})
    return (
        <TouchableOpacity className='bg-white rounded-md m-2'>
            <Image 
                source={{
                    uri: image,
                }}
                className='h-28 w-60 rounded-t-md'
            />
            <View className='py-3 px-3'>
                <Text className='font-bold text-md pb-1'>{name}</Text>
                <View className='flex-row items-center pb-1'>
                    <StarIcon size={15} color='#00CCBB'/>
                    <Text style={{color: '#00CCBB'}}> {rating}</Text>
                    <Text className='text-gray-500'> · </Text>
                    <Text className='text-xs text-gray-500'> Burger</Text>
                </View>
                <View className='flex-row items-center pb-1'>
                    <MapPinIcon size={15} color='lightgray'/>
                    <Text className='text-xs text-gray-500'> {address.street}, {address.town}</Text>
                </View>
            </View>
            
        </TouchableOpacity>
    )
};

export default RestaurantCard;