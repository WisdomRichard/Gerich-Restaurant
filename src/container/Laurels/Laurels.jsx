import React from 'react';
import { images, data } from '../../constants'
import './Laurels.css';
import {SubHeading} from "../../components";

const AwardCard = (props) => (
    <div className='app__laurels_awards-card'>
        <img src={props.imgUrl} alt='award'/>
        <div className='app__laurels_awards-card_content'>
            <p className='p__cormorant' style={{color: '#DCCA87'}}>{props.title}</p>
            <p className='p__cormorant'>{props.subtitle}</p>
        </div>
    </div>
)

const Laurels = () => {
    return (
        <div className='app__bg app__wrapper app__laurels'>
            <div className='app__laurels_info app__wrapper_info'>
                <SubHeading title='Awards & Recognition'/>
                <h1 className='headtext__cormorant'>Our Laurels</h1>

                <div className='app__laurels_awards'>
                    {data.awards.map((award) => <AwardCard title={award.title} subtitle={award.subtitle} imgUrl={award.imgUrl} key={award.title}/>)}
                </div>
            </div>

            <div className='app__laurels_image app__wrapper_img'>
                <img src={images.laurels} alt='laurels'/>
            </div>
        </div>
    )
}
export default Laurels
