"use client";
import { createNewDocument } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

function NewDocumentButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleCreateNewDocument = () => {
    startTransition(async () => {
      // const { docId } = await createNewDocument();
      // router.push(`/doc/${docId}`);

      const response = await createNewDocument();
      // Check for an error and display an alert if it exists
      if (response.error) {
        alert(response.error);
      } else {
        // Proceed with the navigation if no error
        const { docId } = response;
        router.push(`/doc/${docId}`);
      }
    });
  };
  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>
      {isPending ? "Creating..." : "New Document"}
    </Button>
  );
}
export default NewDocumentButton;
