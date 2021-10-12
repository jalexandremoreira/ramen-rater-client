import React from 'react';

import { theme } from '../theme';

export function FormInput(props) {
  const { colors } = theme;

  return (
    <input
      {...props}
      style={{
        backgroundColor: colors.melon,
        border: 0,
        borderRadius: '5px',
        color: colors.primaryText2,
        fontSize: 'medium',
        margin: '5px 0',
        padding: '10px',
      }}
    />
  );
}
