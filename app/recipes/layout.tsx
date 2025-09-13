import Navbar from "../components/Navbar";


export const metadata = {
    title: "Recipe App",
    description: "A Next.js recipe project",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    
        <main className="max-w-6xl mx-auto p-6">
            <Navbar/>
            {children}
        </main>
        
    );
}
