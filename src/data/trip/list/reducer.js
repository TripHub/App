/**
 * TODO
 * Find a suitable level of abstraction for reducer logic.
 * Perhaps move logic to action?
 */

import * as actionTypes from './actions'
import * as fetch from '../../../common/fetch'

export const initialState = {
  loading: false,  // loading list
  errors: {},  // object of errors
  didInvalidate: true, // flags whether to fetch from API
  entitiesCount: 0,  // results count from API
  entities: {},  // object of trips
  fetchStatus: {}  // object matching entities, with item fetch statuses
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_TRIPS_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        loading: !action.error
      }
    case actionTypes.GET_TRIPS_SUCCESS:
      return {
        ...state,
        entitiesCount: action.payload.count,
        entities: action.payload.results.reduce((acc, trip) => {
          acc[trip.id] = {
            ...trip,
            is_complete: false  // we don't have all the details about this trip
          }
          return acc
        }, {}),
        fetchStatus: action.payload.results.reduce((acc, trip) => {
          acc[trip.id] = fetch.LOADED
          return acc
        }, {}),
        didInvalidate: false,
        errors: {},
        loading: false
      }
    case actionTypes.GET_TRIPS_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        },
        loading: false
      }
    case actionTypes.GET_TRIP_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        fetchStatus: {
          ...state.fetchStatus,
          [action.meta.id]: action.error ? fetch.ERROR : fetch.LOADING
        }
      }
    case actionTypes.GET_TRIP_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: {
            ...state.entities[action.payload.id],
            ...action.payload,
            is_complete: true  // we have full details about this trip
          }
        },
        fetchStatus: {
          ...state.fetchStatus,
          [action.payload.id]: fetch.LOADED
        }
      }
    case actionTypes.GET_TRIP_FAILURE:
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          [action.meta.id]: fetch.ERROR
        },
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        }
      }
    case actionTypes.CREATE_TRIP_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        loading: !action.error
      }
    case actionTypes.CREATE_TRIP_SUCCESS:
      return {
        ...state,
        didInvalidate: true,
        loading: false
      }
    case actionTypes.CREATE_TRIP_FAILURE:
      return {
        ...state,
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        },
        loading: false
      }
    case actionTypes.DELETE_TRIP_REQUEST:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.error && { [new Date().getTime()]: action.payload }
        },
        fetchStatus: {
          ...state.fetchStatus,
          [action.meta.id]: action.error ? fetch.ERROR : fetch.LOADING
        }
      }
    case actionTypes.DELETE_TRIP_SUCCESS:
      return {
        ...state,
        didInvalidate: true
      }
    case actionTypes.DELETE_TRIP_FAILURE:
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          [action.meta.id]: fetch.ERROR
        },
        errors: {
          ...state.errors,
          [new Date().getTime()]: action.payload
        }
      }
    default:
      return state
  }
}
