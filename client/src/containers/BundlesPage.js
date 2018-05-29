import { connect } from 'react-redux'
import {
  getBundlesRequest,
  getBundlesSuccess,
  getBundlesFailure } from '../actions/actionCreators'
import BundlesPageComponent from '../components/BundlesPage'

const mapStateToProps = (state) => {
  return {
    bundles: state.bundles.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBundles: () => {
      dispatch(getBundlesRequest())
      fetch(`/api/get-all-bundles`)
        .then(r => r.json())
        .then(res => {
          if (!res.err) dispatch(getBundlesSuccess(res.data))
          else dispatch(getBundlesFailure(res.err))
        })
        .catch(err => { dispatch(getBundlesFailure(err)) })
    }
  }
}

const BundlesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BundlesPageComponent)

export default BundlesPage
