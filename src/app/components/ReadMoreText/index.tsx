/**
 *
 * ReadMoreText
 *
 */
import React, { memo, useState } from 'react';
import './assets/css/style.css';

interface Props {
  children: string;
}

export const ReadMoreText = memo((props: Props) => {
  const HtmlToReactParser = require('html-to-react').Parser;
  const htmlToReactParser = new HtmlToReactParser();
  const { children } = props;
  const text = htmlToReactParser.parse(children);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {text}
      {/* {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? ' Voir plus...' : ' Voir moins'}
      </span> */}
    </p>
  );
});
