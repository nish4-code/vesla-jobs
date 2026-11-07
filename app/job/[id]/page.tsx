import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getJobById } from "@/services/jobService";
import { Navbar } from "@/components/layout/Navbar";
import { JobDetail } from "@/components/jobs/JobDetail";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { id: "job-1" },
    { id: "job-2" },
    { id: "job-3" },
    { id: "job-4" },
    { id: "job-5" },
    { id: "job-6" },
    { id: "job-7" },
    { id: "job-8" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return {
      title: "Vacante no encontrada | Vesla Jobs",
    };
  }

  return {
    title: `${job.title} en ${job.company_name} | Vesla Jobs`,
    description: `Aplica ahora a la posición de ${job.title} en ${job.company_name}. Modalidad: ${job.location}.`,
  };
}

async function JobContainer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return <JobDetail job={job} />;
}

export default function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f2ef]">
      <Suspense fallback={<div className="h-16 bg-white border-b border-slate-200" />}>
        <Navbar />
      </Suspense>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-6">
        {/* Back navigation */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0a66c2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todas las ofertas</span>
          </Link>
        </div>

        {/* Full Job Detail with Suspense */}
        <Suspense
          fallback={
            <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-32 w-full" />
            </div>
          }
        >
          <JobContainer params={params} />
        </Suspense>
      </main>
    </div>
  );
}
