import React, { useState } from 'react';
import {CaretRight} from '@phosphor-icons/react';

const images = [
    // Add arrays of image URLs here for each row
    [
        'https://i0.wp.com/worldmusicviews.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-01-at-9.02.59-PM.png?fit=1380%2C1098&ssl=1',
        'https://images.unsplash.com/photo-1656761961810-9e0f885dff6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg',
        'https://marketingedge.com.ng/wp-content/uploads/2024/01/Burna-Boy-3-1.jpg',
        'https://i0.wp.com/worldmusicviews.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-01-at-9.02.59-PM.png?fit=1380%2C1098&ssl=1',
        'https://images.unsplash.com/photo-1656761961810-9e0f885dff6a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg',
        'https://marketingedge.com.ng/wp-content/uploads/2024/01/Burna-Boy-3-1.jpg',
        'https://i0.wp.com/worldmusicviews.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-01-at-9.02.59-PM.png?fit=1380%2C1098&ssl=1',
        
    ],
    [
        'https://images.daznservices.com/di/library/GOAL/10/8d/mohamed-salah-liverpool_1ltvc70k6d7lj1dlavwegtd251.jpg?t=-395819302',
        'https://laopinion.com/wp-content/uploads/sites/3/2023/02/GettyImages-1247360496.jpg?quality=80&strip=all&w=1200',
        'https://phantom-marca.unidadeditorial.es/265aa81d522bd7fa622cc425652a2d23/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/08/16758374764671.jpg',
        'https://th.bing.com/th/id/OIP.20-ONbYs0rOUPrSh5jKyFQAAAA?rs=1&pid=ImgDetMain',
        'https://images.daznservices.com/di/library/GOAL/10/8d/mohamed-salah-liverpool_1ltvc70k6d7lj1dlavwegtd251.jpg?t=-395819302',
        'https://laopinion.com/wp-content/uploads/sites/3/2023/02/GettyImages-1247360496.jpg?quality=80&strip=all&w=1200',
        'https://phantom-marca.unidadeditorial.es/265aa81d522bd7fa622cc425652a2d23/resize/1320/f/jpg/assets/multimedia/imagenes/2023/02/08/16758374764671.jpg',
    ],
    [
        'https://www.mensjournal.com/.image/t_share/MjAzNzI0MjY0NDcyMzIzODcy/lift-photocall.jpg',
        'https://urbanislandz.com/wp-content/uploads/2020/07/Shatta-Wale-and-Beyonce.jpeg',
        'https://pan-african-music.com/wp-content/uploads/2022/10/Sarkodie-copie.jpg',
        'https://static.independent.co.uk/2023/06/25/05/BET_Awards_59895.jpg',
        'https://www.mensjournal.com/.image/t_share/MjAzNzI0MjY0NDcyMzIzODcy/lift-photocall.jpg',
        'https://urbanislandz.com/wp-content/uploads/2020/07/Shatta-Wale-and-Beyonce.jpeg',
        'https://pan-african-music.com/wp-content/uploads/2022/10/Sarkodie-copie.jpg'
    ],
];

const Collage = () => {
    const [voterID, setVoterID] = useState("");

    function handleVoter() {
        console.log(voterID);
        window.location.href = `/home/`
    }

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gray-900 text-white">
            <h1 className="absolute inset-0 flex pt-40 px-4  justify-center text-4xl md:text-6xl bg-gray-900 bg-opacity-85 lg:text-8xl font-bold z-10">
                <div >
                <div className='container mx-auto lg:px-20 flex flex-col'>
                <div className='font-normal'>
                Welcome to 
                <img src='/img/votefave-tp.png' alt='Votefave' />
                <div className='pr-2 text-base md:text-xl text-right text-slate-400'>Your No.1 Voting Platform online</div>
                </div>
                
                <div className='text-sm md:text-lg pt-20 w-full '>
              <div className='bg-white flex rounded-full overflow-hidden'>
              <input
                type="text"
                placeholder="Enter Voter ID"
                className="w-full py-4 px-10 outline-none text-black "
                value={voterID}
                onChange={(e) =>
                  setVoterID(e.target.value)
                }
              />
              <button onClick={handleVoter} className='bg-[#84C53E] hover:bg-slate-600 px-6'>
            <div className='animate-pulse'>
            <CaretRight size={32} />
            </div>
              </button>
              </div>
            </div>
                </div>
                </div>
            </h1>
            {images.map((row, index) => (
                <div
                    key={index}
                    className={`absolute w-full flex space-x-4 ${index % 2 === 0 ? 'animate-scrollLeft' : 'animate-scrollRight'
                        }`}
                    style={{
                        top: `${(index * 35)}%`, // Adjust based on the number of rows
                    }}
                >
                    {row.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Collage Image-${idx}`}
                            className="h-80 w-auto"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Collage;
