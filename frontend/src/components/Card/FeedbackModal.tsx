import React, { useState } from 'react';
import styles from '../../styles/FeedbackModal.module.css';

interface FeedbackModalProps {
    onSubmit: (feedback: string) => void;
    onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ onSubmit, onClose }) => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        onSubmit(feedback);
        setFeedback('');
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2>Submit Your Feedback</h2>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback here"
                />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default FeedbackModal;
