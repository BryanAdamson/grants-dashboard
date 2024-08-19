import React from 'react';
import TableRow from './TableRow';
import styles from '../../styles/Table.module.css';

export interface Grant {
    id: string;
    foundationName: string;
    grantName: string;
    averageAmount: number;
    location: string;
    matchDate: string;
    deadline: string;
    status: string;
}

interface GrantsTableProps {
    grants: Grant[];
}

const GrantsTable: React.FC<GrantsTableProps> = ({ grants }) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Foundation Name</th>
                <th>Grant Name</th>
                <th>Average Amount</th>
                <th>Location</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Match Date</th>
            </tr>
            </thead>
            <tbody>
            {grants.map((grant) => (
                <TableRow key={grant.id} grant={grant} />
            ))}
            </tbody>
        </table>
    );
};

export default GrantsTable;
