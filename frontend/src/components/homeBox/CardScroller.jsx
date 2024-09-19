import React from 'react';
import coverimg from '../../assets/coverimg.jpeg';
import '../../../src/HomePage.css';

const CardScroller = ({ cards }) => {
  return (
    <div className="overflow-x-scroll p-4" style={{ whiteSpace: 'nowrap' }}>
      {cards?.map((card, index) => (
        <div
          key={index}
          className="inline-block card-shadow m-2 p-4 rounded-lg"
          style={{ width: '300px', minWidth: '300px' }} // Set card width
        >
          <div className="flex mb-3">
            <div>
              <img src={coverimg} alt="" style={{ width: '300px', height: '200px' }} />
            </div>
            <div className='ml-5'>
              <p className="text-xl font-semibold">Heart attack</p>
              <p className="text-gray-500"> abccccccc </p>

              <div className="flex text-center w-full border mb-2">
                <p className="font-semibold mb-2 ml-3"> djbdb children</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardScroller;
