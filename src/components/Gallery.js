import React, { Component } from 'react';
import Gallery2 from 'react-grid-gallery';
import Header from './header'

import pic1 from './img1.jpg'
import pic2 from './img2.jpg'
import pic3 from './img3.jpg'
import pic4 from './img4.jpg'
import pic5 from './img5.jpg'
import pic6 from './img6.jpg'


const IMAGES =
[{
    src: pic1,
    thumbnail: pic1,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic2,
    thumbnail: pic2,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic3,
    thumbnail: pic3,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic4,
    thumbnail: pic4,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic5,
    thumbnail: pic5,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic6,
    thumbnail: pic6,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
]


class Gallery extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="heady" style={{paddingTop: '140px', textAlign: 'center'}}>
                    Image Gallery
                </div>
                <div  style={{marginBottom: '20px', marginLeft: '5vw',width: '90vw', height: '6px', backgroundColor: '#a10000', marginTop: '10px', borderRadius: '20px'}}/>
                <Gallery2 images={IMAGES}  enableImageSelection={false}/>
            </div>
        );
    }
}

export default Gallery;