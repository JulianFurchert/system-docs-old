import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SystemTypes from '@styled-system/prop-types'
import { css, space, layout } from '../system-functions'
import { COLOR_SCHEMES } from '../theme-functions'


const Wrapper = styled('div')(
  {
    width: '100%',
    position: 'relative',
    display: 'flex',
  },
  layout,
  space
);

const trackStyle = {
  backgroundColor: 'transparent',
  height: '2px',
};

const thumbStyle = {
  appearance: 'none',
  borderRadius: '50%',
  height: '12px',
  width: '12px',
  marginTop: '-5px',
  color: 'white',
};

const thumbFocusStyle = {
  height: '16px',
  width: '16px',
  marginTop: '-7px',
};

const thumbHoverStyle = {
  height: '14px',
  width: '14px',
  marginTop: '-6px',
};

const Input = styled('input')( ({ scheme }) =>
  css({
    appearance: 'none',
    background: 'transparent',
    cursor: 'pointer',
    display: 'block',
    paddingY: '7px',
    paddingX: 0,
    margin: 0,
    width: '100%',
    position: 'relative',
    zIndex: 1,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&::-webkit-slider-runnable-track': {
      ...trackStyle,
    },
    '&::-moz-range-track,': {
      ...trackStyle,
    },
    '&::-webkit-slider-thumb': {
      ...thumbStyle,
      backgroundColor: `${scheme}.1`
    },
    '&::-moz-range-thumb': {
      ...thumbStyle,
      backgroundColor: `${scheme}.1`
    },
    '&:hover': {
      '&::-webkit-slider-thumb': {
        ...thumbHoverStyle,
      },
      '&::-moz-range-thumb': {
        ...thumbHoverStyle,
      },
    },
    '&:active': {
      '&::-webkit-slider-thumb': {
        ...thumbFocusStyle,
      },
      '&::-moz-range-thumb': {
        ...thumbFocusStyle,
      },
    },
    '&:focus': {
      outline: 'none',
    },
    '::-moz-focus-outer': {
      border: 0,
    }
  })
);

const Track = styled('div')( ({ scheme }) =>
  css({
    ...trackStyle,
    bg: `${scheme}.04`,
    position: 'absolute',
    left: 0,
    top: '50%',
    right: 0,
    zIndex: 0,
    transform: 'translateY(-50%)',
  })
);

const InnerTrack = styled('div')(({ scheme }) =>
  css({
    ...trackStyle,
    height: '100%',
    bg: `${scheme}.1`,
  })
);

export const Slider = ({
  scheme = 'primary',
  name,
  min = 0,
  max = 100,
  value,
  onChange,
  ...props
}) => {

  const isControlled = value !== undefined && onChange !== undefined;
  const [stateValue, setStateValue] = useState(Number(value) || 0);
  const percentage = ((stateValue - min) * 100) / (max - min || 100);

  // keep local state in sync with `value` prop
  useEffect(() => {
    setStateValue(Number(value));
  }, [value]);

  return (
    <Wrapper {...props}>
      <Input
        scheme={scheme}
        type="range"
        name={name}
        value={String(stateValue)}
        min={min}
        max={max}
        onChange={
          isControlled
            ? onChange
            : event => setStateValue(Number(event.target.value))
        }
      />
      <Track scheme={scheme}>
        <InnerTrack scheme={scheme} style={{ width: `${percentage}%` }} />
      </Track>
    </Wrapper>
  );
}

Slider.propTypes = {
  scheme: PropTypes.oneOf(COLOR_SCHEMES),
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  ...SystemTypes.space
}

