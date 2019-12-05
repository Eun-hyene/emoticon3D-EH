import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import { Link } from 'gatsby';
import config from '../../../data/SiteConfig';
import './BottomNav.scss';

class BottomNav extends Component {
  render() {
    return (
      <footer className='footer footer-fixed'>
        <div className='boxes-container'>
          <div className='user-button'>
            <Button
              icon='fa-home'
              raised='true'
              primary
              key='about'
              iconClassName='fa fa-home'
              href='/'
              disabled
            >
              <p>반갑다</p>
            </Button>
            <Button
              icon='fa-beer
              key=`menu1'
              iconClassName='fa fa-heart'
              href='/about'
              disabled
            >
              <p>친구야</p>
            </Button>

            <Button
              icon='faHome' // ??
              flat
              disabled
              key='√variable-md-colors-warn'
              iconClassName='fa fa-comment'
              href='/ThisIsNotAbout/about2'
            >
              <p>일요일은</p>
            </Button>

            <Button
              icon='faHome' // ??
              flat='false'
              secondary
              key='menu3'
              iconClassName='fa fa-book'
              href='/the-butterfly-of-the-edge'
            >
              <p>제발좀</p>
            </Button>

            <Button
              icon='faHome' // ???
              flat='true'
              secondary
              key='menu4'
              iconClassName='fa fa-tag'
              href='/introducing-gatsby-material-starter'
              disabled
            >
              <p>쉬게해줘</p>
            </Button>
          </div>
        </div>
      </footer>
    );
  }
}

export default BottomNav;
