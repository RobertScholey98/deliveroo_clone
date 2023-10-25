import { 
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    UserIcon,
    MagnifyingGlassIcon
        } from 'react-native-heroicons/outline';

import Categories from '../Components/Categories/Categories'
import FeaturedRow from '../Components/FeaturedRow/FeaturedRow';

import { client as sanityClient } from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();

    const [featuredCategories, setFeaturedCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == 'featuredCategories'] {
                name,
                description,
                'restaurants': restaurants[]->{
                    title,
                    image,
                    street,
                    town,
                    rating,
                    categories
                }
            }
        `).then((data) => {
            setFeaturedCategories(data);
        });
        sanityClient.fetch(`
            *[_type == 'category'] {
                title,
                image
            }
        `).then((data) => {
            setCategories(data);
        });
    },[])

    //console.log({featuredCategories, categories})

    return (
        <SafeAreaView className='bg-white p5'>
            {/*header*/}
            <View className='flex-row pb-3 items-center mx-4 space-x-4'>
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 rounded-full'
                />
                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                        <Text className='font-bold text-xl'>
                            Current Location
                            <ChevronDownIcon size={20} color='#00CCBB' />
                        </Text>
                </View>
                <UserIcon size={30} color='#00CCBB'/>
            </View>
            {/*header*/}
            {/*searchBox*/}
            <View className='flex-row items-center pb-3 px-2'>
                <View className='flex-row flex-1 bg-gray-200 p-3 mx-1 items-center rounded-full'>
                    <MagnifyingGlassIcon size={20} color='gray' />
                    <TextInput 
                        className='flex-1 px-2'
                        placeHolder='Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon 
                    size={30} 
                    color='#00CCBB'
                    className='mx-2'    
                />
            </View>
            {/*searchBox*/}
            {/*body*/}
            <ScrollView 
                className='bg-gray-200 pt-2'
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                <Categories categories={categories}/>
                <FeaturedRow
                    id={0}
                    title='Featured'
                    description='Paid placements from our partners'
                />
                <FeaturedRow
                    id={1}
                    title='Tasty Discounts'
                    description="Everyone's been enjoying these juicy discounts!"
                />
                <FeaturedRow
                    id={1}
                    title='Offers near you!'
                    description="Everyone's been enjoying these juicy discounts!"
                />
            </ScrollView>
            {/*body*/}

        </SafeAreaView>
    )
}

export default HomeScreen;