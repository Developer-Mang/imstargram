import React, { useEffect } from 'react';

const ScrollComponent = () => {
  const onScroll = (e) => {
    if (!e.srcElement) return;
    console.log(e.srcElement.scrollingElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return <div>스크롤 컴포넌트</div>;
};

export default ScrollComponent;
