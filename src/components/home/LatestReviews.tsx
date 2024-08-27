import { latestReviews } from "@/utils/latest-reviews";
import Image from "next/image";
import Link from "next/link";

export default function LatestReviews() {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Latest Reviews
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {latestReviews?.map((review: any) => (
            <div
              key={review.id}
              className="bg-slate-50 p-6 rounded-lg transition-all duration-500 hover:bg-slate-100 flex flex-col justify-between"
            >
              <Image
                src={review.img}
                alt=""
                width={1280}
                height={720}
                className="h-32 object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold text-slate-800">
                {review.productName}
              </h3>
              <p className="text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="text-slate-600">{review.summary}</p>
              <Link
                href={`/reviews/${review.id}`}
                className="mt-4 inline-block text-primary font-semibold hover:underline"
              >
                Read Full Review
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
