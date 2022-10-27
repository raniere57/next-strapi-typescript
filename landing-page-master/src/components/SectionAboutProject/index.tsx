import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({ sectionAboutProject }: LandingPageProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(sectionAboutProject.image.data.attributes.url)}
          alt={sectionAboutProject.image.data.attributes.alternativeText}
          loading='lazy'
        />
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: sectionAboutProject.description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
