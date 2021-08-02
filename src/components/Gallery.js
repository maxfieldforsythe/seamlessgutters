import React, { Component } from 'react';
import Gallery2 from 'react-grid-gallery';
import Header from './header'

import pic1 from './img1.jpg'
import pic2 from './img2.jpg'
import pic3 from './img3.jpg'
import pic4 from './img4.jpg'
import pic5 from './img5.jpg'
import pic6 from './img6.jpg'
import pic7 from './img7.jpeg'
import pic8 from './img8.jpeg'
import pic9 from './img9.jpeg'
import pic10 from './img10.jpeg'
import pic11 from './img11.jpeg'
import pic12 from './img12.jpeg'
import pic13 from './img13.jpeg'
import pic14 from './img14.jpeg'
import pic15 from './img15.jpeg'
import pic16 from './img16.jpeg'
import pic17 from './img17.jpeg'
import pic18 from './img18.jpeg'
import pic19 from './img19.jpeg'
import pic20 from './img20.jpeg'
import pic21 from './img21.jpeg'
import pic22 from './img22.jpeg'
import pic23 from './img23.jpeg'
import pic24 from './img24.jpeg'
import pic25 from './img25.jpeg'
import pic26 from './img26.jpeg'
import pic27 from './img27.jpeg'
import pic28 from './img28.jpeg'
import pic29 from './img29.jpeg'
import pic30 from './img30.jpeg'
import pic31 from './img31.jpeg'
import pic32 from './img32.jpeg'
import pic33 from './img33.jpeg'
import pic34 from './img34.jpeg'
import pic35 from './img35.jpeg'
import pic36 from './img36.jpeg'
import pic37 from './img37.jpeg'
import pic38 from './img38.jpeg'
import pic39 from './img39.jpeg'
import pic40 from './img40.jpeg'
import pic41 from './img41.jpeg'
import pic42 from './img42.jpeg'
import pic43 from './img43.jpeg'
import pic44 from './img44.jpeg'
import pic45 from './img45.jpeg'
import pic46 from './img46.jpeg'
import pic47 from './img47.jpeg'
import pic48 from './img48.jpeg'
import pic49 from './img49.jpeg'
import pic50 from './img50.jpeg'
import pic51 from './img51.jpeg'
import pic52 from './img52.jpeg'
import pic53 from './img53.jpeg'
import pic54 from './img54.jpeg'
import pic55 from './img55.jpeg'
import pic56 from './img56.jpeg'
import pic57 from './img57.jpeg'
import pic58 from './img58.jpeg'
import pic59 from './img59.jpeg'
import pic60 from './img60.jpeg'
import pic61 from './img61.jpeg'
import pic62 from './img62.jpeg'
import pic63 from './img63.jpeg'
import pic64 from './img64.jpeg'
import pic65 from './img65.jpeg'
import pic66 from './img66.jpeg'
import pic67 from './img67.jpeg'
import pic68 from './img68.jpeg'
import pic69 from './img69.jpeg'
import pic70 from './img70.jpeg'
import pic71 from './img71.jpeg'
import pic72 from './img72.jpeg'
import pic73 from './img73.jpeg'
import pic74 from './img74.jpeg'
import pic75 from './img75.jpeg'
import pic76 from './img76.jpeg'
import pic77 from './img77.jpeg'
import pic78 from './img78.jpeg'
import pic79 from './img79.jpeg'
import pic80 from './img80.jpeg'
import pic81 from './img81.jpeg'
import pic82 from './img82.jpeg'
import pic83 from './img83.jpeg'
import pic84 from './img84.jpeg'
import pic85 from './img85.jpeg'


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
{
    src: pic7,
    thumbnail: pic7,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic8,
    thumbnail: pic8,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic9,
    thumbnail: pic9,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic10,
    thumbnail: pic10,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic11,
    thumbnail: pic11,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic12,
    thumbnail: pic21,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic13,
    thumbnail: pic13,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic14,
    thumbnail: pic14,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic15,
    thumbnail: pic15,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic16,
    thumbnail: pic16,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic17,
    thumbnail: pic17,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic18,
    thumbnail: pic18,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic19,
    thumbnail: pic19,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic20,
    thumbnail: pic20,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic21,
    thumbnail: pic21,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic22,
    thumbnail: pic22,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic23,
    thumbnail: pic23,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic24,
    thumbnail: pic24,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic25,
    thumbnail: pic25,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic26,
    thumbnail: pic26,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic27,
    thumbnail: pic27,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic28,
    thumbnail: pic28,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic29,
    thumbnail: pic29,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic30,
    thumbnail: pic30,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic31,
    thumbnail: pic31,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic32,
    thumbnail: pic32,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic33,
    thumbnail: pic33,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic34,
    thumbnail: pic34,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic35,
    thumbnail: pic35,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic36,
    thumbnail: pic36,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic37,
    thumbnail: pic37,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic38,
    thumbnail: pic38,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic39,
    thumbnail: pic39,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic40,
    thumbnail: pic40,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic41,
    thumbnail: pic41,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic42,
    thumbnail: pic42,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic43,
    thumbnail: pic43,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic44,
    thumbnail: pic44,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic45,
    thumbnail: pic45,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic46,
    thumbnail: pic46,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic47,
    thumbnail: pic47,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic48,
    thumbnail: pic48,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic49,
    thumbnail: pic49,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic50,
    thumbnail: pic50,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic51,
    thumbnail: pic51,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic52,
    thumbnail: pic52,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic53,
    thumbnail: pic53,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic54,
    thumbnail: pic54,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic55,
    thumbnail: pic55,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic56,
    thumbnail: pic56,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic57,
    thumbnail: pic57,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic58,
    thumbnail: pic58,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic59,
    thumbnail: pic59,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic60,
    thumbnail: pic60,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic61,
    thumbnail: pic61,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic62,
    thumbnail: pic62,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic63,
    thumbnail: pic63,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic64,
    thumbnail: pic64,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic65,
    thumbnail: pic65,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic66,
    thumbnail: pic66,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic67,
    thumbnail: pic67,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic68,
    thumbnail: pic68,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic69,
    thumbnail: pic69,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic70,
    thumbnail: pic70,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic71,
    thumbnail: pic71,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic72,
    thumbnail: pic72,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic73,
    thumbnail: pic73,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic74,
    thumbnail: pic74,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic75,
    thumbnail: pic75,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic76,
    thumbnail: pic76,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic77,
    thumbnail: pic77,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic78,
    thumbnail: pic78,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic79,
    thumbnail: pic79,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic80,
    thumbnail: pic80,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic81,
    thumbnail: pic81,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic82,
    thumbnail: pic82,
    thumbnailWidth: 232,
    thumbnailHeight: 174,
    
},
{
    src: pic83,
    thumbnail: pic83,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic84,
    thumbnail: pic84,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
{
    src: pic85,
    thumbnail: pic85,
    thumbnailWidth: 131,
    thumbnailHeight: 174,
    
},
]


class Gallery extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="heady" style={{paddingTop: '140px', textAlign: 'center', font: 'bold calc(36px + .5vw) Verdana, sans-serif'}}>
                    Image Gallery
                </div>
                <div  style={{marginBottom: '20px', marginLeft: '5vw',width: '90vw', height: '6px', backgroundColor: '#a10000', marginTop: '10px', borderRadius: '20px'}}/>
                <Gallery2 images={IMAGES}  enableImageSelection={false}/>
            </div>
        );
    }
}

export default Gallery;