import React from 'react'
import { connect } from 'react-redux'
import { dashboardPageWithLogin } from '../../../enhancers'
import { getTrip } from '../../../data/trip/current/actions'
import { Title, Link } from '../../../components/text'

class Trip extends React.Component {
  componentDidMount () {
    // only call API if the trip isn't already loaded
    if (this.props.match.params.id !== this.props.id) {
      this.props.getTrip(this.props.match.params.id)
    }
  }

  render () {
    const { trip } = this.props
    return trip.error.status
      ? <p>Not found.</p>
      : (
      <div>
        <Title>{trip.title}</Title>
        <Link to='/'>Change trip</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ trip }) => ({ trip: trip.current })

const mapDispatchToProps = (dispatch) => ({
  getTrip: (id) => dispatch(getTrip(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(dashboardPageWithLogin(Trip))
