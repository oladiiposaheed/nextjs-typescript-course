// ==========================================
// UserStats
// ==========================================
// A small container that shows stats.
// Uses children prop — you pass whatever you want inside.
//
// Props:
//   label    — the stat name (e.g., "Total Users")
//   value    — the number to show
//   children — optional extra content
// ==========================================

import { ReactNode } from "react";

interface UserStatsProps {
    label: string;
    value: number;
    children?: ReactNode
}

function UserStats({ label, value, children }: UserStatsProps) {
    return (
        <div>
            <p>{label}</p>
            <p>{value}</p>
            {children}
        </div>
    );
}

export default UserStats