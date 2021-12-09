import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8, text: 'Open Source Projects Hosted'},
  { number: 10, text: 'Completed Udemy Courses', },
  { number: 1000, text: 'Hours of coding', },
  { number: 1, text: 'Years Of Experiance', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
        {
          card.number ? (<BoxNum>{`${card.number}+`}</BoxNum>) : <BoxNum style={{paddingTop: '15px'}}></BoxNum>
        }
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
