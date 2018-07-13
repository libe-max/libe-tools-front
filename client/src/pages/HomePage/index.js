import React, { Component } from 'react'
import Header from '../../components/blocks/Header'
import SearchField from '../../components/inputs/SearchField'
import LibeToolThumb from '../../components/blocks/LibeToolThumb'
import LibeBundleThumb from '../../components/blocks/LibeBundleThumb'
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
    const bundlesDom = bundles.list.map((bundle, i) => {
      const settings_history = bundle.settings_history || []
      const settings = settings_history
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

    return <Wrapper className='home-page'>
      <div className='home-page__header'><Header /></div>
      <div className='home-page__content'>
        <div className='home-page__tools-panel'>
          <div className='searchable-list'>
            <div className='home-page__tools-search'><SearchField placeholder='Rechercher un outil' /></div>
            <div className='home-page__tools-list'>
              <div className='home-page__tools-list-slider'>
                <LibeToolThumb title='Yellow word' type='yellow-word' image='/images/yellow-word-thumb.png' description='Ce module vous permet d&#39;éditer de jolis mots jaunes.' />
                <LibeToolThumb title='Libé box' type='libe-box' image='/images/libe-tool-thumb.png' description='Lorem ipsum dolor sit amet consectutor' />
              </div>
            </div>
          </div>
        </div>
        <div className='home-page__bundles-panel'>
          <div className='searchable-list'>
            <div className='home-page__bundles-search'><SearchField placeholder='Rechercher un module' /></div>
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
