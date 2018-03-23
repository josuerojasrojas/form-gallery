import React, { Component } from 'react';
import './Styles/ImageFull.css';

export default class ImageFull extends Component {
  render(){
    const style = {
      ImageFullWrapper: {
        display: this.props.isActive ? 'flex' : 'none',
      },
      shade: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,.8)',
        zIndex: '2',
      },
      ImageFull: {
        zIndex: '3',
        position: 'absolute',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
      },
      imagewrapper: {
        float: 'left',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      info: {
        float: 'right',
        backgroundColor: 'white',
      },
      cross: {
        width: '32px',
        height: '32px',
        position: 'relative',
        float: 'right',
        margin: '5px',
        cursor: 'pointer',
      },
      fLine: {
        height: '5px',
        width: '32px',
        backgroundColor: 'black',
        borderRadius: '3px',
        transform: 'rotate(45deg)',
        marginTop: '50%',
        position: 'absolute',
      },
      sLine: {
        height: '5px',
        width: '32px',
        backgroundColor: 'black',
        borderRadius: '3px',
        transform: 'rotate(-45deg)',
        marginTop: '50%',
        position: 'absolute',
      },
      title: {
      }
    }

    return(
      <div style={style.ImageFullWrapper}>
        <div style={style.shade}></div>
        <div style={style.ImageFull} className='imagefull'>
          <div style={style.imagewrapper} className='imagewrapper'>
            <img style={style.image} src={this.props.imageSrc}/>
          </div>
          <div style={style.info} className='imagefull-info'>
            <div style={style.cross} onClick={this.props.handleClick}>
              <div style={style.fLine}/>
              <div style={style.sLine}/>
            </div>
            <div style={style.title}>
              {this.props.title}
            </div>
            {this.props.description}
            <div><a target='_blank' href={this.props.imageSrc}>Direct Link</a></div>
          </div>
        </div>
      </div>
    )
  }
}
