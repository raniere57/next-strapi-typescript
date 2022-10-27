export type LandingPageProps = {
  logo?: {
    data: {
      attributes: {
        alternativeText: string,
        url: string
      }
    }
  }
  header?: {
    title: string,
    description: string,
    image: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    },
    button: {
      label: string
      url: string
    }
  }
  sectionAboutProject?: {
    title: string,
    description: string
    image: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
  }
  sectionTech?: {
    title: string
    techIcons: [{
      title: string,
      icon: {
        data: {
          attributes: {
            url: string
            alternativeText: string
          }
        }
      }
    }]
  }
  sectionConcepts?: {
    title: string
    concepts: [{
      title: string
    }]
  }
  sectionModules?: {
    title: string
    modules: [{
      title: string
      subtitle: string
      description: string
    }]
  }
  sectionAgenda?: {
    title: string
    description: string
  }
  pricingBox?: {
    totalPrice: number
    discountPrice: number
    benefits: [{
      benefitsItem: string
    }]
    button: {
      label: string
      url: string
    }
  }
  sectionAboutUs?: {
    title: string
    authors: {
      data: [{
        attributes: {
          photo: {
            data: {
              attributes: {
                url: string
              }
            }
          }
          name: string
          role: string
          socialLinks: [{
            title: string
            url: string
          }]
          description: string
        }
      }]
    }
  }
  sectionReviews?: {
    title: string
    reviews: [{
      name: string
      text: string
      photo: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }]
  }
  sectionFaq?: {
    title: string
    questions: [{
      question: string
      answer: string
    }]
  }
}