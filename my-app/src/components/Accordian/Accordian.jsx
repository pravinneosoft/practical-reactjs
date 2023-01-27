import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../../styles/accordian.scss";
export default function SimpleAccordion() {
  return (
    <div className='container'>
      <h2 className='title-f'>FAQ'S</h2>
      <Accordion className='ac-border'>
        <AccordionSummary className='acr-text'
          expandIcon={<ExpandMoreIcon  className="icons"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
     
        >
          <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='ac-border'>
        <AccordionSummary className='acr-text'
          expandIcon={<ExpandMoreIcon className="icons"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
      
        >
          <Typography>Lorem Ipsum is simply dummy text of the printing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='ac-border'>
        <AccordionSummary className='acr-text'
          expandIcon={<ExpandMoreIcon   className="icons"/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        
        >
          <Typography>Lorem Ipsum is simply dummy text of the printing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='ac-border'>
        <AccordionSummary className='acr-text'
          expandIcon={<ExpandMoreIcon className="icons" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          
        >
          <Typography>Lorem Ipsum is simply dummy text of the printing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}