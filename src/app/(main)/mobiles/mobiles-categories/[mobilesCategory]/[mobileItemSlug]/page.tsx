"use client";

import MobileDeviceDetails from "@/components/mobiles/MobileDeviceDetails";
import { apiFetch } from "@/lib/api-client";

export default async function MobileItemSlugPage({ params }: any) {
  const res = await apiFetch(`/api/mobile/slug/${params.mobileItemSlug}`, {
    method: "GET",
  });
  console.log("res:", res);

  return (
    <section className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="bg-slate-100 border rounded-lg hidden lg:block"></div>

      <div className="lg:col-span-3">
        <MobileDeviceDetails device={res} />
      </div>
    </section>
  );
}
