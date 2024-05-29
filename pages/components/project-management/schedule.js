import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import GanttChart from './gantt-chart';
import React from 'react';
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const Schedule = () => {

    return (
        <div>
            <Seo title={"Project Schedule"} />
            <GanttChart />
            
        </div>
    )
}
Schedule.layout = "Contentlayout"

export default Schedule