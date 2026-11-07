import { Job, JobFiltersState, PaginatedResult, WorkplaceType, SeniorityLevel, PortalSource } from "@/lib/types";
import { MOCK_JOBS } from "./mockData";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// Helper to map Supabase database columns to our domain model
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSupabaseRowToJob(row: any): Job {
  const sources = Array.isArray(row.sources) && row.sources.length > 0
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? row.sources.map((s: any) => ({
        name: s.source ? s.source.charAt(0).toUpperCase() + s.source.slice(1) : "Portal",
        url: s.url || "#",
        portal_type: (s.source || "other").toLowerCase() as PortalSource,
        external_id: s.external_id ? String(s.external_id) : undefined,
        published_at: s.first_seen_at || row.first_seen_at,
      }))
    : [
        {
          name: "Web Oficial",
          url: row.company_url || "#",
          portal_type: "other" as PortalSource,
        },
      ];

  const technologies = Array.isArray(row.technologies)
    ? row.technologies
    : [];

  const requirements = Array.isArray(row.requirements) && row.requirements.length > 0
    ? row.requirements
    : [
        "Experiencia en el área y proactividad.",
        "Excelentes habilidades de comunicación y trabajo en equipo.",
        "Capacidad de resolución de problemas.",
      ];

  const responsibilities = Array.isArray(row.responsibilities) && row.responsibilities.length > 0
    ? row.responsibilities
    : [
        "Diseñar, implementar y dar seguimiento a las actividades del puesto.",
        "Colaborar activamente con las distintas áreas y equipos de trabajo.",
        "Garantizar la calidad y cumplimiento de estándares del proyecto.",
      ];

  const benefits = Array.isArray(row.benefits) && row.benefits.length > 0
    ? row.benefits
    : [
        "Modalidad de trabajo adaptable con excelente clima laboral.",
        "Oportunidades continuas de aprendizaje y desarrollo profesional.",
        "Compensación competitiva acorde al mercado.",
      ];

  return {
    id: String(row.id),
    title: row.title || "Sin título especificado",
    company_name: row.company || row.company_name || "Empresa Confidencial",
    company_logo: row.company_logo || row.company_logo_url || null,
    location: row.location || (row.is_remote ? "Remoto" : "Presencial"),
    city: row.city || null,
    country: row.candidate_required_location || row.country || null,
    is_remote: Boolean(row.is_remote),
    workplace_type: (row.workplace_type as WorkplaceType) || (row.is_remote ? "remote" : "on_site"),
    seniority_level: (row.seniority_level as SeniorityLevel) || "mid",
    salary_min: typeof row.salary_min === "number" ? row.salary_min : null,
    salary_max: typeof row.salary_max === "number" ? row.salary_max : null,
    salary_currency: row.salary_currency || "USD",
    salary_period: row.salary_period || "monthly",
    technologies,
    description: row.description_text || row.description_html || row.description || "Descripción de la vacante no especificada.",
    requirements,
    responsibilities,
    benefits,
    status: row.status || "active",
    sources,
    published_at: row.first_seen_at || row.publication_date || row.created_at || new Date().toISOString(),
    created_at: row.created_at || row.first_seen_at || new Date().toISOString(),
  };
}

export async function getJobs(filters: JobFiltersState): Promise<PaginatedResult<Job>> {
  const {
    query = "",
    location = "",
    workplaceType = "all",
    seniority = "all",
    technology = "all",
    sortBy = "recent",
    page = 1,
    pageSize = 10,
  } = filters;

  try {
    const supabase = createServerSupabaseClient();
    if (supabase) {
      let req = supabase
        .from("jobs")
        .select("*", { count: "exact" })
        .eq("status", "active");

      // Search across title, company name, and description_text
      if (query.trim()) {
        const cleanQ = query.trim();
        req = req.or(
          `title.ilike.%${cleanQ}%,company.ilike.%${cleanQ}%,description_text.ilike.%${cleanQ}%`
        );
      }

      if (location.trim()) {
        req = req.ilike("location", `%${location.trim()}%`);
      }

      if (workplaceType && workplaceType !== "all") {
        req = req.eq("workplace_type", workplaceType);
      }

      if (seniority && seniority !== "all") {
        req = req.eq("seniority_level", seniority);
      }

      if (technology && technology !== "all") {
        req = req.contains("technologies", [technology.toLowerCase()]);
      }

      if (sortBy === "salary") {
        req = req.order("salary_max", { ascending: false, nullsFirst: false });
      } else {
        // first_seen_at is the timestamp column in Supabase
        req = req.order("first_seen_at", { ascending: false });
      }

      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      const { data, count, error } = await req.range(from, to);

      if (!error && data && data.length > 0) {
        return {
          data: data.map(mapSupabaseRowToJob),
          total: count || data.length,
          page,
          pageSize,
          totalPages: Math.ceil((count || data.length) / pageSize),
        };
      }
      if (error) {
        console.warn("Supabase query error:", error.message);
      }
    }
  } catch (err) {
    console.warn("Supabase unreachable, using fallback:", err);
  }

  // Fallback to local mock data if offline or no DB results
  let filtered = [...MOCK_JOBS].filter((job) => job.status === "active");

  const cleanQuery = query.toLowerCase().trim();
  if (cleanQuery) {
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(cleanQuery) ||
        job.company_name.toLowerCase().includes(cleanQuery) ||
        job.description.toLowerCase().includes(cleanQuery) ||
        job.technologies.some((t) => t.toLowerCase().includes(cleanQuery))
    );
  }

  const cleanLocation = location.toLowerCase().trim();
  if (cleanLocation) {
    filtered = filtered.filter((job) =>
      job.location.toLowerCase().includes(cleanLocation)
    );
  }

  if (workplaceType && workplaceType !== "all") {
    filtered = filtered.filter((job) => job.workplace_type === workplaceType);
  }

  if (seniority && seniority !== "all") {
    filtered = filtered.filter((job) => job.seniority_level === seniority);
  }

  if (technology && technology !== "all") {
    filtered = filtered.filter((job) =>
      job.technologies.map((t) => t.toLowerCase()).includes(technology.toLowerCase())
    );
  }

  if (sortBy === "salary") {
    filtered.sort((a, b) => (b.salary_max || 0) - (a.salary_max || 0));
  } else {
    filtered.sort(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
  }

  const total = filtered.length;
  const startIndex = (page - 1) * pageSize;
  const paginatedData = filtered.slice(startIndex, startIndex + pageSize);

  return {
    data: paginatedData,
    total,
    page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}

export async function getJobById(id: string): Promise<Job | null> {
  try {
    const supabase = createServerSupabaseClient();
    if (supabase) {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single();
      if (!error && data) {
        return mapSupabaseRowToJob(data);
      }
    }
  } catch (err) {
    console.warn("Supabase lookup error:", err);
  }

  const match = MOCK_JOBS.find((j) => j.id === id);
  return match || null;
}
