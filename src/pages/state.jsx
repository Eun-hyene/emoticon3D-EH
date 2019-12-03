import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class State extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="출력상태">
        <div className="about-container">
          <Helmet>
            <title>{`state | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/state/`} />
          </Helmet>
          <div className="about-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <div className="about-wrapper">
                <CardText>
                  <p className="md-title-3"> * 모델 출력중 </p>
                  <p className="md-title-3"> 남은시간 : 3시간 18분 </p>
                  <p className="md-title-3"> 예상 완료시간 오후 8시 40분 </p>
                  <p className="md-title-1"> 3d프린터가 모델을 출력중입니다 </p>
                  <p className="md-title-1"> 출력이 완료되면 알려드립니다 </p>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default State;
