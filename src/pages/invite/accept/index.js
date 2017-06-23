import React from 'react'
import { connect } from 'react-redux'
import { loginRequired } from '../../../enhancers'
import { getInvite, acceptInvite } from '../../../data/invite/actions'
import NotFound from '../../error/notFound'

class Accept extends React.Component {
  state = { notFound: false }

  componentDidMount () {
    const id = this.props.match.params.id
    this.props.getInvite(id).then(({ error, payload }) => {
      error
        ? this.setState({ notFound: true })
        : this.props.accept(id)
          .then((action) => {
            action.error
              ? console.log('error', action.payload)
              : this.props.history.replace(`/${payload.trip.id}`)
          })
    })
  }

  render () {
    return this.state.notFound
      ? <NotFound />
      : <div />
  }
}

const mapDispatchToProps = (dispatch) => ({
  getInvite: (id) => dispatch(getInvite(id)),
  accept: (id) => dispatch(acceptInvite(id))
})

const AcceptPage = loginRequired(Accept)
export default connect(null, mapDispatchToProps)(AcceptPage)
