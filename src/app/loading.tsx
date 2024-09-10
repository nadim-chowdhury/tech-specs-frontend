import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="skeleton-container container mx-auto flex flex-col gap-4 lg:gap-6">
      {/* <Skeleton className="w-full h-[20vh] rounded-lg" /> */}
      <Skeleton className="w-full h-screen rounded-lg" />
    </section>
  );
}
