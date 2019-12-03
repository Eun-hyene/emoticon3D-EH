import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import { TextField } from "react-md";
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
                  <p className="md-title-3"> * 모델링 파일 확인 </p>
                  <p className="md-title-3"> * 장소 </p>
                  <div className="md-grid">
                    <TextField
                      id="floating-center-title"
                      label="장소를 검색하세요"
                      lineDirection="center"
                      placeholder="구,동,읍으로 검색"
                      className="md-cell md-cell--bottom"
                    />
                  </div>
                  <p className="md-title-1"> * 시간 </p>
                  <button>12시</button>
                  <button>13시</button>
                  <button>14시</button>
                  <button>15시</button>
                  <button>16시</button>
                  <button>17시</button>
                  <button>18시</button>
                  <button>19시</button>
                  <button>20시</button>
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
