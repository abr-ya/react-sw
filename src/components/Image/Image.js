import React, { useState } from 'react';
import Loader from '../Loader/Loader';

const Image = (props) => {
  // eslint-disable-next-line react/prop-types
  const { alt, classN, src } = props;
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLoad = async () => {
    setLoading(false); // скрыть для отладки
    setIsError(false);
  };

  const handleError = async () => {
    setLoading(false);
    setIsError(true);
  };

  return (
    <>
      {isError && !isLoading
        && <div style={{ width: '150px', display: 'flex', alignItems: 'center' }}>Ошибка загрузки изображения...</div>}
      {!isError && isLoading && (
        <Loader />
      )}
      <img
        className={classN}
        src={src}
        style={{ display: isError || isLoading ? 'none' : 'initial' }}
        alt={alt || 'Default Alt'}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
};

export default Image;
