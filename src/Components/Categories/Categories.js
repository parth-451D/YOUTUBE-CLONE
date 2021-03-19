import React ,{useState}from 'react';
import { useDispatch } from 'react-redux';
import { getVideosByCategory } from '../../redux/actions/video.action';
import './_categories.scss';

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'Use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'lofi Songs',
    'Coding',
    'Cricket',
    'Football',
    'pubg',
    'Games',
    'Clever programmer',
 ]
//  check here first bro ***********************************************************************

const Categories = (value) => {

    const [activeElement, setActiveElement] = useState('All')
     
    const dispatch = useDispatch()

    const handleClick = value => {
        setActiveElement(value);
        dispatch(getVideosByCategory(value))
     }


    return (
        <div className="categoriesBar">
           { keywords.map((value, i)=>(
               <span key={i}
               onClick={()=>handleClick(value)}
               className={activeElement === value ? 'active' : ''}>
               {value}
               </span>
           ))
           
           
           }
        </div>
    )
}

export default Categories
