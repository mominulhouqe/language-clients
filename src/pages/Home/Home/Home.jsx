import React from 'react';
import Banner from '../Banner/Banner';

import PopularInstructors from '../PopulareInstractor/PopularInstructors ';
import ExtraSection from '../ExrtaSection/ExtraSection';
import Translation from '../Translation/Translation';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopulareTopics from '../PopulareTopics/PopulareTopics';
import Frequently from '../Frequently/Frequently';
import JoinUs from '../JoinUs/JoinUs';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Translation></Translation>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <PopulareTopics />
            <Frequently />
            <ExtraSection></ExtraSection>
            <JoinUs />
        </div>
    );
};

export default Home;