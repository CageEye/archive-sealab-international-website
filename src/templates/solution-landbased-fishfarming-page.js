import React from 'react';
import classNames from 'classnames';
import { graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import SolutionHero from '../components/SolutionHero';
import CheckList from '../components/CheckList';
import AdvantagesList from '../components/AdvantagesList';
import Button from '../components/Button';
import NonStretchedImage from '../components/NonStretchedImage';
import ReadMoreIcon from '../img/readmore-arrow.inline.svg';

export const LandBasedFishFarmingPageTemplate = ({
  description,
  heading,
  featuredimage,
  seaToLandSection,
  featureSection,
  advantageSection,
  scamSection,
  middleImage,
  controlSection,
  imageSplitSections,
  middleDescription,
  settingSection,
  getStartSection,
}) => {
  return (
    <section className="solution-page has-dark-background landbased-fishfarming-page">
      <SolutionHero
        className="is-large"
        heading={heading}
        description={description}
        image={featuredimage}
        anchorLink="#first-section"
      />
      <section id="read-more" className="section" aria-hidden="true">
        <div className="container">
          <AnchorLink
            href="#first-section"
            className={classNames('read-more-button')}
          >
            <ReadMoreIcon />
          </AnchorLink>
        </div>
      </section>
      <section id="first-section" className="section">
        <NonStretchedImage
          fluid={seaToLandSection.sideImage.childImageSharp.fluid}
          publicURL={seaToLandSection.sideImage.publicURL}
          extension={seaToLandSection.sideImage.extension}
          className="full-width-image is-mobile-show"
        />
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="section--subheading">{seaToLandSection.label}</p>
              <h2 className="section--title">{seaToLandSection.heading}</h2>
              <HTMLContent content={seaToLandSection.description} />
            </div>
            <div className="column">
              <div className="side-image is-mobile-hidden">
                <div className="image-gradient" />
                <NonStretchedImage
                  fluid={seaToLandSection.sideImage.childImageSharp.fluid}
                  publicURL={seaToLandSection.sideImage.publicURL}
                  extension={seaToLandSection.sideImage.extension}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="column center-align-wrapper">
            <p className="section--subheading has-mobile-left">
              {featureSection.label}
            </p>
            <h2 className="section--title has-mobile-left">
              {featureSection.heading}
            </h2>
            <HTMLContent
              className="description"
              content={featureSection.description}
            />
            <CheckList features={featureSection.features} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <p className="section--subheading has-text-centered">
              {advantageSection.label}
            </p>
          </div>
          <AdvantagesList advantages={advantageSection.advantages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered reverse-row-order">
            <div className="column">
              <p className="section--subheading">{scamSection.label}</p>
              <h2 className="section--title">{scamSection.heading}</h2>
              <HTMLContent content={scamSection.content} />
              <div className="buttons-wrap">
                <Button
                  className="is-primary"
                  text={scamSection.firstButtonTxt}
                  path={scamSection.firstButtonLink}
                />
                <Button
                  className="is-transparent"
                  text={scamSection.secondButtonTxt}
                  path={scamSection.secondButtonLink}
                />
              </div>
            </div>
            <div className="column">
              <NonStretchedImage
                className="side-image"
                publicURL={scamSection.sideImage.publicURL}
                extension={scamSection.sideImage.extension}
                fluid={scamSection.sideImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section is-mobile-hidden">
        <div className="container">
          <NonStretchedImage
            fluid={middleImage.childImageSharp.fluid}
            publicURL={middleImage.publicURL}
            extension={middleImage.extension}
          />
        </div>
      </section>
      <section className="section is-mobile-hidden">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="section--subheading">{controlSection.label}</p>
              <h2 className="section--title">{controlSection.heading}</h2>
            </div>
            <div className="column">
              <HTMLContent content={controlSection.content} />
              <div className="buttons-wrap">
                <Button
                  className="is-primary"
                  text={controlSection.firstButtonTxt}
                  path={controlSection.firstButtonLink}
                />
                <Button
                  className="is-transparent"
                  text={controlSection.secondButtonTxt}
                  path={controlSection.secondButtonLink}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {imageSplitSections.map((sectionData, i) => {
        if (i % 2 === 0) {
          return (
            <section className="section">
              <div className="container">
                <div className="columns is-vcentered reverse-row-order">
                  <div className="column">
                    <p className="section--subheading">{sectionData.label}</p>
                    <h2 className="section--title">{sectionData.heading}</h2>
                    <HTMLContent content={sectionData.content} />
                    <div className="buttons-wrap">
                      <Button
                        className="is-primary"
                        text={sectionData.buttonTxt}
                        path={sectionData.buttonLink}
                      />
                    </div>
                  </div>
                  <div className="column">
                    <NonStretchedImage
                      className="side-image"
                      publicURL={sectionData.sideImage.publicURL}
                      extension={sectionData.sideImage.extension}
                      fluid={sectionData.sideImage.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        }
        return (
          <section className="section">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column">
                  <NonStretchedImage
                    className="side-image"
                    publicURL={sectionData.sideImage.publicURL}
                    extension={sectionData.sideImage.extension}
                    fluid={sectionData.sideImage.childImageSharp.fluid}
                  />
                </div>
                <div className="column">
                  <p className="section--subheading">{sectionData.label}</p>
                  <h2 className="section--title">{sectionData.heading}</h2>
                  <HTMLContent content={sectionData.content} />
                  <div className="buttons-wrap">
                    <Button
                      className="is-primary"
                      text={sectionData.buttonTxt}
                      path={sectionData.buttonLink}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <section className="section">
        <div className="container ">
          <div className="middle-description">
            &quot;{middleDescription}&quot;
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered reverse-row-order">
            <div className="column">
              <h2 className="section--title">{settingSection.heading}</h2>
              <HTMLContent content={settingSection.content} />
              <div className="buttons-wrap">
                <Button
                  className="is-primary"
                  text={settingSection.buttonTxt}
                  path={settingSection.buttonLink}
                />
              </div>
            </div>
            <div className="column">
              <div className="side-image">
                <div>
                  <NonStretchedImage
                    className="side-image1"
                    publicURL={settingSection.sideImage1.publicURL}
                    extension={settingSection.sideImage1.extension}
                    fluid={settingSection.sideImage1.childImageSharp.fluid}
                  />
                </div>
                <div>
                  <NonStretchedImage
                    className="side-image2"
                    publicURL={settingSection.sideImage2.publicURL}
                    extension={settingSection.sideImage2.extension}
                    fluid={settingSection.sideImage2.childImageSharp.fluid}
                  />
                  <NonStretchedImage
                    className="side-image3"
                    publicURL={settingSection.sideImage3.publicURL}
                    extension={settingSection.sideImage3.extension}
                    fluid={settingSection.sideImage3.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <NonStretchedImage
              className="is-mobile-hidden"
              publicURL={getStartSection.topImage.publicURL}
              extension={getStartSection.topImage.extension}
              fluid={getStartSection.topImage.childImageSharp.fluid}
            />
            <NonStretchedImage
              className="is-mobile-show"
              publicURL={getStartSection.topImage.publicURL}
              extension={getStartSection.topImage.extension}
              fluid={getStartSection.mobileTopImage.childImageSharp.fluid}
            />
          </div>
          <div className="row center-align-wrapper">
            <br />
            <h2 className="section--title">{getStartSection.heading}</h2>
            <HTMLContent content={getStartSection.description} />
            <Button
              className="is-primary"
              text={getStartSection.buttonTxt}
              path={getStartSection.buttonLink}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

const LandBasedFishFarmingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  if (!frontmatter) return <></>;
  const {
    title,
    seoDescription,
    heading,
    description,
    featuredimage,
    seaToLandSection,
    featureSection,
    advantageSection,
    scamSection,
    middleImage,
    controlSection,
    imageSplitSections,
    middleDescription,
    settingSection,
    getStartSection,
  } = frontmatter;

  return (
    <Layout seoTitle={title} seoDescription={seoDescription}>
      <LandBasedFishFarmingPageTemplate
        content={data.markdownRemark.html}
        contentComponent={HTMLContent}
        heading={heading}
        description={description}
        featuredimage={featuredimage}
        seaToLandSection={seaToLandSection}
        featureSection={featureSection}
        advantageSection={advantageSection}
        scamSection={scamSection}
        middleImage={middleImage}
        controlSection={controlSection}
        imageSplitSections={imageSplitSections}
        middleDescription={middleDescription}
        settingSection={settingSection}
        getStartSection={getStartSection}
      />
    </Layout>
  );
};

export default LandBasedFishFarmingPage;

export const pageQuery = graphql`
  query LandBasedFishFarmingPageTemplate {
    markdownRemark(
      frontmatter: {
        templateKey: { eq: "solution-landbased-fishfarming-page" }
      }
    ) {
      id
      html
      frontmatter {
        title
        heading
        seoDescription
        description
        featuredimage {
          publicURL
          extension
          childImageSharp {
            fluid(maxHeight: 630, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              presentationWidth
            }
          }
        }
        seaToLandSection {
          label
          heading
          description
          sideImage {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 388, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        featureSection {
          label
          heading
          description
          features {
            feature
          }
        }
        advantageSection {
          label
          advantages {
            advantage
            featuredimage {
              publicURL
              extension
              childImageSharp {
                fluid(maxHeight: 92, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        scamSection {
          label
          heading
          content
          firstButtonTxt
          firstButtonLink
          secondButtonTxt
          secondButtonLink
          sideImage {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 494, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        middleImage {
          publicURL
          extension
          childImageSharp {
            fluid(maxHeight: 584, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        controlSection {
          label
          heading
          content
          firstButtonTxt
          firstButtonLink
          secondButtonTxt
          secondButtonLink
        }
        imageSplitSections {
          label
          heading
          content
          buttonTxt
          buttonLink
          sideImage {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 582, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        middleDescription
        settingSection {
          heading
          content
          buttonTxt
          buttonLink
          sideImage1 {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 289, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          sideImage2 {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 200, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          sideImage3 {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 200, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        getStartSection {
          heading
          description
          buttonTxt
          buttonLink
          topImage {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 491, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          mobileTopImage {
            publicURL
            extension
            childImageSharp {
              fluid(maxHeight: 560, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
