import yellowWord from '../containers/tools-editors/yellow-word'

export const list = [
  {
    name: 'Yellow word',
    type: 'yellow-word',
    description: 'Ce module vous permet d\'éditer de jolis mots jaunes.',
    image: '/images/yellow-word-thumb.png',
    display: yellowWord.DisplayPanel,
    settings: yellowWord.SettingsPanel,
    actions: yellowWord.ActionsPanel
  }, {
    name: 'Libé box',
    type: 'libe-box',
    description: 'Lorem ipsum dolor sit amet consectutor.',
    image: '/images/libe-box-thumb.png'
  }
]
