export default function Product({ params }: { params: { productId: string } }) {
  return (
    <>
      <div>Params: {params.productId}</div>
      <div>Product Page</div>
    </>
  );
}
