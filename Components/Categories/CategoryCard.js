import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { urlFor } from '../../sanity';

const CategoryCard = ({ title, image }) => {
    const imgUrl = urlFor(image).width(200).url();
    return (
        <TouchableOpacity className='relative mr-2 bg-white rounded-md text-center'>
            
            <Image 
                source={{
                    uri: imgUrl,
                }}
                className='h-16 w-24 rounded-t-md'
            />
            <Text className='pl-1 py-2 text-sm font-bold text-gray-700'>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;