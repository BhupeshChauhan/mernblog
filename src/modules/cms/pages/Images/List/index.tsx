import React from 'react'
import  { useEffect, useState } from 'react';
import { Button, ImageList, ImageListItem } from '@mui/material';
import DashboardCard from '../../../../../common/DashboardCard';
import { UploadImgApi } from '../../../../ums/apis/UploadImgApi';
import { Link } from 'react-router-dom';
import CustomCircularProgress from '../../../../../components/CustomCircularProgress';

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
                src={`${item.imageUrl}`}
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
