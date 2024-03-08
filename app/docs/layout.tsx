import Link from 'next/link';

const links = [
  { href: '/docs/', label: 'Page 1' },
  { href: '/docs/page-2', label: 'Page 2' },
  { href: '/docs/page-3', label: 'Page 3' },
  { href: '/', label: 'Back Home' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen w-screen grid grid-cols-6 text-[1.1rem]'>
      <nav className=' col-span-1 shadow-md grid place-items-center'>
        <ul className='grid gap-[2rem]'>
          {links.map(({ href, label }) => (
            <li
              key={`${href}${label}`}
              className=' bg-amber-600 px-4 py-2 rounded-md text-white hover:bg-amber-700 cursor-pointer'
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className='col-span-5 text-[3rem] w-full text-center grid place-items-center text-green-600 font-bold'>
        {children}
      </main>
    </div>
  );
}
