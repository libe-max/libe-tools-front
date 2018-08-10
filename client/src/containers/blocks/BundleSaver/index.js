import { connect } from 'react-redux'
import { state2props, dispatch2props, mergeProps } from './connected'

import React, { Component } from 'react'
import moment from 'moment'
import Paragraph from '../../../components/text-levels/Paragraph'
import Button from '../../../components/buttons/Button'
import Wrapper from './style'

class BundleSaver extends Component {
  render() {
    const props = this.props

    const lastSave = props.savedBundle._getLastSaveDate()
    const readableLastSave = lastSave ?
      moment(lastSave, 'x').fromNow() :
      '-'

    const classes = ['bundle-saver']
    if (props.unsaved) classes.push('bundle-saver_unsaved')

    return <Wrapper className={classes.join(' ')}>
      <div className='bundle-saver__saved-paragraph'>
        <Paragraph light small>
          Module sauvegardé (dernière modif. : {readableLastSave})
        </Paragraph>
      </div>
      <div className='bundle-saver__save-button'>
        <Button onClick={props.saveBundle} primary>Enregistrer</Button>
      </div>
    </Wrapper>
  }
}

export default connect(
  state2props,
  dispatch2props,
  mergeProps
)(BundleSaver)
