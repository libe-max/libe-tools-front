import React, { Component } from 'react'
import Paragraph from '../../components/text-levels/Paragraph'
import Button from '../../components/buttons/Button'
import Header from '../../components/blocks/Header'
import SearchField from '../../components/inputs/SearchField'
import NotificationsPanel from '../../containers/NotificationsPanel'
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
    const bundles = props.bundles
    const filters = props.filters
    const bundleCreation = props.bundleCreation

    /* Bundles list */
    const getBundleCurrentSettings = bundle => {
      const settingsHistory = bundle.settings_history || []
      const currentSettings = settingsHistory
        .sort((a, b) => {
          return (b.timestamp - a.timestamp)
        })[0]
      return currentSettings || {}
    }
    const bundlesWithSlug = bundles.list.map((bundle, i) => {
      const settings = getBundleCurrentSettings(bundle)
      const slug = [
        bundle._id,
        bundle.author,
        bundle.type,
        settings.name,
        settings.text,
        settings.title
      ].join('-')
        .toLowerCase()
        .replace(/[^a-z0-9-]/igm, '-')
        .replace(/-{2,}/igm, '-')
        .replace(/-$/, '')
      return {
        ...bundle,
        slug
      }
    })
    const filteredBundles = bundlesWithSlug.filter(bundle => {
      const filter = filters.bundles
      const slug = bundle.slug
      const splFilters = filter.split(' ')
      const doesBundleMatch = splFilters.every(word => slug.match(word))
      return doesBundleMatch ? bundle : null
    })
    const sortedBundles = filteredBundles.sort((a, b) => {
      const latestEditA = getBundleCurrentSettings(a).timestamp || a.created_on
      const latestEditB = getBundleCurrentSettings(b).timestamp || b.created_on
      return latestEditB - latestEditA
    })
    const bundlesDom = sortedBundles.map((bundle, i) => {
      const settings = getBundleCurrentSettings(bundle)
      return <LibeBundleThumb
        key={i}
        type={bundle.type}
        bundleId={bundle._id}
        created={bundle.created_on}
        updated={settings.timestamp || null}
        author={bundle.author || '<sans-nom>'}
        image={`/images/${bundle.type}-small.png`}
        title={settings.name || '<sans-titre>'} />
    })

    /* Assign classes to component */
    const classes = ['home-page']
    if (bundleCreation.isFetching) classes.push('home-page_create-bundle-fetching')
    if (bundleCreation.error) classes.push('home-page_create-bundle-error')
    if (bundles.error) classes.push('home-page_bundles-error')
    if (bundles.isFetching) classes.push('home-page_bundles-fetching')
    if (!bundles.list.length) classes.push('home-page_bundles-empty')
    else if (!bundlesDom.length) classes.push('home-page_bundles-empty-search')

    /* Display */
    return <Wrapper className={classes.join(' ')}>
      <div className='home-page__header'><Header /></div>
      <div className='home-page__content'>
        <div className='home-page__notifications'><NotificationsPanel /></div>
        <div className='home-page__tools-panel'>
          <div className='searchable-list'>
            <div className='home-page__tools-search'>
              <SearchField
                placeholder='Rechercher un outil'
                onChange={e => { props.setToolsFilter(e.target.value) }}
                onBlur={e => { props.setToolsFilter(e.target.value) }} />
            </div>
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
                  image='/images/libe-box-thumb.png'
                  description='Lorem ipsum dolor sit amet consectutor' />
              </div>
            </div>
          </div>
        </div>
        <div className='home-page__bundles-panel'>
          <div className='searchable-list'>
            <div className='home-page__bundles-search'>
              <SearchField
                placeholder='Rechercher un module'
                onChange={e => { props.setBundlesFilter(e.target.value) }}
                onBlur={e => { props.setBundlesFilter(e.target.value) }} />
            </div>
            <div className='home-page__bundles-loader'><img alt='Loader' src='/images/loader.gif' /></div>
            <div className='home-page__bundles-empty'><Paragraph light italic>Aucun module n'a encore été créé !</Paragraph></div>
            <div className='home-page__bundles-empty-search'>
              <Paragraph light italic>La recherche n'a retourné aucun résultat.</Paragraph>
              <Button minor link onClick={e => { props.setBundlesFilter('') }}>Remettre à zero ?</Button>
            </div>
            <div className='home-page__bundles-error'>
              <Paragraph error>Une erreur est survenue lors du chargement des modules:</Paragraph>
              <Paragraph italic light>{bundles.error || 'Erreur inconnue. Prenez une tisane.'}</Paragraph>
              <Button minor link onClick={props.getBundles}>Essayer à nouveau ?</Button>
            </div>
            <div className='home-page__bundles-list'>
              <div className='home-page__bundles-list-slider'>
                {bundlesDom}
              </div>
            </div>
          </div>
        </div>
        <div className='home-page__create-bundle-loader'>
          <img src='/images/loader.gif' alt='Loader' />
        </div>
      </div>
    </Wrapper>
  }
}
