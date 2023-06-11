import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopulareInstractor/PopularInstructors ';
import ExtraSection from '../ExrtaSection/ExtraSection';
import Translation from '../Translation/Translation';
import { AuthContext } from '../../../provider/AuthProvider';


const Home = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">

                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
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