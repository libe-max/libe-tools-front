import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Component from '../components/blocks/LibeToolThumb'

const state2props = state => ({
  
})

const dispatch2props = (dispatch, props) => ({
  createNewBundle: e => {
    e.stopPropagation()
    dispatch(
      push(`/create-bundle/${props.type}`)
    )
  },
  filterBundles: e => {
    e.stopPropagation()
    alert('filter!')
  }
})

export default connect(
  state2props,
  dispatch2props
)(Component)
