import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ul>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <Link href={`/tracks/${index + 1}`}>Track #{index + 1}</Link>
            </li>
          ))}
      </ul>
      <h1>Main</h1>
    </>
  );
}
