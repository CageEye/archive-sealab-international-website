import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './QuotesList.module.scss';
import NonStretchedImage from '../NonStretchedImage';
import ArrowIcon from '../ArrowButton';

const QuotesList = ({ quotes, className }) => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  if (!quotes || quotes.length < 1) return <></>;

  const previous = () => {
    if (activeQuoteIndex > 0) setActiveQuoteIndex(activeQuoteIndex - 1);
    if (activeQuoteIndex === 0) setActiveQuoteIndex(quotes.length - 1);
  };
  const next = () => {
    if (activeQuoteIndex < quotes.length - 1)
      setActiveQuoteIndex(activeQuoteIndex + 1);
    if (activeQuoteIndex === quotes.length - 1) setActiveQuoteIndex(0);
  };

  const { authorName, authorPosition, quoteText, authorImage } = quotes[
    activeQuoteIndex
  ];

  return (
    <>
      <section className={classNames(styles.section, className)}>
        <div className="container">
          <div className={styles.quote__navbar}>
            <QuoteSVG />
            {authorName ? (
              <Author
                name={authorName}
                position={authorPosition}
                profileImage={authorImage}
              />
            ) : (
              <></>
            )}

            <div className={styles.button_navigation}>
              <ArrowIcon
                className={styles.button_navigation__icon}
                callback={() => previous()}
              />
              <ArrowIcon
                className={styles.button_navigation__icon}
                isRight
                callback={() => next()}
              />
            </div>
          </div>

          <p className={styles.quote}>{quoteText}</p>
        </div>
      </section>
    </>
  );
};

const Author = ({ name, position, profileImage }) => {
  const ImageResolved = () => {
    if (profileImage && profileImage.childImageSharp) {
      return (
        <figure>
          <NonStretchedImage
            fluid={profileImage.childImageSharp.fluid}
            objectFit="contain"
            alt={name}
          />
        </figure>
      );
    }
    return <></>;
  };
  return (
    <div className={styles.author}>
      <ImageResolved />
      <p className={styles.author__name}>{name}</p>
      {position ? (
        <p className={styles.author__position}>- {position}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

const QuoteSVG = () => (
  <svg
    className={styles.quote__icon}
    width="40"
    height="33"
    viewBox="0 0 40 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M17.9727 4.10156C16.1367 5.15625 14.6523 6.07422 13.5195 6.85547C12.3867 7.59766 11.2344 8.59375 10.0625 9.84375C8.96875 11.0156 8.12891 12.2461 7.54297 13.5352C6.95703 14.8242 6.54688 16.4844 6.3125 18.5156H9.125C11.5469 18.5156 13.4414 19.1211 14.8086 20.332C16.2148 21.5039 16.918 23.2422 16.918 25.5469C16.918 27.1875 16.293 28.7305 15.043 30.1758C13.832 31.582 12.1523 32.2852 10.0039 32.2852C6.64453 32.2852 4.24219 31.1914 2.79688 29.0039C1.35156 26.7773 0.628906 23.8672 0.628906 20.2734C0.628906 17.7344 1.17578 15.4297 2.26953 13.3594C3.36328 11.25 4.69141 9.375 6.25391 7.73438C7.85547 6.05469 9.55469 4.62891 11.3516 3.45703C13.1484 2.28516 14.6523 1.32812 15.8633 0.585938L17.9727 4.10156ZM39.6523 4.10156C37.8164 5.15625 36.332 6.07422 35.1992 6.85547C34.0664 7.59766 32.9141 8.59375 31.7422 9.84375C30.6094 11.0547 29.75 12.3047 29.1641 13.5938C28.6172 14.8438 28.2266 16.4844 27.9922 18.5156H30.8047C33.2266 18.5156 35.1211 19.1211 36.4883 20.332C37.8945 21.5039 38.5977 23.2422 38.5977 25.5469C38.5977 27.1875 37.9727 28.7305 36.7227 30.1758C35.5117 31.582 33.832 32.2852 31.6836 32.2852C28.3242 32.2852 25.9219 31.1914 24.4766 29.0039C23.0312 26.7773 22.3086 23.8672 22.3086 20.2734C22.3086 17.7344 22.8555 15.4297 23.9492 13.3594C25.043 11.25 26.3711 9.375 27.9336 7.73438C29.5352 6.05469 31.2344 4.62891 33.0312 3.45703C34.8281 2.28516 36.332 1.32812 37.543 0.585938L39.6523 4.10156Z"
      fill="white"
    />
  </svg>
);

export default QuotesList;
