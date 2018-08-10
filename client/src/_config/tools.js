import React from 'react'

const list = [
  {
    name: 'Yellow word',
    type: 'yellow-word',
    description: 'Ce module vous permet d\'éditer de jolis mots jaunes.',
    image: '/images/yellow-word-thumb.png',
    display: props => <div>Display component</div>,
    settings: props => <div>Settings component</div>,
    actions: props => <div>Actions component</div>
  }, {
    name: 'Libé box',
    type: 'libe-box',
    description: 'Lorem ipsum dolor sit amet consectutor.',
    image: '/images/libe-box-thumb.png'
  }
]

export { list }
