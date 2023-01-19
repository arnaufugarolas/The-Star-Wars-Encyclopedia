import React from 'react'
import { CategoryCard } from './styles'

export const Index = (props) => {
  const {
    categoryName,
    categoryImage,
    className,
    fontSize,
    backgroundColor,
    textColor,
    fontFamily
  } = props

  return (
    <CategoryCard
      className={className} backgroundImage={categoryImage}
      fontSize={fontSize} backgroundColor={backgroundColor}
      textColor={textColor} fontFamily={fontFamily}
    >
      {categoryName}
    </CategoryCard>
  )
}

Index.defaultProps = {
  categoryName: 'Category',
  className: 'category-card',
  fontSize: '2rem',
  backgroundColor: 'var(--clr-black)',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)'
}

export default Index
