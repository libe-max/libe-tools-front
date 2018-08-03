import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import {
  createBundleRequest,
  createBundleSuccess,
  createBundleError,
  pushInBundles,
  setBundlesFilter,
  pushNotification
} from '../actions/actionCreators'
import Component from '../components/blocks/LibeToolThumb'

const state2props = state => ({

})

const dispatch2props = (dispatch, props) => ({
  createNewBundle: e => {
    e.stopPropagation()
    dispatch(createBundleRequest())
    fetch(`/api/create-bundle/${props.type}`)
      .then(r => {
        if (r.ok) return r.json()
        throw new Error(`Error ${r.status}: ${r.statusText}`)
      })
      .then(res => {
        if (!res.err) {
          dispatch(createBundleSuccess(res.data))
          dispatch(pushInBundles(res.data))
          dispatch(pushNotification('Le module a bien été créé !'))
          dispatch(push(`/bundle/${res.data._id}`))
        } else {
          dispatch(createBundleError(res.err))
          const notif = <span>
            <span style={{display: 'block'}}>Impossible de créer ce module de type {props.title}, le serveur a répondu:</span>
            <span style={{display: 'block'}}>{res.err}</span>
          </span>
          dispatch(pushNotification(notif, 'error'))
        }
      })
      .catch(err => {
        dispatch(createBundleError(err.message))
        const notif = <span>
          <span style={{display: 'block'}}>Impossible de créer ce module de type {props.title}, le serveur a répondu:</span>
          <span style={{display: 'block'}}>{err.message}</span>
        </span>
        dispatch(pushNotification(notif, 'error'))
      })
  },
  filterBundles: e => {
    e.stopPropagation()
    dispatch(setBundlesFilter(props.type))
  }
})

export default connect(
  state2props,
  dispatch2props
)(Component)
