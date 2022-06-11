import db from '@/lib/planetscale';
import Container from '@/components/Container';
import VisitorLog from '@/components/Signbook';

export default function GuestbookPage({ initialEntries }) {
  return (
    <Container
      title="Comments – Farrukh Atabekov"
      description="Sign my digital guestbook and share some wisdom."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Signbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a digital sign book of the site. You can leave a comment here
          to mark your visit. Share some humour, knowledge or feedback about the
          site.
        </p>
        <VisitorLog initialEntries={initialEntries} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const [rows] = await db.query(`
    SELECT * FROM guestbook
    ORDER BY updated_at DESC;
  `);

  // Serialize the data
  const entries = Object.values(JSON.parse(JSON.stringify(rows)));

  return {
    props: {
      initialEntries: entries
    },
    revalidate: 60
  };
}
