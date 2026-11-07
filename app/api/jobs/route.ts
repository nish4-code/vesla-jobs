import { NextRequest, NextResponse } from "next/server";
import { getJobs } from "@/services/jobService";
import { JobFiltersState, WorkplaceType, SeniorityLevel, SortOption } from "@/lib/types";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const filters: JobFiltersState = {
    query: searchParams.get("query") || "",
    location: searchParams.get("location") || "",
    workplaceType: (searchParams.get("workplaceType") as WorkplaceType) || "all",
    seniority: (searchParams.get("seniority") as SeniorityLevel) || "all",
    technology: searchParams.get("technology") || "all",
    sortBy: (searchParams.get("sortBy") as SortOption) || "recent",
    page: parseInt(searchParams.get("page") || "1", 10),
    pageSize: parseInt(searchParams.get("pageSize") || "10", 10),
  };

  const result = await getJobs(filters);
  return NextResponse.json(result);
}

