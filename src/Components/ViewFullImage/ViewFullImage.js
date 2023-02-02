import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ViewFullImage = ({img}) => {
    return (
        <div>
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className='w-96 md:w-[400px] h-96' style={{ objectFit: 'cover'}} />
                    </figure>
                </PhotoView>
        </PhotoProvider>
            
        </div>
    );
};

export default ViewFullImage;

