import React from 'react';
import CustomImageSelect from '../../formComponent/FormFeilds/CustomImageSelect';
import { handleUploadImage } from '../../utils/editor.tools';
import defaultbanner from '../../assets/imgs/blogbanner.png';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import CustomSelect from '../../formComponent/FormFeilds/CustomSelect';
import { useEditorContext } from '../../context/CreateEditorContext';

const CustomBlogSettings = () => {
  let {
    blog: { title, banner, content, tags, categories, des, author },
    setBlog,
    textEditor,
    setTextEditor,
  } = useEditorContext();

  const handleChangeSelect = (value, name) => {
    setBlog((prev) => ({ ...prev, banner: value }));
  };

  const handleBannerUpload = async (e) => {
    const img = await handleUploadImage(e.target.files[0]);
    setBlog((prev) => ({ ...prev, banner: img }));
  };

  const handleImageError = (e) => {
    let img = e.target;

    img.src = defaultbanner;
  };

  return (
    <>
      <div className='mb-4'>
        <Typography variant='h5'>Settings</Typography>
      </div>
      <div className='mt-8'>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Featured Image
          </AccordionSummary>
          <AccordionDetails>
            <div className='relative aspect-video bg-white border-4 border-grey hover:opacity-80 w-full'>
              <label htmlFor='uploadBanner'>
                <img src={banner} className='z-20' onError={handleImageError} />
                <input
                  id='uploadBanner'
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  hidden
                  onChange={handleBannerUpload}
                />
              </label>
            </div>
            <div className='mt-8'>
              <CustomImageSelect
                // value={}
                handleChange={handleChangeSelect}
                name={'Select From Gellary'}
                placeholder={'Select From Gellary'}
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Categories
          </AccordionSummary>
          <AccordionDetails>
            <CustomSelect
              value={[]}
              handleChange={() => {}}
              menuArray={[
                {
                  name: 'React',
                },
                {
                  name: 'Html',
                },
                {
                  name: 'Css',
                },
              ]}
              fullWidth
              name='Categories'
              multiple
              placeholder='Categories'
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Tags
          </AccordionSummary>
          <AccordionDetails>
            <CustomSelect
              value={[]}
              handleChange={() => {}}
              menuArray={[
                {
                  name: 'New',
                },
              ]}
              fullWidth
              name='Tags'
              multiple
              placeholder='Tags'
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Settings
          </AccordionSummary>
          <AccordionDetails>
            <div className='mb-2'>
              <TextField placeholder='Excerpt' fullWidth></TextField>
            </div>
            <div className='mb-2'>
              <CustomSelect
                value={[]}
                handleChange={() => {}}
                menuArray={[
                  {
                    name: 'Public',
                  },
                  {
                    name: 'Private',
                  },
                ]}
                fullWidth
                name='Categories'
                multiple
                placeholder='Categories'
              />
            </div>
            <div className='mb-2'>
              <TextField placeholder='Featured' fullWidth></TextField>
            </div>
            <div className='mb-2'>
              <TextField placeholder='Slug' fullWidth></TextField>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Seo Settings
          </AccordionSummary>
          <AccordionDetails>
            <div className='mb-2'>
              <TextField placeholder='Focus Keyword' fullWidth></TextField>
            </div>
            <div className='mb-2'>
              <TextField placeholder='Seo Title' fullWidth></TextField>
            </div>
            <div className='mb-2'>
              <TextField placeholder='Meta Description' fullWidth></TextField>
            </div>
            <div className='mb-2'>
              <TextField placeholder='Canonical Url' fullWidth></TextField>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default CustomBlogSettings;
