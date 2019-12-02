import React, { Component } from "react";
import Layout from "../layout";

class AboutPage2 extends Component {
  render() {
    return (
      <Layout location={this.props.location} title="더보기">
        <div className="about-container">
          프린팅 방법이 무엇인가요? 모델링파일을 검색하고 예약한 후 상태를
          확인하면 됩니다.
        </div>
      </Layout>
    );
  }
}
export default AboutPage2;
