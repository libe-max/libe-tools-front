import libeInstagramStory from '../containers/tools-editors/libe-instagram-story'
import yellowWord from '../containers/tools-editors/yellow-word'

export const list = [
  {
    name: 'Stories Instagram',
    type: 'libe-instagram-story',
    description: 'Éditez simplement des images à la charte et au format Instagram.',
    image: '/images/libe-instagram-story-thumb.png',
    display: libeInstagramStory.DisplayPanel,
    settings: libeInstagramStory.SettingsPanel,
    actions: libeInstagramStory.ActionsPanel,
    savedActions: libeInstagramStory.SavedActionsPanel
  }, {
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
