import { connect } from 'react-redux'
import { state2props, dispatch2props } from './connected'

import React, { Component } from 'react'
import Header from '../../blocks/Header'
import NotificationsPanel from '../../blocks/NotificationsPanel'
import LibeToolThumb from '../../blocks/LibeToolThumb'
import LibeBundleThumb from '../../blocks/LibeBundleThumb'
import Paragraph from '../../../components/text-levels/Paragraph'
import Button from '../../../components/buttons/Button'
import SearchField from '../../../components/inputs/SearchField'
import Wrapper from './style'


class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bundles: props.bundles,
      filteredBundles: props.bundles.list,
      filters: {
        tools: null,
        bundles: null
      },
      lastFilterUpdate: {
        tools: 0,
        bundles: 0
      },
      shouldApplyFilters: {
        tools: true,
        bundles: true
      },
    }
    this.filterDelay = 100
    this.tryFilterBundles = this.tryFilterBundles.bind(this)
    this.filterBundles = this.filterBundles.bind(this)

    props.getBundles().then(res => {
      this.filterBundles()
    })
  }

  componentDidMount () {
    this.node.addEventListener(
      'filterBundles',
      this.filterBundles
    )
  }

  static getDerivedStateFromProps (props, state) {
    const nBundles = props.bundles
    const nFilters = {
      tools: state.filters.tools,
      bundles: state.filters.bundles,  
    }
    const nLastFilterUpdate = {
      tools: state.lastFilterUpdate.tools,
      bundles: state.lastFilterUpdate.bundles,  
    }
    const nShouldApplyFilters = {
      tools: state.shouldApplyFilters.tools,
      bundles: state.shouldApplyFilters.bundles
    }
    if (props.bundles.list.length !== state.bundles.list.length) {
      nShouldApplyFilters.bundles = true 
    }
    if (props.filters.tools !== state.filters.tools) {
      nFilters.tools = props.filters.tools
      nLastFilterUpdate.tools = Date.now()
      nShouldApplyFilters.tools = true
    }
    if (props.filters.bundles !== state.filters.bundles) {
      nFilters.bundles = props.filters.bundles
      nLastFilterUpdate.bundles = Date.now()
      nShouldApplyFilters.bundles = true
    }
    return {
      ...state,
      bundles: nBundles,
      filters: nFilters,
      lastFilterUpdate: nLastFilterUpdate,
      shouldApplyFilters: nShouldApplyFilters
    }
  }

  componentDidUpdate () {
    setTimeout(
      this.tryFilterBundles,
      this.filterDelay
    )
  }

  componentWillUnount () {
    this.node.removeEventListener(
      'filterBundles',
      this.filterBundles
    )
  }

  tryFilterBundles () {
    const state = this.state
    const timeSinceLastUpdate = Date.now() - state.lastFilterUpdate.bundles
    const shouldApply = state.shouldApplyFilters.bundles
    if (timeSinceLastUpdate > this.filterDelay && shouldApply) {
      if (this.node) this.node.dispatchEvent(
        new CustomEvent(
          'filterBundles', {
            detail: {
              message: 'Time to filter bundles!',
              time: new Date()
            },
            bubbles: true,
            cancelable: true
          }
        )
      )
    }
  }

  filterBundles () {
    const state = this.state
    const bundles = state.bundles
    const filter = state.filters.bundles
    const filteredBundles = bundles.list.filter(bundle => {
      const slug = bundle._getSlug()
      const splFilters = filter.split(' ')
      const doesBundleMatch = splFilters.every(word => slug.match(word))
      return doesBundleMatch ? bundle : null
    })
    const sortedBundles = filteredBundles.sort((a, b) => {
      const latestEditA = a._getCurrentSettings().timestamp || a.created_on
      const latestEditB = b._getCurrentSettings().timestamp || b.created_on
      return latestEditB - latestEditA
    })
    this.setState({
      filteredBundles: sortedBundles,
      shouldApplyFilters: {
        ...state.shouldApplyFilters,
        bundles: false
      }
    })
  }

  render () {
    const props = this.props
    const state = this.state
    const bundles = state.bundles
    const filteredBundles = state.filteredBundles
    const shouldApplyBundlesFilter = state.shouldApplyFilters.bundles

    /* Tools list */
    const toolsDom = toolsList.map((tool, i) => {
      return <LibeToolThumb
        key={i}
        name={tool.name}
        type={tool.type}
        image={tool.image}
        description={tool.description} />
    })

    /* Bundles list */
    // [WIP] Some pagination here ?
    const bundlesDom = filteredBundles.map((bundle, i) => {
      const settings = bundle._getCurrentSettings()
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
    if (bundles.error) classes.push('home-page_bundles-error')
    if (bundles.isCreating) classes.push('home-page_create-bundle-fetching')
    if (bundles.isFetching) classes.push('home-page_bundles-fetching')
    if (shouldApplyBundlesFilter) classes.push('home-page_bundles-filtering')
    if (!bundles.list.length) classes.push('home-page_bundles-empty')
    else if (!bundlesDom.length) classes.push('home-page_bundles-empty-search')

    /* Display */
    return <Wrapper
      className={classes.join(' ')}
      innerRef={node => {this.node = node}}>
      <div className='home-page__header'><Header /></div>
      <div className='home-page__content'>
        <div className='home-page__notifications'><NotificationsPanel /></div>
        <div className='home-page__tools-panel'>
          <div className='searchable-list'>
            <div className='home-page__tools-search'>
              <SearchField
                placeholder='Rechercher un outil'
                defaultValue={props.filters.tools}
                onChange={e => { props.setToolsFilter(e.target.value) }}
                onBlur={e => { props.setToolsFilter(e.target.value) }} />
            </div>
            <div className='home-page__tools-list'>
              <div className='home-page__tools-list-slider'>
                {toolsDom}
              </div>
            </div>
          </div>
        </div>
        <div className='home-page__bundles-panel'>
          <div className='searchable-list'>
            <div className='home-page__bundles-search'>
              <SearchField
                placeholder='Rechercher un module'
                defaultValue={props.filters.bundles}
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

export default connect(
  state2props,
  dispatch2props
)(HomePage)
