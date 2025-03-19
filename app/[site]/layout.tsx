export async function generateStaticParams() {
  return [
    {
      site: "de_de",
    },
    {
      site: "en_us",
    },
    {
      site: "it_it",
    },
    {
      site: "es_es",
    },
    {
      site: "fr_fr",
    },
  ];
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ site: string }>;
}) {
  const { site } = await params;

  return (
    <>
      <h1>You are here: {site}</h1>
      {children}
    </>
  );
}
