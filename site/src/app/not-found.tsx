import { EditorialHero, Button } from "@/components/content/shared";
export default function NotFound() {
  return (
    <EditorialHero
      eyebrow="404 · Page not found"
      title="This page is not part of the plan."
      introduction="The address may be outdated or incomplete. Return to the homepage, explore a concern, or compare treatments."
    >
      <div className="flex flex-wrap gap-4">
        <Button href="/">Return home</Button>
        <Button secondary href="/concerns">
          Explore concerns
        </Button>
      </div>
    </EditorialHero>
  );
}
