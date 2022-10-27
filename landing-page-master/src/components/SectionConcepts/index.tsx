import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { LandingPageProps } from 'types/api'

const SectionConcepts = ({ sectionConcepts }: LandingPageProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{sectionConcepts.title}</Heading>
      <S.List>
        {sectionConcepts.concepts.map((item) => (
          <S.Item key={item.title}>{item.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
