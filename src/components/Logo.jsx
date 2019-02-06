import React from 'react'
import styled from 'styled-components'

const StyledLogoContainer = styled.div`
  height: ${props => props.theme.normalIconSize};
  width: ${props => props.theme.normalIconSize};
  margin-bottom: ${props => props.theme.smallSpacingSize};

  @media screen and (min-width: 760px){
    height: ${props => props.theme.largeIconSize};
    width: ${props => props.theme.largeIconSize};
  }
`

const Logo = () => (
  <StyledLogoContainer>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 18 18" xml="preserve">
<g>
	<g id="Layer_1_125_">
		<path d="M17.121,3.619C16.555,3.053,15.801,2.741,15,2.741s-1.555,0.312-2.121,0.879    C12.646,3.853,12.333,3.981,12,3.981s-0.646-0.129-0.879-0.362C9.755,2.254,7.936,1.501,6,1.501S2.245,2.254,0.879,3.619    C0.312,4.187,0,4.939,0,5.74s0.312,1.555,0.879,2.121C1.445,8.429,2.199,8.74,3,8.74v4.758c0,1.654,1.346,3,3,3s3-1.346,3-3    c0,1.654,1.346,3,3,3s3-1.346,3-3V9.332c0.784-0.356,1.501-0.851,2.12-1.47C17.688,7.295,18,6.542,18,5.74    S17.688,4.187,17.121,3.619z M15.707,6.448C14.939,7.215,13.992,7.693,13,7.885v5.614c0,0.553-0.447,1-1,1s-1-0.447-1-1V7.884    c-0.992-0.191-1.939-0.67-2.707-1.437C7.919,6.073,7.472,5.825,7,5.672v7.826c0,0.553-0.447,1-1,1s-1-0.447-1-1V5.672    C4.527,5.823,4.081,6.073,3.707,6.448C3.512,6.644,3.256,6.74,3,6.74S2.488,6.642,2.293,6.447c-0.391-0.391-0.391-1.023,0-1.414    C3.314,4.012,4.657,3.501,6,3.501s2.685,0.511,3.707,1.532C10.34,5.665,11.17,5.981,12,5.981c0.831,0,1.661-0.316,2.293-0.948    C14.488,4.839,14.744,4.74,15,4.74s0.512,0.098,0.707,0.293C16.098,5.424,16.098,6.057,15.707,6.448z" fill="#10ac84"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
  </StyledLogoContainer>
)

export default Logo