import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopulareInstractor/PopularInstructors ';
import ExtraSection from '../ExrtaSection/ExtraSection';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;