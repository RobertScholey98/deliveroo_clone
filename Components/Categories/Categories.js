import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import CategoryCard from './CategoryCard';

const Categories = ({ categories }) => {
    
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if(categories[0]?.title) {
            setDataLoaded(true);
        }
    },[categories]);

    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            className='bg-gray-200'
            showsHorizontalScrollIndicator={false}
        >
            {   dataLoaded &&
                categories.map((category) => <CategoryCard title={category.title} image={category.image} />)
            }
        </ScrollView>
    )
}

export default Categories;