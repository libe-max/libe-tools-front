import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../../components/blocks/Header'
import SearchField from '../../components/inputs/SearchField'
import LibeToolThumb from '../../components/blocks/LibeToolThumb'
import LibeBundleThumb from '../../components/blocks/LibeBundleThumb'
import Wrapper from './style'

export default class HomePage extends Component {
  render () {
    return <Wrapper className='home-page'>
      <div className='home-page__header'><Header /></div>
      <div className='home-page__content'>
          <div className='home-page__tools-panel'>
            <div className='searchable-list'>
              <div className='home-page__tools-search'><SearchField placeholder='Rechercher un outil' /></div>
              <div className='home-page__tools-list'>
                <div className='home-page__tools-list-slider'>
                  <LibeToolThumb title='Libé box' image='/images/libe-tool-thumb-image.jpg' description='Lorem ipsum dolor sit amet consectutor' />
                  <LibeToolThumb title='Libé box' image='/images/libe-tool-thumb-image.jpg' description='Lorem ipsum dolor sit amet consectutor' />
                  <LibeToolThumb title='Libé box' image='/images/libe-tool-thumb-image.jpg' description='Lorem ipsum dolor sit amet consectutor' />
                  <LibeToolThumb title='Libé box' image='/images/libe-tool-thumb-image.jpg' description='Lorem ipsum dolor sit amet consectutor' />
                  <LibeToolThumb title='Libé box' image='/images/libe-tool-thumb-image.jpg' description='Lorem ipsum dolor sit amet consectutor' />
                </div>
              </div>
          </div>
        </div>
        <div className='home-page__bundles-panel'>
          <div className='searchable-list'>
            <div className='home-page__bundles-search'><SearchField placeholder='Rechercher un module' /></div>
            <div className='home-page__bundles-list'>
              <div className='home-page__bundles-list-slider'>
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
                <LibeBundleThumb image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy' type='some-type' author='Savinien de Rivet' created={1000000000000} updated={1020000000000} published={1040000000000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  }
}
