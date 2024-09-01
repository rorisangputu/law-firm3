import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordian() {
    return (
        <div className="flex flex-col justify-evenly">
            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                    borderBottom: '1px solid #c7c7c7'
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        color: '#1b2048',
                        fontWeight: 'semibold',

                        fontSize: '25px',
                    }}
                >
                    How do you protect clients rights?
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    Protecting clients rights is one of our core principles. We are dedicated to advocating
                    for our clients' best interest and diligently safeguarding their rights. We represent
                    our clients fairly and effectively throughout our legal processes to help them
                    achieve successful outcomes
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                    borderBottom: '1px solid #c7c7c7'
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        color: '#1b2048',
                        fontWeight: 'semibold',
                        fontSize: '25px',
                    }}
                >
                    What are your achievements in handling legal matters?
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    CRN Law Firm has achieved success in a diverse range of legal matters.
                    We have protected clients' intellectual property rights, providing them
                    with a competitive advantage. Additionally, we have obtained favorable
                    results in commercial litigations and offered support in complex real estate
                    transactions. In family law, we have provided emotional and legal assistance
                    to our clients. Our achievements are a result of our focus on clients, the expertise
                    of our team, and our determination to deliver favorable outcomes.
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                    borderBottom: '1px solid #c7c7c7'
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: 'transparent' }} />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{
                        color: '#1b2048',
                        fontWeight: 'semibold',
                        fontSize: '25px',
                    }}
                >
                    How do you handle sensitive family law matters with care?
                </AccordionSummary>
                <AccordionDetails sx={{ color: '#333', backgroundColor: 'transparent' }}>
                    We understand the sensitive nature of family law cases. Our compassionate
                    team at CRN Law Firm approaches such matters with empathy and discretion,
                    providing emotional support while working diligently to achieve the best
                    possible outcomes for our clients and their families.
                </AccordionDetails>
            </Accordion>
        </div>
    );
}