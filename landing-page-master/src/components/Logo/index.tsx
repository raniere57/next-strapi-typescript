import React from 'react'
import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ logo }: LandingPageProps) =>
  <S.LogoWrapper
    src={getImageUrl(logo.data.attributes.url)}
    alt={logo.data.attributes.alternativeText}
  />

export default Logo
