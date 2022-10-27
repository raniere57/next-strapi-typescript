import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import content from './content'
import * as S from './styles'
import { LandingPageProps } from 'types/api'

const SectionAboutUs = ({ sectionAboutUs }: LandingPageProps) => (
  <Container>
    <Heading reverseColor>{sectionAboutUs.title}</Heading>

    <S.Content>
      {sectionAboutUs.authors.data.map(({ attributes }) => (
        <ProfileCard
          key={attributes.name}
          name={attributes.name}
          role={attributes.role}
          image={attributes.photo.data.attributes.url}
          socialLinks={attributes.socialLinks}
          description={attributes.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
