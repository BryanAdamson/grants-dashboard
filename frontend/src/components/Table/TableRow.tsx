import React from 'react';

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
    return (
        <tr>
            <td>{grant.foundationName}</td>
            <td>{grant.grantName}</td>
            <td>${grant.averageAmount.toLocaleString()}</td>
            <td>{grant.location}</td>
            <td>{grant.status}</td>
            <td>{new Date(grant.deadline).toLocaleDateString()}</td>
            <td>{new Date(grant.matchDate).toLocaleDateString()}</td>
        </tr>
    );
};

export default TableRow;
