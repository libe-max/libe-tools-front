import { connect } from 'react-redux'
import ToolPageComponent from '../components/ToolPage'

const mapStateToProps = (state, ownProps) => {
  return {
    bundles: state.bundles.filter(bundle => bundle.type === ownProps.type),
    type: ownProps.type
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewBundle: () => {
      dispatch({
        type: 'CREATE_BUNDLE_FETCH',
        bundleType: ownProps.type
      })
      fetch(`/api/${ownProps.type}/create`)
        .then(r => r.json())
        .then(res => {
          if (!res.err) {
            dispatch({
              type: 'CREATE_BUNDLE_SUCCESS',
              bundle: res.data
            })
          } else {
            dispatch({
              type: 'CREATE_BUNDLE_FAILURE',
              error: res.err
            })
          }
        })
        .catch(err => {
          dispatch({
            type: 'CREATE_BUNDLE_REQUEST_FAILURE',
            error: err
          })
        })
    }
  }
}

const ToolPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolPageComponent)

export default ToolPage
