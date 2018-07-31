import React, { Component } from 'react'
import Paragraph from '../../components/text-levels/Paragraph'
import Button from '../../components/buttons/Button'
import Header from '../../components/blocks/Header'
import SearchField from '../../components/inputs/SearchField'
import LibeToolThumb from '../../containers/LibeToolThumb'
import LibeBundleThumb from '../../containers/LibeBundleThumb'
import Wrapper from './style'

export default class HomePage extends Component {
  constructor (props) {
    super(props)
    if (props.getBundles) props.getBundles()
  }

  render () {
    const props = this.props
    const bundles = props.bundles || {
      list: [],
      error: null,
      isFetching: false,
      updatedAt: null
    }

    /* Bundles list */
    const bundlesDom = bundles.list.map((bundle, i) => {
      const settingsHistory = bundle.settings_history || []
      const settings = settingsHistory
        .sort((a, b) => (b.timestamp - a.timestamp))[0]
      return <LibeBundleThumb
        key={i}
        type={bundle.type}
        bundleId={bundle._id}
        author={bundle.author}
        created={bundle.created_on}
        updated={settings.timestamp || null}
        image={`/images/${bundle.type}-small.png`}
        title={settings.name || '(sans titre)'} />
    })

    /* Assign classes to component */
    const classes = ['home-page']
    if (bundles.error) classes.push('home-page_bundles-error')
    if (bundles.isFetching) classes.push('home-page_bundles-fetching')
    if (!bundles.list.length) classes.push('home-page_bundles-empty')

    /* Display */
    return <Wrapper className={classes.join(' ')}>
      <div className='home-page__header'><Header /></div>
      <div className='home-page__content'>
        <div className='home-page__tools-panel'>
          <div className='searchable-list'>
            <div className='home-page__tools-search'><SearchField placeholder='Rechercher un outil' /></div>
            <div className='home-page__tools-list'>
              <div className='home-page__tools-list-slider'>
                <LibeToolThumb
                  title='Yellow word'
                  type='yellow-word'
                  image='/images/yellow-word-thumb.png'
                  description='Ce module vous permet d&#39;éditer de jolis mots jaunes.' />
                <LibeToolThumb
                  title='Libé box'
                  type='libe-box'
                  image='/images/libe-tool-thumb.png'
                  description='Lorem ipsum dolor sit amet consectutor' />
              </div>
            </div>
          </div>
        </div>
        <div className='home-page__bundles-panel'>
          <div className='searchable-list'>
            <div className='home-page__bundles-search'><SearchField placeholder='Rechercher un module' /></div>
            <div className='home-page__bundles-loader'><img src='/images/loader.gif' /></div>
            <div className='home-page__bundles-empty'><Paragraph light italic>Aucun module n'a encore été créé !</Paragraph></div>
            <div className='home-page__bundles-error'>
              <Paragraph error>Une erreur est survenue lors du chargement des modules:</Paragraph>
              <Paragraph italic light>{bundles.error || 'Erreur inconnue. Prenez une tisane.'}</Paragraph>
              <Button link onClick={props.getBundles}>Essayer à nouveau ?</Button>
            </div>
            <div className='home-page__bundles-list'>
              <div className='home-page__bundles-list-slider'>
                {bundlesDom}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  }
}
