import React from 'react'
import { Global, css } from '@emotion/react'
import { colors } from './colors'

export const GlobalStyles = (): React.ReactElement => (
  <Global
    styles={css`
      html, 
      .root {
      height: 100%;
      }
      body {
        margin: 0px;
      }
    `}
  />
)
