import React, { useState, useEffect } from 'react';
import PostCarousel from './PostCarousel';
import PostIcons from './PostIcons';
import Unsplash from 'unsplash-js';
import { unsplashKey } from '../../services/unsplashKey';
import unsplashApi from '../../services/unsplashApi';
import { ImageBlock, ImageSrc } from './PhotoList.styles';
import PhotoList from './PhotoList';

function PostContents() {
  const [images, setImages] = useState();
  const [url, setUrl] = useState();

  const unsplash = new Unsplash({ accessKey: unsplashKey });
  console.log(unsplash);

  useEffect(() => {
    async function getPhotos() {
      try {
        const { data } = await unsplashApi.get(
          `/photos?client_id=${unsplashKey}`
        );
        setImages(data);
        console.log(data);
        console.log(data[0].urls.raw);
        setUrl(data[0].urls.raw);
      } catch (e) {
        console.log(e.message);
      }
    }
    getPhotos();
  }, []);
  return (
    <div>
      {images?.map((image) => (
        <>
          <PhotoList image={image} />
          <PostCarousel image={image} />
        </>
      ))}
      <PostIcons />
    </div>
  );
}

export default PostContents;
