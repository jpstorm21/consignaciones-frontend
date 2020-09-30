import React, { useContext } from 'react';
import { Divider } from '@material-ui/core';
import { Container, RowContainer, ColContainer } from './styles';
import { MainSummaryContext } from '../../stores';
import { Mlp, Ant, Cen, Cmz } from './Summaries';

const MainContent = () => {
  const { data, sizesPlot } = useContext(MainSummaryContext);
  return (
    <>
      <Container>
        <RowContainer>
          <ColContainer>
            <Mlp data={data} sizes={sizesPlot} />
          </ColContainer>
          <Divider orientation="vertical" flexItem />
          <ColContainer>
            <Cen data={data} sizes={sizesPlot} />
          </ColContainer>
        </RowContainer>
        <Divider />
        <RowContainer>
          <ColContainer>
            <Ant data={data} sizes={sizesPlot} />
          </ColContainer>
          <Divider orientation="vertical" flexItem />
          <ColContainer>
            <Cmz data={data} sizes={sizesPlot} />
          </ColContainer>
        </RowContainer>
      </Container>
    </>
  );
};

export default MainContent;
