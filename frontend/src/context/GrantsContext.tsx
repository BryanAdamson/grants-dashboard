import React, { createContext, useState, useContext, ReactNode } from 'react';
import {Grant} from "../components/Table/GrantsTable";

interface GrantsContextType {
    grants: Grant[];
    setGrants: React.Dispatch<React.SetStateAction<Grant[]>>;
}

const GrantsContext = createContext<GrantsContextType | null>(null);

interface GrantsProviderProps {
    children: ReactNode;
}

export const GrantsProvider: React.FC<GrantsProviderProps> = ({ children }) => {
    const [grants, setGrants] = useState<Grant[]>([]);

    return (
        <GrantsContext.Provider value={{ grants, setGrants }}>
            {children}
        </GrantsContext.Provider>
    );
};

export const useGrantsContext = () => {
    const context = useContext(GrantsContext);
    if (!context) {
        throw new Error('useGrantsContext must be used within a GrantsProvider');
    }
    return context;
};
