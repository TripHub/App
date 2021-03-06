import React from 'react'
import Icon from '../../../icon'
import { Small } from '../../../text'
import Container from './components/container'
import Image from './components/image'
import ImagePlaceholder from './components/imagePlaceholder'

export default ({ loading, picture, onClick, open, ...props }) => (
  <Container loading={loading} onClick={onClick}>
    {
      loading || !picture
        ? <ImagePlaceholder />
        : <Image src={picture} />
    }
    <Small noMargin>Profile <Icon name='caret-down' /></Small>
  </Container>
)
