import { Button, EditorialHero } from "@/components/content/shared";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "No saved booking",
  "The demonstration does not save bookings. Confirmation appears only at the end of the in-memory flow.",
  "/book/confirmation",
  true,
);
export default function Page() {
  return (
    <EditorialHero
      eyebrow="Demonstration only"
      title="There is no saved appointment."
      introduction="Confirmation appears only when you complete the booking demonstration. Refreshing or leaving clears your progress. No appointment, payment, or message is created."
    >
      <Button href="/book">Explore the booking demo</Button>
    </EditorialHero>
  );
}
