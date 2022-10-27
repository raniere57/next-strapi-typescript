import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { LandingPageProps } from 'types/api'

const SectionAgenda = ({ sectionAgenda }: LandingPageProps) => (
  <Container id="agenda">
    <Heading reverseColor>{sectionAgenda.title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: sectionAgenda.description }} />
  </Container>
)

export default SectionAgenda
