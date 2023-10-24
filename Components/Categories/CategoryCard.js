import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryCard = ({ imgUrl }) => {
    console.log(imgUrl)
    return (
        <TouchableOpacity className='relative mr-2 p-1 bg-white rounded'>
            <Image 
                source={{
                    uri: imgUrl,
                }}
                className='h-24 w-24'
            />
        </TouchableOpacity>
    )
}

export default CategoryCard;