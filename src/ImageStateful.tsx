import styled, { css } from 'styled-components'

// defines an image that can either be active or inactive
const ImageStateful = styled.img<{$active?: boolean}>`
    filter:  invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(50%) contrast(100%);

    ${props => 
    props.$active &&
    css`
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(57deg) brightness(107%) contrast(101%);
    `};
`

export default ImageStateful;