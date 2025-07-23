import { SERVICES } from "@/utility/services";
import { FloorPage } from "@/components/pages/floor";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export default function ServicePage({ params }: PageProps) {
  // Find the service by slug
  const service = SERVICES.find((s) => s.slug === params.slug);
  console.log(service);

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
