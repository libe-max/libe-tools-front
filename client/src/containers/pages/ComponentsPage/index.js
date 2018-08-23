import React, { Component } from 'react'
import MainTitle from '../../../components/text-levels/MainTitle'
import BlockTitle from '../../../components/text-levels/BlockTitle'
import ParagraphTitle from '../../../components/text-levels/ParagraphTitle'
import Button from '../../../components/buttons/Button'
import TextInput from '../../../components/inputs/TextInput'
import FileInput from '../../../components/inputs/FileInput'
import SearchField from '../../../components/inputs/SearchField'
import Header from '../../blocks/Header'
import LibeToolThumb from '../../blocks/LibeToolThumb'
import LibeBundleThumb from '../../blocks/LibeBundleThumb'
import Wrapper from './style'

const CpRow = ({title, children}) => {
  const style = {display: title ? 'block' : 'none'}
  return <div className='component-row'>
    <div className='component-row__title' style={style}>
      {title}
    </div>
    <div className='component-row__content'>
      {children}
    </div>
  </div>
}

const CpBx = ({title, width, children}) => {
  const style = {
    display: width ? 'inline-block' : 'block',
    width: width ? `${width * 100}%` : '100%'
  }
  return <div className='component-box' style={style}>
    {title ? <div className='component-box__title'>{title}</div> : null}
    <div className='component-box__content'>{children}</div>
  </div>
}

