import React, { Component } from 'react';
import './Styles/About.css';

export default class AboutView extends Component {
  render() {
    return(
      <div className='About'>
        <div className='info-wrapper'>
          <div className='title'>About</div>
          <div className='text'>
            Although this is a simple react gallery, the point is to use <a href='https://www.google.com/sheets/about/'>google sheets</a> as backend and get user inputs using <a href='https://www.google.com/forms/about/'>google forms</a>. The form updates the sheet and the data is pulled from there to here.
          </div>
          <div className='title'>Benefits</div>
          <div className='text'>
            There aren't really many benefits using sheets as backend. The only one I can think of is it removes the need to manage a database (then again this isn't a big database).
          </div>
          <div className='title'>Anyway</div>
          <div className='text'>
            Check out the responce sheet <a href='https://docs.google.com/spreadsheets/d/e/2PACX-1vRY92nrjanOfIFDQGuQ93BBK2n1vJEImENpg-wytRsshGuwuZ2MlLvy157nR0ZlIOggzis7F5UO8qtZ/pubhtml'>here</a>
          </div>
        </div>
      </div>
    )
  }
}
