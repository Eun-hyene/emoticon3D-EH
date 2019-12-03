import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage2 extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="더보기">
        <div className="about-container">
          <Helmet>
            <title>{`about2 | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/about2/`} />
          </Helmet>
          <div className="about-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <div className="about-wrapper">
                <CardText>
                  <p className="md-title-3"> * 3D프린팅 과정</p>
                  <p className="md-body-1">1. 모델링파일 업로드 및 검색</p>
                  <p className="md-body-1">2. 3D프린터 장소 및 시간 예약</p>
                  <p className="md-body-1">3. 출력완료 까지 과정을 확인</p>

                  <p className="md-title-1"> * 3D프린팅 과정2</p>
                  <p className="md-body-1">1. 모델링파일 업로드 및 검색</p>
                  <p className="md-body-1">2. 3D프린터 장소 및 시간 예약</p>
                  <p className="md-body-1">3. 출력완료 까지 과정을 확인</p>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}
export default AboutPage2;
