import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/fr'
import ShadowBox from '../../boxes/ShadowBox'
import Image from '../../images/Image'
import Button from '../../buttons/Button'
import ParagraphTitle from '../../text-levels/ParagraphTitle'
import Paragraph from '../../text-levels/Paragraph'
import Wrapper from './style'

/*
 *   Libé bundle thumb component
 *   ------------------------------------------------------
 *
 *   DESCRIPTION
 *   A block displaying information about bundles built
 *   by users
 *
 *   VARIANTS
 *   loading
 *
 *   PROPS
 *   title, image, type, author, created, updated,
 *   published, loading
 *
 */

export default class LibeBundleThumb extends Component {
  constructor () {
    /* [WARN]
     * The logic below is only
     * for style purpose */
    super()
    this.state = {
      loaderWidths: [
        Math.random() * 9 + 88 + '%',
        Math.random() * 45 + 25 + '%',
        Math.random() * 20 + 30 + '%',
        Math.random() * 20 + 40 + '%'
      ]
    }
  }

  render () {
    const props = this.props

    /* Readable dates */
    const makeReadable = timestamp => timestamp
      ? moment(timestamp, 'x')
        .locale('fr')
        .format('DD MMMM YYYY')
        .toLowerCase() : null
    const created = makeReadable(props.created)
    const updated = makeReadable(props.updated)
    const published = makeReadable(props.published)

    /* Meta data */
    const meta = {
      who: `${props.type}, par ${props.author}`,
      when: `Créé le ${created}`
    }
    if (published) meta.when += `, publié le ${published}`
    else if (updated) meta.when += `, mis à jour le ${updated}`
      
    /* Display */
    let classes = 'libe-bundle-thumb'
    if (props.loading) classes += ' libe-bundle-thumb_loading'
    return <Wrapper className={classes}>
      <ShadowBox>
        <div className='libe-bundle-thumb__top'>
          <div className='libe-bundle-thumb__image-placeholder' />
          <div className='libe-bundle-thumb__title-placeholder'>
            <div style={{ width: this.state.loaderWidths[0] }} />
            <div style={{ width: this.state.loaderWidths[1] }} />
          </div>
          <div className='libe-bundle-thumb__image'>
            <Image position='center' src={props.image} />
          </div>
          <div className='libe-bundle-thumb__title'>
            <ParagraphTitle>{props.title}</ParagraphTitle>
          </div>
        </div>
        <div className='libe-bundle-thumb__bottom'>
          <div className='libe-bundle-thumb__meta-placeholder'>
            <div style={{ width: this.state.loaderWidths[2] }} />
            <div style={{ width: this.state.loaderWidths[3] }} />
          </div>
          <div className='libe-bundle-thumb__meta'>
            <Paragraph light small>{meta.who}<br />{meta.when}</Paragraph>
          </div>
          <div className='libe-bundle-thumb__actions'>
            <Button minor dangerous>Supprimer</Button>
            <Button>Voir, modifier & publier</Button>
          </div>
        </div>
      </ShadowBox>
    </Wrapper>
  }
}
