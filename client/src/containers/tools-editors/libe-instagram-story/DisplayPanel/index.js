import React, { Component } from 'react'

import Button from '../../../../components/buttons/Button'
import BlockTitle from '../../../../components/text-levels/BlockTitle'
import Paragraph from '../../../../components/text-levels/Paragraph'
import LibeInstaStorySlideWysiwyg from './components/LibeInstaStorySlideWysiwyg/'

import Wrapper from './style'

const story = {pages: [{/* Page 1 */display: 'cover',title: {value: 'Kim-Trump',size: 16},text: {value: 'Un an de loopings diplomatiques',size: 16},background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}, {url: 'https://www.3dpetproducts.com/wp-content/uploads/2012/08/MallardDuck04.jpg',position: [50, 50]}]}, {/* Page 2 */display: 'image-and-text',title: {value: 'Le 9 février 2018',size: 16},text: {value: 'Des représentants des deux Corées franchissent la zone démilitarisée pour participer à la cérémonie d’ouverture des JO de Pyeongchang.',size: 16},image: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}}, {/* Page 3 */display: 'quote-on-bg-image',text: {value: 'On vous pose une question sur Harvey, vous répondez, ça finit en titre',size: 16},name: {value: 'Cate Blanchett',size: 16},background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}]}, {/* Page 4 */display: 'full-image',background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}]}, {/* Page 5 */display: 'text-on-bg-image',text: {value: 'Notre photographe Olivier Metzger toujours sur la brèche',size: 16},background_images: [{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',position: [50, 50]}]}]}

export default class LibeInstagramStoryWysiwyg extends Component {
  constructor () {
    super()
    this.centerPanel = this.centerPanel.bind(this)
  }

  centerPanel(n) {
    if (!this.node) return
    const panel = this.node.querySelector('.libe-instagram-story-wysiwyg__pages')
    const panelWidth = panel.offsetWidth
    console.log(panelWidth)
  }

  render () {
    this.centerPanel(1)
    const latestSettings = Object.assign({}, this.props.latestSettings, { pages: story.pages })
    const props = Object.assign({}, this.props, { latestSettings })
    const pages = latestSettings.pages
    
    const classes = [`libe-instagram-story-wysiwyg`]
    return <Wrapper className={classes.join(' ')} innerRef={node => this.node = node}>
      <div className='libe-instagram-story-wysiwyg__page-controls'>
        <div className='libe-instagram-story-wysiwyg__pages-navigation'>
          <Button link minor>Go prev</Button>
          <BlockTitle>Page 2</BlockTitle>
          <Button link minor>Go next</Button>
        </div>
        <div className='libe-instagram-story-wysiwyg__page-display'>
          <Button link minor>Quel display ?</Button>
        </div>
      </div>
      <div className='libe-instagram-story-wysiwyg__pages'>
        {pages.map((page, i) => <div className='libe-instagram-story-wysiwyg__slide' key={i}>
          <LibeInstaStorySlideWysiwyg {...page} />
        </div>)}
      </div>
    </Wrapper>
  }
}
