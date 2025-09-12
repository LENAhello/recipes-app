import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-5 h-screen bg-linear-65 from-slate-500 to-emerald-500'>
        <h1 className='text-3xl font-bold text-white'>Find your recipes</h1>
        <Link href="/recipes" className='bg-white py-2 px-4 font-bold rounded-xl text-emerald-900'>Start Exploring</Link>
      </div>
    </>
  );
}
