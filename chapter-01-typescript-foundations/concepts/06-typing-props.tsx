// // ==========================================
// // Concept 1.6: Typing Props — Basic
// // ==========================================

// // Step 1: Define what props the component takes

// interface GreetingProps {
//     name: string;
// }

// // Step 2: Use the interface after the props parameter
// function Greeting({ name }: GreetingProps) {
//     return <p>Hello, {name}!</p>;
// }

// // Step 3: Use the component (inside another component or page)
// export default function HomePage() {
//     return (
//         <div className="p-8">
//             <Greeting name="Fatimah" />
//             <Greeting name="Blessing" />
//             <Greeting name="Hawwa" />
//         </div>
//     );
// }



// ==========================================
// Concept 1.6: Typing Props — Multiple
// ==========================================

// Interface with multiple props
interface UserCardProps {
    name: string;
    age: number;
    isActive: boolean;
}

function UserCard({ name, age, isActive }: UserCardProps) {
    return (
        <div className="border p-3 rounded mb-3">
            <p className="font-bold">{name}</p>
            <p className="text-sm">Age: {age}</p>
            <p className="text-sm">
                Status: {isActive ? '🟢 Active' : '🔴 Inactive'}
            </p>
        </div>
    );
}

export default function HomePage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">USers</h1>

            <UserCard name="Fatimah" age={25} isActive={true} />
            <UserCard name="Prince" age={50} isActive={false} />
            <UserCard name="Hawwa" age={31} isActive={true} />
        </div>
    );
}