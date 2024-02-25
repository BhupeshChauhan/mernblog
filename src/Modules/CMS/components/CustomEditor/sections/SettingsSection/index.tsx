import React, { useEffect } from 'react';
import CustomImageSelect from '../../../../../../formComponent/FormFeilds/CustomImageSelect';
import defaultbanner from '../../../../../../assets/imgs/blogbanner.png';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import CustomSelect from '../../../../../../formComponent/FormFeilds/CustomSelect';
import { useEditorContext } from '../../../../context/CreateEditorContext';
import { CategoriesApi } from '../../../../apis/CategoriesApi';
import { TagsApi } from '../../../../apis/TagsApi';
import { useGlobalContext } from '../../../../../../context/GlobalContext';
import { handleUploadImage } from '../../../../../../utils/uploadImage';

const SettingsSection = () => {
  const {
    blog: {
      banner,
      content,
      tags,
      categories,
      excerpt,
      visible,
      slug,
      feature,
      focusKeyword,
      seoTitle,
      metaDescription,
      canonicalUrl
    },
    setBlog,
  } = useEditorContext();
  console.log(content);
  const { userData } = useGlobalContext();
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [categoriesList, setCategoriesList] = React.useState([]);
  const [tagsList, setTagsList] = React.useState([]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    console.log(event)
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeSelect = (value: any) => {
    setBlog((prev: any) => ({ ...prev, banner: value }));
  };

  const handleBannerUpload = async (e: any) => {
    const img = await handleUploadImage(e.target.files[0]);
    setBlog((prev: any) => ({ ...prev, banner: img }));
  };

  const handleCategoriesChange = async (value: any) => {
    setBlog((prev: any) => ({ ...prev, categories: value }));
  };

  const handleTagsChange = async (value: any) => {
    setBlog((prev: any) => ({ ...prev, tags: value }));
  };

  const handleExcerptChange = async (value: any) => {
    setBlog((prev: any) => ({ ...prev, excerpt: value }));
  };

  const handleVisibleChange = async (value: any) => {
    setBlog((prev: any) => ({ ...prev, visible: value }));
  };

  const handleFeatureChange = async (value: any) => {
    setBlog((prev: any) => ({ ...prev, feature: value }));
  };

  const handleFocusKeywordChange = async (e: any) => {
    setBlog((prev: any) => ({ ...prev, focusKeyword: e.target.value }));
  };

  const handleSeoTitleChange = async (e: any) => {
    setBlog((prev: any) => ({ ...prev, seoTitle: e.target.value }));
  };

  const handleMetaDescriptionChange = async (e: any) => {
    setBlog((prev: any) => ({ ...prev, metaDescription: e.target.value }));
  };

  const handleCanonicalUrlChange = async (e: any) => {
    setBlog((prev: any) => ({ ...prev, canonicalUrl: e.target.value }));
  };

  const handleSlugChange = async (value: any) => {
    setBlog((prev: any) => ({ ...prev, slug: value }));
  };

  const handleImageError = (e: any) => {
    const image: any = e.target;

    image.src = defaultbanner;
  };

  const getInitailData = () => {
    CategoriesApi.getList()
      .then((category: any) => {
        // response handling
        setCategoriesList(category);
      })
      .catch((err: any) => {
        console.error(err);
      });
    TagsApi.getList()
      .then((products: any) => {
        // response handling
        setTagsList(products);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getInitailData();
    setBlog((prev: any) => ({ ...prev, author: userData.user._id }));
  }, []);

  return (
    <>
      <div className='mb-4'>
        <Typography variant='h5'>Settings</Typography>
      </div>
      <div className='mt-8'>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Categories
          </AccordionSummary>
          <AccordionDetails>
            <CustomSelect
              value={categories}
              handleChange={handleCategoriesChange}
              menuArray={categoriesList}
              fullWidth
              name='Categories'
              multiple
              placeholder='Categories'
            />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Tags
          </AccordionSummary>
          <AccordionDetails>
            <CustomSelect
              value={tags}
              handleChange={handleTagsChange}
              menuArray={tagsList}
              fullWidth
              name='Tags'
              multiple
              placeholder='Tags'
            />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Settings
          </AccordionSummary>
          <AccordionDetails>
            <div className='mb-2'>
              <TextField
                placeholder='Excerpt'
                fullWidth
                value={excerpt}
                onChange={(e) => handleExcerptChange(e.target.value)}
              ></TextField>
            </div>
            <div className='mb-2'>
              <CustomSelect
                value={visible}
                handleChange={handleVisibleChange}
                menuArray={[
                  {
                    name: 'Public',
                  },
                  {
                    name: 'Private',
                  },
                ]}
                fullWidth
                name='visible'
                placeholder='Visible'
              />
            </div>
            <div className='mb-2'>
              <CustomSelect
                value={feature}
                handleChange={handleFeatureChange}
                menuArray={[
                  {
                    name: 'Feature on Home',
                  },
                  {
                    name: 'Feature as editor pick',
                  },
                ]}
                fullWidth
                name='feature'
                placeholder='Feature'
              />
            </div>
            <div className='mb-2'>
              <TextField
                placeholder='Slug'
                fullWidth
                value={slug}
                onChange={(e) => handleSlugChange(e.target.value)}
              ></TextField>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            Seo Settings
          </AccordionSummary>
          <AccordionDetails>
            <div className='mb-2'>
              <TextField 
                  placeholder='Focus Keyword' 
                  fullWidth
                  value={focusKeyword}
                  onChange={handleFocusKeywordChange}
              ></TextField>
            </div>
            <div className='mb-2'>
              <TextField 
                  placeholder='Seo Title' 
                  fullWidth
                  value={seoTitle}
                  onChange={handleSeoTitleChange}
              ></TextField>
            </div>
            <div className='mb-2'>
              <TextField 
                placeholder='Meta Description' 
                fullWidth
                value={metaDescription}
                onChange={handleMetaDescriptionChange}
              ></TextField>
            </div>
            <div className='mb-2'>
              <TextField 
                placeholder='Canonical Url' 
                fullWidth
                value={canonicalUrl}
                onChange={handleCanonicalUrlChange}
              ></TextField>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default SettingsSection;
