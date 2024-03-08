import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen w-screen grid place-items-center'>
      <Link
        href='/docs'
        className=' bg-amber-600 hover:bg-amber-700  p-4 rounded-md text-white'
      >
        <button type='button'>Go to /docs</button>
      </Link>
    </div>
  );
}
