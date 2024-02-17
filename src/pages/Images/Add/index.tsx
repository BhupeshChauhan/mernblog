import React from 'react'
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import DashboardCard from '../../../components/shared/DashboardCard';
import CustomUploadImage from '../../../formComponent/FormFeilds/CustomUploadImage';

const AddImages = () => {
  return (
    <DashboardCard
      title="Upload Images"
      action={
        <Link to={"/images/list"}>
          <Button variant="outlined">Images List</Button>
        </Link>
      }
    >
      <CustomUploadImage showFile={true}/>
    </DashboardCard>
  );
};

export default AddImages;
