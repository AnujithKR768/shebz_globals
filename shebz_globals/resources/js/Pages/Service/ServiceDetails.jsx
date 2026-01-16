import React from 'react';
import NavBarView from '../Navbar/NavBarView';
import FooterView from '../Footer/FooterView';

export default function ServiceDetails({ service }) {
    return (
        <div>
        <NavBarView />
        <section className="max-w-5xl mx-auto px-6 md:px-10 mt-24">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">

                {/* IMAGE */}
                <div className="flex justify-center mb-10">
                    <img
                        src={`/storage/${service.icon}`}
                        alt={service.title}
                        className="
                            w-66 h-66
                            md:w-85 md:h-85
                            lg:w-100 lg:h-100
                            object-contain
                        "
                    />
                </div>

                {/* TITLE */}
                <h1
                    className="
                        text-3xl md:text-4xl lg:text-5xl
                        font-extrabold
                        text-center
                        text-gray-900
                        mb-6
                    "
                >
                    {service.title}
                </h1>

                {/* DESCRIPTION */}
                <p
                    className="
                        text-gray-700
                        text-sm sm:text-base md:text-lg lg:text-xl
                        leading-relaxed sm:leading-relaxed md:leading-loose
                        text-justify
                        break-words
                        hyphens-auto
                        max-w-3xl
                        mx-auto
                    "
                >
                    {service.description}
                </p>
            </div>
        </section>
        <FooterView />
        </div>
    );
}
