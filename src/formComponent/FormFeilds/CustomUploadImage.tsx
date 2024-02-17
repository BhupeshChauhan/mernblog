/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { handleUploadImage } from '../../utils/editor.tools';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function CustomUploadImage({showFile = false, onUpload = null}) {
  const [selectedFile, setselectedFile] = useState<any>(null);
  const handleUploadClick = async(event: any) => {
    const img = await handleUploadImage(event.target.files[0]);
    if(onUpload){
      onUpload(img);
    }
    setselectedFile(img);
  };
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item>
          <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
            Select Image
            <VisuallyHiddenInput type='file' onChange={handleUploadClick} />
          </Button>
      </Grid>

      {selectedFile && showFile ? (
        <Grid item>
          <img width='100%' src={selectedFile} />
        </Grid>
      ) : null}
    </Grid>
  );
}
