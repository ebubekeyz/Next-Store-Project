
async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section>
     <h1>Single</h1>
    </section>
  );
}
export default SingleProductPage;
