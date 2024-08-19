import React from 'react';
import styles from '../../styles/Table.module.css';

interface TableRowProps {
    grant: {
        id: string;
        foundationName: string;
        grantName: string;
        averageAmount: number;
        location: string;
        status: string;
        deadline: string;
        matchDate: string;
    };
}

const TableRow: React.FC<TableRowProps> = ({ grant }) => {
    const getStatusClass = (status: string) => {
        switch (status.toLowerCase()) {
            case 'applied':
                return styles.statusApplied;
            case 'rejected':
                return styles.statusRejected;
            case 'accepted':
                return styles.statusAccepted;
            default:
                return '';
        }
    };

    return (
        <tr>
            <td>{grant.foundationName}</td>
            <td>{grant.grantName}</td>
            <td>${grant.averageAmount.toLocaleString()}</td>
            <td>{grant.location}</td>
            <td className={getStatusClass(grant.status)}>{grant.status}</td>
            <td>{new Date(grant.deadline).toLocaleDateString()}</td>
            <td>{new Date(grant.matchDate).toLocaleDateString()}</td>
        </tr>
    );
};

export default TableRow;
