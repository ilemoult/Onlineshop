import Link from 'next/link';

export default function Selection() {
  return (
    <div className="selection">
      <Link href="/selection">
        <a title="Meine Favoriten">♡</a>
      </Link>
    </div>
  );
}
