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
  const { children } = props;
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {console.log('texte slice: ', text)}
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? ' Voir plus...' : ' Voir moins'}
      </span>
    </p>
  );
});
