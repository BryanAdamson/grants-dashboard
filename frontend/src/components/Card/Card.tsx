import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';
import styles from '../../styles/Card.module.css';

interface CardProps {
    id: string;
    foundationName: string;
    grantName: string;
    averageAmount: number;
    location: string;
    matchDate: string;
    deadline: string;
    areaOfFunding?: string[]; // Allow this to be undefined or an array
    onFeedbackSubmit: (id: string, feedback: string, isPositive: boolean) => void;
}

const Card: React.FC<CardProps> = ({
    id,
    foundationName,
    grantName,
    averageAmount,
    location,
    matchDate,
    deadline,
    areaOfFunding = [],
    onFeedbackSubmit,
}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPositive, setIsPositive] = useState(true);

    const handleThumbsUp = () => {
        setIsPositive(true);
        setModalOpen(true);
    };

    const handleThumbsDown = () => {
        setIsPositive(false);
        setModalOpen(true);
    };

    const handleSubmit = async (feedback: string) => {
        onFeedbackSubmit(id, feedback, isPositive);
        setModalOpen(false); // Close the modal after submission
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.logo}>{foundationName.charAt(0)}</span>
                <div className={styles.actions}>
                    <button onClick={handleThumbsUp}>👍</button>
                    <button onClick={handleThumbsDown}>👎</button>
                </div>
            </div>
            <h3>{grantName}</h3>
            <p><strong>Amount:</strong> ${averageAmount.toLocaleString()}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Match Date:</strong> {new Date(matchDate).toLocaleDateString()}</p>
            <p><strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}</p>
            <p><strong>Area of Funding:</strong> {areaOfFunding.join(', ')}</p>
            <button className={styles.applyButton}>Apply here</button>
            {isModalOpen && <FeedbackModal onSubmit={handleSubmit} onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default Card;
