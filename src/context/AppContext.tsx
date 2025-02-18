"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    products: any;
    setProducts: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<any>([]);

    return (
        <AppContext.Provider value={{ products, setProducts }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};