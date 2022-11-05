import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItems from './FeedbackItems'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackListComponent = () => {
    const { feedback, isLoading } = useContext(FeedbackContext)


    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p> No feedback yet </p>
    }

    return isLoading ? <Spinner /> : (
        <div className='feedback-items'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItems key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    


    // return (
    //     <div className='feedback-items'>
    //         {feedback.map((item) => (
    //             <FeedbackItems key={item.id} item={item} handelDelete={handelDelete} />
    //         ))}
    //     </div>
    // )
}

export default FeedbackListComponent