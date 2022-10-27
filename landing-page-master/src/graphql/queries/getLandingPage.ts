const GET_LANDING_PAGE = /* GraphQL */`
fragment logo on LandingPage {
  logo {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }
}

fragment header on LandingPage {
  header {
    title
    description
    image {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    button {
      label
      url
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      icon {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModules on LandingPage {
	sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    description
  }
}

fragment pricingBox on LandingPage {
  pricingBox {
    totalPrice
    discountPrice
    benefits {
      benefitsItem
    }
    button {
      label
      url
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
    title
    authors {
      data {
        attributes {
          photo {
            data {
              attributes {
                url
              }
            }
          }
          name
          role
          socialLinks {
            title
            url
          }
          description
        }
      }
    }
  }
}

fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      text
      photo {
        data {
          attributes {
            url
          }
        }
      }
    }
  }
}

fragment sectionFAQ on LandingPage {
  sectionFaq {
    title
    questions {
      question
      answer
    }
  }
}


query GET_LANDING_PAGE {
	landingPage {
    data {
      attributes {
        ...logo
        ...header
        ...sectionAboutProject
        ...sectionTech
        ...sectionConcepts
        ...sectionModules
        ...sectionAgenda
        ...pricingBox
        ...sectionAboutUs
        ...sectionReviews
        ...sectionFAQ
      }
    }
  }
}

`

export default GET_LANDING_PAGE