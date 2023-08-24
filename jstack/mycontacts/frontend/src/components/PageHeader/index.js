import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/images/icons/arrow.svg'
import PropTypes from 'prop-types'

function PageHeader({title}) {
  return (
    <Container>
      <Link to="/">
        <img src={Arrow} alt='back'/>
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}

export default PageHeader

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
