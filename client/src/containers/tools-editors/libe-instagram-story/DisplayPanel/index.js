import React, { Component } from 'react'

import Wrapper from './style'

const story = {
  pages: [{
    /* Page 1 */
    display: 'cover',
    title: {
      value: 'Kim-Trump',
      size: 16
    },
    text: {
      value: 'Un an de loopings diplomatiques',
      size: 16
    },
    background_images: [{
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',
      position: [50, 50]
    }, {
      url: 'https://www.3dpetproducts.com/wp-content/uploads/2012/08/MallardDuck04.jpg',
      position: [50, 50]
    }]
  }, {

    /* Page 2 */
    display: 'image-and-text',
    title: {
      value: 'Le 9 février 2018',
      size: 16
    },
    text: {
      value: 'Des représentants des deux Corées franchissent la zone démilitarisée pour participer à la cérémonie d’ouverture des JO de Pyeongchang.',
      size: 16
    },
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',
      position: [50, 50]
    }
  }, {

    /* Page 3 */
    display: 'quote-on-bg-image',
    text: {
      value: 'On vous pose une question sur Harvey, vous répondez, ça finit en titre',
      size: 16
    },
    name: {
      value: 'Cate Blanchett',
      size: 16
    },
    background_images: [{
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',
      position: [50, 50]
    }]
  }, {

    /* Page 4 */
    display: 'full-image',
    background_images: [{
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',
      position: [50, 50]
    }]
  }, {

    /* Page 5 */
    display: 'text-on-bg-image',
    text: {
      value: 'Notre photographe Olivier Metzger toujours sur la brèche',
      size: 16
    },
    background_images: [{
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Dendrocygna_viduata_upright.jpg/1200px-Dendrocygna_viduata_upright.jpg',
      position: [50, 50]
    }]
  }
]}


export default class DisplayPanel extends Component {
  render () {
    const props = this.props
    const latestSettings = props.latestSettings

    const classes = ['libe-instagram-story-display-panel']
    const pagesDOM = story.pages.map((page, i) => {
      return <div key={i}>{page.display}</div>
    })

    return <Wrapper className={classes.join(' ')}>
      {pagesDOM}
    </Wrapper>
  }
}
