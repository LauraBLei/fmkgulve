import { SERVICES } from "@/utility/services";
import { FloorPage } from "@/components/pages/floor";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string; locale: string }>; // ✅ Wrapped in Promise
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params; // ✅ Await the params

  // Find the service by slug
  const service = SERVICES.find((s) => s.slug === slug);

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  return <FloorPage service={service} />;
}

// Generate static params for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}
