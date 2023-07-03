import React from 'react';

const Frequently = () => {
    return (
        <div>


            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-8">
                        Frequently Asked Questions about Language Learning
                    </h2>

                    <div className='mx-4'>
                        <div className="collapse collapse-plus bg-base-100 mb-2">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                            Why is it important to study languages?
                            </div>
                            <div className="collapse-content">
                                <p>The ability to communicate through language is one of the most important things that defines us as humans. But for some people, language learning essentially stops after they learn to speak their own native tongue at a young age - or, for others, once they finish their required foreign language courses in high school or college. This is especially common in America, where learning languages other than English can seem like an unnecessary luxury or an academic exercise.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-300 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                What kind of career paths are possible with language skills?
                            </div>
                            <div className="collapse-content">
                                <p>“Soft skills” of all kinds, including strong interpersonal communications ability, are in high demand for employers of all kinds. The ability to speak foreign languages is a particularly powerful case; the ability to speak multiple languages is indicative of a higher level of communications skills in general, and for more and more businesses this capability can be a major asset. For example, in America, many jobs in areas as diverse as customer support and restaurant management may either require or preferentially hire applicants that speak Spanish.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-100 mb-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                              How do i know if language learning is right for me ?

                            </div>
                            <div className="collapse-content">
                                <p>People who desire to speak a second language are best suited for language learning. Language learning is about broadening your horizons and finding ways to communicate with people you may not have been able to engage with before. If you travel to other countries, language learning can help you navigate not only a workspace but restaurants, hotels, and other daily arrangements. People who want to improve communication skills, send clearer emails, and feel confident speaking to colleagues are great candidates for language learning.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                              What online courses does Coursera offer for building language skills ?

                            </div>
                            <div className="collapse-content">
                                <p>The most common career path for someone in language learning is teaching English as a second language. This rewarding career path is a great way to effectively teach learners how to confidently read, write, and converse in a second language. The next gradual step for more advanced speakers is a career as a translator working in a business, hospital, courtroom, or school.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Frequently;