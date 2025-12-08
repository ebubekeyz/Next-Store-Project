import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";
import { deleteProductAction } from "@/utils/actions";

return (
  <>
    <TableCell className="flex items-center gap-x-2">
      <Link href={`/admin/products/${productId}/edit`}>
        <IconButton actionType="edit"></IconButton>
      </Link>
      <DeleteProduct productId={productId} />
    </TableCell>
  </>
);

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}