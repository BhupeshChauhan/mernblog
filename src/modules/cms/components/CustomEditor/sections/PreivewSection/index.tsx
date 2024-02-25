import { useEditorContext } from '../../../../context/CreateEditorContext';
import defaultbanner from '../../../../../../assets/imgs/blogbanner.png';
import BlockContent from './BlockContent';

const PreivewSection = () => {
  const {
    blog: { title, banner, content, des, },
  } = useEditorContext();
  const handleImageError = (e: any) => {
    let img: any = e.target;

    img.src = defaultbanner;
  };
  return (
    <div>
      <div className='w-full aspect-video rounded-lg overflow-hidden bg-grey mt-4'>
        <img src={banner} className='z-20' onError={handleImageError} />
      </div>
      <h1 className='text-4xl font-medium mt-2 leading-tight line-clamp-2'>{title}</h1>
      <p className='text-xl font-medium mt-2 leading-tight line-clamp-2'>{des}</p>
      <div className='my-12 font-gelasio'>
        {content.blocks.map((block: any, i: any) => {
          return (
            <div key={i} className='my-4 md:my-8'>
              <BlockContent block={block} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreivewSection;
