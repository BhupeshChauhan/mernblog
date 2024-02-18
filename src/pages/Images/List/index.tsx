/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Button, ImageList, ImageListItem } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { UploadImgApi } from '../../../apis/UploadImgApi';
import { Link } from 'react-router-dom';
import CustomCircularProgress from '../../../components/CustomCircularProgress';

const ImagesList = () => {
  const [isLoading, setisLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setisLoading(true);
    UploadImgApi.getImage().then((data) => {
      // response handling
      setImages(data.images);
      setisLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? <CustomCircularProgress color='inherit' /> : <></>}

      <DashboardCard
        title='Images List'
        action={
          <Link to={'/images/add'}>
            <Button variant='outlined'>Upload Images</Button>
          </Link>
        }
      >
        <ImageList sx={{ width: '100%', height: '65vh' }} cols={3} rowHeight={164}>
          {images.map((item: any) => (
            <ImageListItem key={item.imageUrl}>
              <img
                srcSet={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
                style={{ height: '100%', width: '100%' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </DashboardCard>
    </>
  );
};

export default ImagesList;
