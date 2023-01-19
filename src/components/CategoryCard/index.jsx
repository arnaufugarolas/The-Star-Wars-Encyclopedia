import React from 'react'
import { CategoryCard, CategoryLink } from './styles'

export const Index = (props) => {
  const {
    categoryName,
    categoryImage,
    className,
    fontSize,
    backgroundColor,
    textColor,
    fontFamily,
    route
  } = props

  return (
    <CategoryLink to={route}>
      <CategoryCard
        className={className} backgroundImage={categoryImage}
        fontSize={fontSize} backgroundColor={backgroundColor}
        textColor={textColor} fontFamily={fontFamily}
      >
        {categoryName}
      </CategoryCard>
    </CategoryLink>
  )
}

Index.defaultProps = {
  categoryName: 'Category',
  className: 'category-card',
  fontSize: '2rem',
  backgroundColor: 'var(--clr-black)',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  route: 'category'
}

export default Index
