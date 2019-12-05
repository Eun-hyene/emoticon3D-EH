import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

import BottomNav from '../components/BottomNav';


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.props.title}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children}
          <BottomNav />
        </div>
      </Navigation>
    );
  }
}
