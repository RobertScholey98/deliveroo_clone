import { Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

import { client as sanityClient } from '../../sanity';

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == 'restaurant'] {
            ...
          }
        `).then((data) => {
            setRestaurants(data);
        })
    },[])
    //console.log(restaurants[0])

    return (
        <View className='pt-3 bg-gray-200'>
            <View className='px-3'>
                <Text className='text-xl font-bold pb-1' >
                    {title}
                </Text>
                <Text className='text-md  pb-2 text-gray-500' >
                    {description}
                </Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    height: 210,
                }}
                className=''
                showsHorizontalScrollIndicator={false}
            >
               {
                    restaurants[0] &&
                    restaurants.map((restaurant, index) => {
                        return(
                            <RestaurantCard 
                                name={restaurant.name}
                                rating={restaurant.rating}
                                address={restaurant.address}
                                imageUrl={restaurant.image}
                                categories={restaurant.categories}
                                key={index}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
};

export default FeaturedRow;