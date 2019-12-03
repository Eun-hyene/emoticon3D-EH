import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import { TextField } from "react-md";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class Search extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="모델검색">
        <div className="about-container">
          <Helmet>
            <title>{`search | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/search/`} />
          </Helmet>
          <div className="about-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <div className="about-wrapper">
                <CardText>
                  <p className="md-title-3"> 3D모델 검색 </p>
                  <p className="md-title-3">
                    {" "}
                    나에게 필요한 모델을 검색하세요!{" "}
                  </p>
                  <div className="md-grid">
                    <TextField
                      id="floating-center-title"
                      label="키워드 입력"
                      lineDirection="center"
                      placeholder="  "
                      className="md-cell md-cell--bottom"
                    />
                  </div>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Search;
