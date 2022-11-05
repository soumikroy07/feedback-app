import React, {useContext} from 'react'
import {useState} from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItems({item}) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is my first feedback')

    // const handelClick = () =>{
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev+1
    //     });
    // }

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color='purple' />
            </button>
            <button onClick={() => deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display"> {item.text} </div>
            {/* <button onClick={handelClick}> click me </button> */}
        </Card>
    )
}

export default FeedbackItems