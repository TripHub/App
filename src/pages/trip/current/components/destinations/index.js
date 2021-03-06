import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../../components/text'
import Button from '../../../../../components/button'
import Icon from '../../../../../components/icon'
import Container from './components/container'
import Header from './components/header'
import Destination from './components/destination'
import PlaceSearch from './components/placeSearch'

class Destinations extends React.Component {
  state = { showForm: false }

  show = () => this.setState({ showForm: true })
  hide = () => this.setState({ showForm: false })

  handleSubmit = (data) => {
    this.props.createDestination(data)
    this.hide()
  }

  render () {
    const { destinations, hasCreatePermission } = this.props
    let { showForm, address } = this.state

    return (
      <Container>
        {hasCreatePermission &&
          <Header>
            <Button small onClick={this.show}>
              <Text>
                <Icon name='plus' /> add destination
              </Text>
            </Button>
          </Header>
        }

        {showForm && hasCreatePermission && (
          <PlaceSearch
            value={address}
            onCancel={this.hide}
            onSubmit={this.handleSubmit} />
        )}

        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            address={destination.address} />
        ))}
      </Container>
    )
  }
}

Destinations.propTypes = {
  hasCreatePermission: PropTypes.bool.isRequired,
  createDestination: PropTypes.func.isRequired,
  destinations: PropTypes.arrayOf(PropTypes.object)
}

Destinations.defaultProps = {
  destinations: []
}

export default Destinations
