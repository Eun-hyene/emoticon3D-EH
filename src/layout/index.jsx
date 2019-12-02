import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import { BottomNavigation, FontIcon } from "react-md";

const Favorites = () => <div>안녕</div>;
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
          <BottomNavigation
            links={[
              {
                label: "모델검색",
                icon: <FontIcon>search</FontIcon>
              },
              {
                label: "내3D모델",
                icon: <FontIcon>favorite</FontIcon>
              },
              {
                label: "예약하기",
                icon: <FontIcon>place</FontIcon>
              }
            ]}
            dynamic={false}
            onNavChange={activeIndex => {
              //const title = links[activeIndex].label;
              const title = "임의의 제목";
              switch (activeIndex) {
                case 1:
                  //children = <Favorites key="about" />;
                  break;
                case 2:
                  //children = <Favorites key="about" />;
                  break;
                default:
                // children = <Favorites key="about" />;
              }
              this.setState({ title, children });
            }}
          />
          ;
        </div>
      </Navigation>
    );
  }
}
