import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class more extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="내 3모델">
        <div className="about-container">
          <Helmet>
            <title>{`more | ${config.siteTitle}`}</title>
            <link rel="canonical" href={`${config.siteUrl}/more/`} />
          </Helmet>
          <div className="about-container md-grid mobile-fix">
            <Card className="md-grid md-cell--8">
              <div className="about-wrapper">
                <CardText>
                  <p className="md-title-3"> 저장된 모델이 없습니다 </p>
                  <p className="md-body-1">
                    <button>모델 검색 </button>
                  </p>
                  <p className="md-body-1">
                    <button>업로드 하기</button>
                  </p>
                </CardText>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}
export default more;
