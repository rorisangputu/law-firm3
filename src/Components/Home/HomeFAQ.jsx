import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordian from './Accordian';

const HomeFAQ = () => {
    return (
        <div className="w-full border-t py-10">
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col lg:items-center lg:flex-row font-extralight'>
                    <div className='flex flex-col gap-3 lg:w-1/2'>
                        <p className='text-[#830000] lg:text-2xl'>Frequently Asked Questions</p>
                        <h1 className='text-2xl lg:text-4xl'>We Answered All</h1>
                    </div>
                    <div className='py-7 lg:w-1/2'>
                        <Accordian />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeFAQ;