export default class ComponentsPage extends Component {
  render () {
    return <Wrapper>
      <CpRow title='Text levels'>
        <CpBx title='Main title'><MainTitle level={4}>The quick brown fox</MainTitle></CpBx>
        <CpBx title='Block title'><BlockTitle level={1}>The quick brown fox</BlockTitle></CpBx>
        <CpBx title='Paragraph title'><ParagraphTitle level={8}>The quick brown fox</ParagraphTitle></CpBx>
      </CpRow>
      <CpRow title='Buttons'>
        <CpBx title='Button' width={1 / 4}><Button>Click me!</Button></CpBx>
        <CpBx title='Button minor' width={1 / 4}><Button minor>Click me!</Button></CpBx>
        <CpBx title='Button dangerous' width={1 / 4}><Button dangerous>Click me!</Button></CpBx>
        <CpBx title='Button minor dangerous' width={1 / 4}><Button minor dangerous>Click me!</Button></CpBx>

        <CpBx title='Button disabled' width={1 / 4}><Button disabled>Click me!</Button></CpBx>
        <CpBx title='Button minor disabled' width={1 / 4}><Button minor disabled>Click me!</Button></CpBx>
        <CpBx title='Button dangerous disabled' width={1 / 4}><Button dangerous disabled>Click me!</Button></CpBx>
        <CpBx title='Button minor dangerous disabled' width={1 / 4}><Button minor dangerous disabled>Click me!</Button></CpBx>

        <CpBx title='Button primary' width={1 / 4}><Button primary>Click me!</Button></CpBx>
        <CpBx title='Button primary minor' width={1 / 4}><Button primary minor>Click me!</Button></CpBx>
        <CpBx title='Button primary dangerous' width={1 / 4}><Button primary dangerous>Click me!</Button></CpBx>
        <CpBx title='Button primary minor dangerous' width={1 / 4}><Button primary minor dangerous>Click me!</Button></CpBx>

        <CpBx title='Button primary disabled' width={1 / 4}><Button primary disabled>Click me!</Button></CpBx>
        <CpBx title='Button primary minor disabled' width={1 / 4}><Button primary minor disabled>Click me!</Button></CpBx>
        <CpBx title='Button primary dangerous disabled' width={1 / 4}><Button primary dangerous disabled>Click me!</Button></CpBx>
        <CpBx title='Button primary minor dangerous disabled' width={1 / 4}><Button primary minor dangerous disabled>Click me!</Button></CpBx>

        <CpBx title='Button link' width={1 / 4}><Button link>Click me!</Button></CpBx>
        <CpBx title='Button link minor' width={1 / 4}><Button link minor>Click me!</Button></CpBx>
        <CpBx title='Button link dangerous' width={1 / 4}><Button link dangerous>Click me!</Button></CpBx>
        <CpBx title='Button link minor dangerous' width={1 / 4}><Button link minor dangerous>Click me!</Button></CpBx>

        <CpBx title='Button link disabled' width={1 / 4}><Button link disabled>Click me!</Button></CpBx>
        <CpBx title='Button link minor disabled' width={1 / 4}><Button link minor disabled>Click me!</Button></CpBx>
        <CpBx title='Button link dangerous disabled' width={1 / 4}><Button link dangerous disabled>Click me!</Button></CpBx>
        <CpBx title='Button link minor dangerous disabled' width={1 / 4}><Button link minor dangerous disabled>Click me!</Button></CpBx>

        <CpBx title='Button link primary' width={1 / 4}><Button link primary>Click me!</Button></CpBx>
        <CpBx title='Button link primary minor' width={1 / 4}><Button link primary minor>Click me!</Button></CpBx>
        <CpBx title='Button link primary dangerous' width={1 / 4}><Button link primary dangerous>Click me!</Button></CpBx>
        <CpBx title='Button link primary minor dangerous' width={1 / 4}><Button link primary minor dangerous>Click me!</Button></CpBx>

        <CpBx title='Button link primary disabled' width={1 / 4}><Button link primary disabled>Click me!</Button></CpBx>
        <CpBx title='Button link primary minor disabled' width={1 / 4}><Button link primary minor disabled>Click me!</Button></CpBx>
        <CpBx title='Button link primary dangerous disabled' width={1 / 4}><Button link primary dangerous disabled>Click me!</Button></CpBx>
        <CpBx title='Button link primary minor dangerous disabled' width={1 / 4}><Button link primary minor dangerous disabled>Click me!</Button></CpBx>
      </CpRow>
      <CpRow title='Inputs'>
        <CpBx title='Text input' width={1 / 4}>
          <TextInput
            label='Label'
            placeholder='Placeholder' />
        </CpBx>
        <CpBx width={3 / 4} />
        <CpBx title='Search field' width={1 / 4}>
          <SearchField placeholder='Chercher un truc' />
        </CpBx>
        <CpBx title='File input empty' width={1 / 4}>
          <FileInput
            placeholder='Choisir un fichier' />
        </CpBx>
        <CpBx title='File input with image' width={1 / 4}>
          <FileInput
            label='Label'
            placeholder='Choisir un fichier'
            src='https://upload.wikimedia.org/wikipedia/commons/d/d7/F-15C_carrying_AIM-9X_maneuvers_into_a_vertical_climb.jpg' />
        </CpBx>
        <CpBx title='File input with file' width={1 / 4}>
          <FileInput
            label='Label'
            placeholder='Choisir un fichier'
            src='https://maximefabas.github.io/ressources/maxime_fabas_resume_fr_feb_18.pdf' />
        </CpBx>
      </CpRow>
      <CpRow title='Compound components'>
        <CpBx title='Header'><Header /></CpBx>
        <CpBx title='Libé tool thumb' width={1 / 3}>
          <LibeToolThumb
            title='Libé box'
            image='/images/libe-tool-thumb-image.jpg'
            description='Lorem ipsum dolor sit amet consectutor' />
        </CpBx>
        <CpBx title='Libé bundle thumb' width={1 / 3}>
          <LibeBundleThumb loading />
          <LibeBundleThumb loading />
          <LibeBundleThumb
            title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
            type='Témoignage'
            author='Aurélie Delmas'
            created={1521590400000}
            updated={1521676800000}
            image='http://images.freeimages.com/images/previews/250/some-image-1302910.jpg' />
          <LibeBundleThumb
            title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
            type='Témoignage'
            author='Aurélie Delmas'
            created={1521590400000}
            updated={1521676800000}
            published={1521776800000}
            image='http://images.freeimages.com/images/previews/250/some-image-1302910.jpg' />
          <LibeBundleThumb
            title='Financements libyens : ces témoignages qui pointent la campagne Sarkozy'
            type='Témoignage'
            author='Aurélie Delmas'
            created={1521590400000}
            image='http://images.freeimages.com/images/previews/250/some-image-1302910.jpg' />
        </CpBx>
      </CpRow>
    </Wrapper>
  }
}
