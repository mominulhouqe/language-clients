import React from 'react';
import Banner from '../Banner/Banner';

import PopularInstructors from '../PopulareInstractor/PopularInstructors ';
import ExtraSection from '../ExrtaSection/ExtraSection';
import Translation from '../Translation/Translation';
import PopularClasses from '../PopularClasses/PopularClasses';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Translation></Translation>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;