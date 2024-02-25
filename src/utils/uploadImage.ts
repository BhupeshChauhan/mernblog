import toast from 'react-hot-toast';
import axios from 'axios';

export const handleUploadImage = async (img: any) => {
    if (img) {
        const uploadUrl = toast.loading('Uploading...');
        const formData: any = new FormData();
        formData.append('image', img);
        try {
            const res = await axios.post(`${import.meta.env.VITE_APIURL}/upload-image`, formData)
            toast.dismiss(uploadUrl);
            toast.success('Image Uploaded Successfully');
            return res?.data.gallery.imageUrl;

        } catch (error) {
            console.log(error);

            return null;
        }

    }
};