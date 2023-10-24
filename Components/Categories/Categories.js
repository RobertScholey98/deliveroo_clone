import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import CategoryCard from './CategoryCard';

const Categories = () => {

    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            showsHorizontalScrollIndicator={false}
        >
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
            <CategoryCard imgUrl='https://links.papareact.com/wru'/>
        </ScrollView>
    )
}

export default Categories;