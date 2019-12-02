import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { BottomNavigation, FontIcon } from "react-md";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout location={this.props.location} title="Home">
        <div className="index-container">
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="canonical" href={`${config.siteUrl}`} />
          </Helmet>
          <SEO postEdges={postEdges} />
          <PostListing postEdges={postEdges} />
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
              const title = links[activeIndex].label;
              let children;
              switch (activeIndex) {
                case 1:
                  children = <Favorites key="favorites" />;
                  break;
                case 2:
                  children = <Nearby key="nearby" />;
                  break;
                default:
                  children = <Recent key="recent" />;
              }

              this.setState({ title, children });
            }}
          />
          ;
        </div>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
