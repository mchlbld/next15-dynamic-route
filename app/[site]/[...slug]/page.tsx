export default function Page() {
  return <div>Hello</div>;
}

export async function generateStaticParams() {
  return [
    {
      slug: ["foo"],
    },
    {
      slug: ["bar"],
    },
    {
      slug: ["baz", "qux"],
    },
  ];
}