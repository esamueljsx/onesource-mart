// src/Components/AppSection.tsx

import type { ReactNode } from "react";

interface AppSectionProps {
    id: string; 
    children: ReactNode;
    className?: string;
}

function AppSection({ id, children, className = "" }: AppSectionProps) {
    return (
        <section 
            id={id} 
            // Only applies vertical padding and custom background/classes
            className={`w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            {children}
        </section>
    )
}

export default AppSection;