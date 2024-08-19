import React from 'react';
import Card from '../components/Card/Card';
import GrantsTable from '../components/Table/GrantsTable';
import { useGrants } from '../hooks/useGrants';
import styles from '../styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
    const { grants, loading, error, handleFeedbackSubmit } = useGrants();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const newMatches = grants.filter((grant: any) => grant.status === 'Applied');
    const previousGrants = grants.filter((grant: any) => grant.status === 'Accepted');

    return (
        <div className={styles.dashboard}>
            <div className={styles.container}>
                <h2>New Matches</h2>
                <div className={styles.cards}>
                    {newMatches.map((grant: any) => (
                        <Card key={grant.id} {...grant} onFeedbackSubmit={handleFeedbackSubmit}/>
                    ))}
                </div>

                <h2>All Grant Opportunities</h2>
                <GrantsTable grants={previousGrants}/>
            </div>
        </div>
    );
};

export default Dashboard;
