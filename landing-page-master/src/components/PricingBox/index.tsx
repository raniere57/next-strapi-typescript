import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({ pricingBox }: LandingPageProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${pricingBox.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>R$ {pricingBox.discountPrice}</S.DiscountPrice>
    </S.Prices>

    <S.BenefitsList>
      {pricingBox.benefits.map(({ benefitsItem }, index) => (
        <S.BenefitsItem key={index} dangerouslySetInnerHTML={{ __html: benefitsItem }} />
      ))}
    </S.BenefitsList>

    <Button
      href={pricingBox.button.url}
      onClick={onClick}
      withPrice
    >
      <p>{pricingBox.button.label}</p>
      <div>
        <S.ButtonFullPrice>R${pricingBox.totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R${pricingBox.discountPrice}</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
