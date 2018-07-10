import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../../components/blocks/Header'
import SearchField from '../../components/inputs/SearchField'
import LibeToolThumb from '../../components/blocks/LibeToolThumb'
import LibeBundleThumb from '../../components/blocks/LibeBundleThumb'

export default class HomePage extends Component {
  render () {
    const Wrapper = styled.div`
      .header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2;
      }
    `
    const HomeContent = styled.div`
      display: flex;
      z-index: 1;
      margin-top: ${p => p.theme.units(16)};
      box-sizing: border-box;
      padding-right: ${p => p.theme.units(2)};
      max-width: ${p => p.theme.units(200)};
      #tools, #bundles {
        border-right-style: solid;
        border-right:
          ${p => p.theme.units(0.25)}
          ${p => p.theme.colors.borders}
          solid;
      }
      #tools {
        box-sizing: border-box;
        flex-grow: 0;
        width: calc((100% - ${p => p.theme.units(10)}) * 0.6 + ${p => p.theme.units(6)});
        #tools-list > * {
          width: calc(50% - ${p => p.theme.units(1)});
          margin-bottom: ${p => p.theme.units(2)};
        }
        #tools-list > *:nth-child(odd) {
          margin-right: ${p => p.theme.units(2)};
        }
        @media screen and (max-width: ${p => p.theme.breakpoints.wide}) {
          #tools-list > * { width: 100%; }
          #tools-list > *:nth-child(odd) { margin-right: 0; }
        }
      }
      #tools-list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
      }
      #bundles {
        box-sizing: border-box;
        flex-grow: 0;
        width: calc((100% - ${p => p.theme.units(10)}) * 0.4 + ${p => p.theme.units(4)});
        #bundles-list > * {
          margin-bottom: ${p => p.theme.units(2)};
        }
      }
      @media screen and (max-width: ${p => p.theme.breakpoints.medium}) {
        flex-direction: column;
        padding-right: 0;
        margin-top: ${p => p.theme.units(13)};
        #tools, #bundles {
          width: 100%;
          border: none
        }
        #bundles {
          margin-top: ${p => p.theme.units(5)};
        }
      }
    `
    const SearchableList = styled.div`
      box-sizing: border-box;
      padding: 0 ${p => p.theme.units(2)};
      .search-field {
        max-width: ${p => p.theme.units(40)};
        margin-left: ${p => p.theme.units(3)};
        margin-right: ${p => p.theme.units(3)};
        margin-bottom: ${p => p.theme.units(3)};
      }
    `

    return <Wrapper>
      <Header />
      <HomeContent>
        <SearchableList id='tools'>
          <SearchField placeholder='Rechercher un outil' />
          <div id='tools-list'>
            <LibeToolThumb
              title='Libé box'
              image='/images/libe-tool-thumb-image.jpg'
              description='Lorem ipsum dolor sit amet consectutor' />
            <LibeToolThumb
              title='Libé box'
              image='/images/libe-tool-thumb-image.jpg'
              description='Lorem ipsum dolor sit amet consectutor' />
            <LibeToolThumb
              title='Libé box'
              image='/images/libe-tool-thumb-image.jpg'
              description='Lorem ipsum dolor sit amet consectutor' />
            <LibeToolThumb
              title='Libé box'
              image='/images/libe-tool-thumb-image.jpg'
              description='Lorem ipsum dolor sit amet consectutor' />
            <LibeToolThumb
              title='Libé box'
              image='/images/libe-tool-thumb-image.jpg'
              description='Lorem ipsum dolor sit amet consectutor' />
          </div>
        </SearchableList>
        <SearchableList id='bundles'>
          <SearchField placeholder='Rechercher un module' />
          <div id='bundles-list'>
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
            <LibeBundleThumb
              image='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg'
              title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
              type='some-type'
              author='Savinien de Rivet'
              created={1000000000000}
              updated={1020000000000}
              published={1040000000000} />
          </div>
        </SearchableList>
      </HomeContent>
    </Wrapper>
  }
}
