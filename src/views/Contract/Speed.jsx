import React from 'react';
import PropTypes from 'prop-types';
import ReactSpeedometer from 'react-d3-speedometer';
import { Speedometers, SpeedometerWrapper } from './styles';

const Speed = ({ timeFactor, consumeFactor }) => {
  return (
    <Speedometers>
      <SpeedometerWrapper>
        <h3>Consumo de tiempo</h3>
        <ReactSpeedometer
          maxValue={100}
          value={timeFactor > 100 ? 100 : timeFactor}
          segmentColors={[
            '#6AD72D',
            '#AEE228',
            '#ECDB23',
            '#F6961E',
            '#FF471A',
          ]}
          currentValueText={`${timeFactor} %`}
          forceRender
        />
      </SpeedometerWrapper>
      <SpeedometerWrapper>
        <h3>Consumo de material</h3>
        <ReactSpeedometer
          maxValue={100}
          value={consumeFactor > 100 ? 100 : consumeFactor}
          segmentColors={[
            '#6AD72D',
            '#AEE228',
            '#ECDB23',
            '#F6961E',
            '#FF471A',
          ]}
          currentValueText={`${consumeFactor} %`}
          forceRender
        />
      </SpeedometerWrapper>
    </Speedometers>
  );
};

Speed.propTypes = {
  timeFactor: PropTypes.number.isRequired,
  consumeFactor: PropTypes.number.isRequired,
};

export default Speed;
