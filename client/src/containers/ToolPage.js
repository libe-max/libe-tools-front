import { connect } from 'react-redux'
import {
  getBundlesRequest,
  getBundlesSuccess,
  getBundlesFailure,
  createBundleRequest,
  createBundleSucess,
  createBundleFailure } from '../actions/actionCreators'
import ToolPageComponent from '../components/ToolPage'

const mapStateToProps = state => {
  const pathname = window.location.pathname
  const toolType = pathname.split('/tools/')[1]
  return {
    type: toolType,
    loading: state.bundles.fetching,
    error: state.bundles.error,
    bundles: state.bundles.list.filter(bundle => {
      return bundle.type === toolType
    })
  }
}

const mapDispatchToProps = dispatch => {
  const pathname = window.location.pathname
  const toolType = pathname.split('/tools/')[1]
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
    },
    createNewBundle: () => {
      dispatch(createBundleRequest(toolType))
      fetch(`/api/${toolType}/create`)
        .then(r => r.json())
        .then(res => {
          if (!res.err) dispatch(createBundleSucess(res.data))
          else dispatch(createBundleFailure(res.err))
        })
        .catch(err => { dispatch(createBundleFailure(err)) })
    }
  }
}

const ToolPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolPageComponent)

export default ToolPage
