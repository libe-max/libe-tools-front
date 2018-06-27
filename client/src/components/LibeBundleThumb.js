import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/fr'
import ShadowBox from './ShadowBox'
import ParagraphTitle from './ParagraphTitle'
import Paragraph from './Paragraph'
import Image from './Image'
import Button from './Button'

export default class LibeBundleThumb extends Component {
  render () {
    const props = this.props

    /* * * * * * * * * * * * * * * * * *
     *
     *  Css declarations
     *
     * * * * * * * * * * * * * * * * * */
    const Wrapper = styled.div`
      width: 100%;
      position: relative;
      padding: ${p => p.theme.units(2)};
      box-sizing: border-box;
      border-radius: ${p => p.theme.units(1)};
      background: ${p => props.loading
    ? p.theme.colors.shadedBg
    : 'transparent'};
      #image {
        width: ${p => p.theme.units(7)};
        height: ${p => p.theme.units(6)};
      }
    `
    const ImageAndTitle = styled.div`
      display: flex;
      margin-bottom: ${p => p.theme.units(2)};
    `
    const ImageSlot = styled.div`
      flex-shrink: 0;
      align-self: flex-start;
      width: ${p => p.theme.units(7)};
      height: ${p => p.theme.units(6)};
      margin-right: ${p => p.theme.units(2)};
    `
    const TitleSlot = styled.div`
      flex-shrink: 1;
      width: 100%;
      align-self: center;
    `
    const ImgPlaceholder = styled.div`
      width: 100%;
      height: 100%;
      background: ${p => p.theme.colors.borders};
      border-radius: ${p => p.theme.units(0.5)};
    `
    const TitlesPlaceholder = styled.div`
      color: ${p => p.theme.colors.text};
      font-family: ${p => p.theme.fonts.easy};
      font-size: ${p => p.theme.units(2)};
      line-height: ${p => p.theme.units(3)};
      font-weight: 600;
      > * {
        height: ${p => p.theme.units(2)};
        background: ${p => p.theme.colors.borders};
      }
      > *:first-child {
        margin-bottom: ${p => p.theme.units(1)};
        width: 70%;
      }
      > *:last-child {
        width: 50%;
      }
    `
    const MetaPlaceHolder = styled.div`
      width: 100%;
      > * {
        height: ${p => p.theme.units(1.25)};
        background: ${p => p.theme.colors.borders};
      }
      > *:first-child {
        margin-bottom: ${p => p.theme.units(0.75)};
        width: 40%;
      }
      > *:last-child {
        width: 60%;
      }
    `
    const Actions = styled.div`
      display: none;
      justify-content: space-between;
      position: absolute;
      width: calc(100% - ${p => p.theme.units(4)});
      background: ${p => p.theme.colors.clearBg};
      bottom: ${p => p.theme.units(2)};
    `

    /* * * * * * * * * * * * * * * * * *
     *
     *  Props manipulation before display
     *
     * * * * * * * * * * * * * * * * * */
    const makeReadable = tmstp => moment(tmstp, 'x')
      .locale('fr')
      .format('DD MMMM YYYY')
      .toLowerCase()
    const readableCreated = makeReadable(props.created)
    const readableUpdated = makeReadable(props.updated)
    const readablePublished = makeReadable(props.published)
    const MetaTxt = <span>
      {props.type}, par {props.author}<br />
      Créé le {readableCreated}{props.published
        ? `, publié le ${readablePublished}`
        : `, mis à jour le ${readableUpdated}`}
    </span>

    /* * * * * * * * * * * * * * * * * *
     *
     *  Interactions
     *
     * * * * * * * * * * * * * * * * * */
    const handleHover = () => {
      this.wrapper
        .querySelector('#actions')
        .style.display = 'flex'
    }
    const handleRollout = () => {
      this.wrapper
        .querySelector('#actions')
        .style.display = 'none'
    }

    /* * * * * * * * * * * * * * * * * *
     *
     *  Displayed blocks
     *
     * * * * * * * * * * * * * * * * * */

    // Loading bundle
    const LoadingBundle = <Wrapper>
      <ImageAndTitle>
        <ImageSlot>
          <ImgPlaceholder />
        </ImageSlot>
        <TitleSlot>
          <TitlesPlaceholder>
            <div />
            <div />
          </TitlesPlaceholder>
        </TitleSlot>
      </ImageAndTitle>
      <MetaPlaceHolder>
        <div />
        <div />
      </MetaPlaceHolder>
    </Wrapper>

    // Loaded bundle
    const LoadedBundle = <ShadowBox>
      <Wrapper
        innerRef={n => { this.wrapper = n }}
        onMouseEnter={handleHover.bind(this)}
        onMouseLeave={handleRollout.bind(this)}>
        <ImageAndTitle>
          <ImageSlot>
            <Image
              id='image'
              position='center'
              src={props.image} />
          </ImageSlot>
          <TitleSlot>
            <ParagraphTitle>
              {props.title}
            </ParagraphTitle>
          </TitleSlot>
        </ImageAndTitle>
        <Paragraph light small>
          {MetaTxt}
        </Paragraph>
        <Actions id='actions'>
          <Button
            minor
            dangerous>
            Supprimer
          </Button>
          <Button>
            Voir, modifier & publier
          </Button>
        </Actions>
      </Wrapper>
    </ShadowBox>

    return props.loading ? LoadingBundle : LoadedBundle
  }
}
