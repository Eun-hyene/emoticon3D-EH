import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";

import Layout from "../layout";
import config from "../../data/SiteConfig";

class Reserv extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="예약하기">
        <div className="about-container">
          <Helmet>
            <title>{`reserv | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/reserv/`} />
          </Helmet>
          <div className="about-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <div className="about-wrapper">
                <CardText>
                  <p className="md-title-3"> * 장소 </p>
                  <div> button </div>

                  <p className="md-title-1"> * 시간 </p>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Reserv;
