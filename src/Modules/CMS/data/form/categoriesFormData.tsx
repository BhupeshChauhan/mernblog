import * as Yup from 'yup';

const categoriesFormData = () => {
  const categoriesformArray = [
    {
      id: 'name',
      name: 'name',
      label: 'Name',
      placeholder: 'Enter Name',
      required: true,
      disabled: false,
      formInputType: 'input',
      type: null,
      InputProps: null,
      variant: 'outlined',
      autoComplete: null,
      size: 'sm',
      margin: 'none',
      fullWidth: true,
      multiLine: false,
      maxRows: null,
      rows: null,
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      placeholder: 'Select Featured Image',
      formInputType: 'imageSelector',
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
      fullWidth: true,
    },
    {
      id: 'slug',
      name: 'slug',
      label: 'Slug',
      placeholder: 'Enter Slug',
      required: true,
      disabled: false,
      formInputType: 'input',
      type: null,
      InputProps: null,
      variant: 'outlined',
      autoComplete: null,
      size: 'sm',
      margin: 'none',
      fullWidth: true,
      multiLine: false,
      maxRows: null,
      rows: null,
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      id: 'description',
      name: 'description',
      label: 'Description',
      placeholder: 'Enter Description',
      required: true,
      disabled: false,
      formInputType: 'input',
      type: null,
      InputProps: null,
      variant: 'outlined',
      autoComplete: null,
      size: 'sm',
      margin: 'none',
      fullWidth: true,
      multiLine: false,
      maxRows: null,
      rows: null,
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
    },
    {
      name: 'type',
      label: 'Categories Type',
      placeholder: 'Enter Categories Type',
      formInputType: 'select',
      required: true,
      xs: 6,
      sm: 6,
      lg: 6,
      xl: 6,
      menuArray: [
        {
          name: 'series',
        },
        {
          name: 'resorces',
        },
        {
          name: 'blog',
        },
      ],
      fullWidth: true,
      multiple: true,
    },
  ];

  const categoriesInitialValues = {
    name: '',
    slug: '',
    description: '',
    featuredImage: '',
    type: [],
  };

  const categoriesValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    slug: Yup.string().required('Slug is required'),
    description: Yup.string().required('Description is required'),
    featuredImage: Yup.string().required('Featured Image is required'),
    type: Yup.array().required('Category Type Image is required'),
  });

  return {
    categoriesformArray,
    categoriesInitialValues,
    categoriesValidationSchema,
  };
};

export default categoriesFormData;
