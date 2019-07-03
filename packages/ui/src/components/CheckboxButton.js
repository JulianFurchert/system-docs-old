import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SystemTypes from '@styled-system/prop-types'
import { css, layout, space } from '../system-functions'
import { COLOR_SCHEMES } from '../theme-functions'
import { Icon } from './Icon'

const CheckboxWrapper = styled('label')(
  {
    position: 'relative',
    display: 'inline-block'
  },
  layout,
  space
);

const Input = styled('input')({
  appearance: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  outline: 'none',
  margin: 0,
  opacity: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:hover': {
    cursor: 'pointer',
  },
});

const FakeCheckbox = styled('div')( ({ scheme }) =>
  css({
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    lineHeight: 1,
    fontFamily: 'normal',
    fontWeight: 400,
    fontSize: 1,
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'text.inactive',
    height: 5,
    px: 2,
    borderRadius: 'smallComponents',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    [`${Input}:checked + &`]: {
      color: `${scheme}.1`,
    },
    [`${Input}:hover + &`]: {
      backgroundColor: `text.02`,
    },
    [`${Input}:hover:checked + &`]: {
      backgroundColor: `${scheme}.02`,
    },
  })
);

export const CheckboxButton = ({
  scheme = "primary",
  text = 'checkboxButton',
  icon,
  checked,
  onChange,
  ...props
}) => {
  const isControlled = checked !== undefined && onChange !== undefined;
  const [isChecked, setIsChecked] = useState(checked || true);

  // keep local state in sync with `value` prop
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <CheckboxWrapper {...props} >
      <Input
        checked={isChecked}
        type="checkbox"
        onChange={
          isControlled
            ? onChange
            : event => setIsChecked(event.target.checked)
        }
      />
      <FakeCheckbox scheme={scheme}>
        {icon ? (
          <Icon
            name={icon}
            size={ 15 }
            color={ isChecked ? `${scheme}` : `'text.inactive'`}
          />
        ) : text }
      </FakeCheckbox>
    </CheckboxWrapper>
  );
};

CheckboxButton.propTypes = {
  scheme: PropTypes.oneOf(COLOR_SCHEMES),
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  text: PropTypes.string,
  ...SystemTypes.layout,
  ...SystemTypes.space,
}
