import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import React from 'react';
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const Payables = () => {

    return (
        <div>
            <Seo title={"Bill Payables"} />
            <div className="about-container mb-6">
                <div className="aboutus-banner">
                    <div className="aboutus-banner-content container">
                        <div className="grid grid-cols-12 sm:gap-x-6">
                            <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                                <div className="p-4 lg:p-0 text-start mb-6">
                                    <h6 className="font-semibold text-white pb-6">
                                        <span className="about-heading-white text-[1rem]">Payables - Coming soon</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Payables.layout = "Contentlayout"

export default Payables