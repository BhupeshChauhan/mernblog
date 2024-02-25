import { useEffect } from 'react';
import { Button, Grid, ImageList, ImageListItem } from '@mui/material';
import CustomDialog from '../../components/CustomDialog';
import { useState } from 'react';
import { UploadImgApi } from '../../modules/cms/apis/UploadImgApi';
import CustomUploadImage from './CustomUploadImage';

type Props = {
  value?: any;
  onChange?: any;
  menuArray?: any;
  fullWidth?: any;
  handleChange?: any;
  name?: any;
  multiple?: any;
  placeholder?: any;
  label?: any;
};

const CustomImageSelect = ({ value, handleChange, fullWidth, name, placeholder }: Props) => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onChange = (values: any) => {
    handleChange(values, name);
    handleClose();
  };

  const handleUplaodCallBack: any = () => {
    UploadImgApi.getImage().then((data) => {
      // response handling
      console.log(images);
      setImages(data.images);
    });
  };

  useEffect(() => {
    UploadImgApi.getImage().then((data) => {
      // response handling
      console.log(images);
      setImages(data.images);
    });
  }, []);

  return (
    <>
      {!value ? (
        <Button variant='outlined' onClick={handleClickOpen} fullWidth={fullWidth}>
          {placeholder}
        </Button>
      ) : (
        <>
          <Button
            component='label'
            variant='outlined'
            onClick={handleClickOpen}
            style={{ margin: '0 10px 10px 0' }}
          >
            Change Selected Image
          </Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => onChange(null)}
            style={{ margin: '0 10px 10px 0' }}
          >
            Remove Image
          </Button>
          <img
            srcSet={`${value}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${value}?w=164&h=164&fit=crop&auto=format`}
            loading='lazy'
            style={{ height: '250px', width: '500px' }}
          />
        </>
      )}
      <CustomDialog
        visibility={open}
        closeModal={handleClose}
        modaltitle={
          <Grid container>
            <Grid item xs={8}>
              {placeholder}
            </Grid>
            <Grid item xs={4}>
              <CustomUploadImage onUpload={handleUplaodCallBack} />
            </Grid>
          </Grid>
        }
      >
        <ImageList sx={{ width: '100%', height: '65vh' }} cols={3} rowHeight={164}>
          {images?.map((item: any) => (
            <ImageListItem key={item.imageUrl}>
              <img
                src={`${item.imageUrl}`}
                alt={item.filename}
                loading='lazy'
                style={
                  value === item.imageUrl
                    ? {
                        height: '100%',
                        width: '100%',
                        border: '2px solid #f7f7f7',
                      }
                    : { height: '100%', width: '100%' }
                }
                onClick={() => onChange(item.imageUrl)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CustomDialog>
    </>
  );
};

export default CustomImageSelect;
