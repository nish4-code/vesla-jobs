import { WorkplaceType, SeniorityLevel, PortalSource } from "@/lib/types";

export function formatSalary(
  min?: number | null,
  max?: number | null,
  currency?: string | null,
  period?: 'hourly' | 'monthly' | 'yearly' | null
): string {
  if (!min && !max) return "Salario no especificado";

  // Infer currency if not provided (e.g. Colombian Peso if numbers are in the millions)
  let curr = currency;
  if (!curr) {
    if ((min && min > 50000) || (max && max > 50000)) {
      curr = "COP";
    } else {
      curr = "USD";
    }
  }

  const per = period === "yearly" ? "/año" : period === "hourly" ? "/hora" : "/mes";

  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: curr,
    maximumFractionDigits: 0,
  });

  if (min && max) {
    if (min === max) {
      return `${formatter.format(min)} ${per}`;
    }
    return `${formatter.format(min)} - ${formatter.format(max)} ${per}`;
  }
  if (min) {
    return `Desde ${formatter.format(min)} ${per}`;
  }
  if (max) {
    return `Hasta ${formatter.format(max)} ${per}`;
  }
  return "A convenir";
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (isNaN(diffInSeconds) || diffInSeconds < 0) return "Recientemente";

  if (diffInSeconds < 60) return "Hace un momento";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `Hace ${diffInMinutes} ${diffInMinutes === 1 ? "minuto" : "minutos"}`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `Hace ${diffInHours} ${diffInHours === 1 ? "hora" : "horas"}`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `Hace ${diffInDays} ${diffInDays === 1 ? "día" : "días"}`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `Hace ${diffInWeeks} ${diffInWeeks === 1 ? "semana" : "semanas"}`;

  const diffInMonths = Math.floor(diffInDays / 30);
  return `Hace ${diffInMonths} ${diffInMonths === 1 ? "mes" : "meses"}`;
}

export function getWorkplaceLabel(type: WorkplaceType | string): string {
  switch (type) {
    case "remote":
      return "Remoto";
    case "hybrid":
      return "Híbrido";
    case "on_site":
      return "Presencial";
    default:
      return "Presencial";
  }
}

export function getSeniorityLabel(level: SeniorityLevel): string {
  switch (level) {
    case "trainee":
      return "Practicante / Trainee";
    case "junior":
      return "Junior";
    case "mid":
      return "Semi-Senior";
    case "senior":
      return "Senior";
    case "lead":
      return "Lead / Principal";
    default:
      return level;
  }
}

const AVATAR_BG_COLORS = [
  "bg-blue-100 text-blue-800 border-blue-200",
  "bg-emerald-100 text-emerald-800 border-emerald-200",
  "bg-indigo-100 text-indigo-800 border-indigo-200",
  "bg-violet-100 text-violet-800 border-violet-200",
  "bg-amber-100 text-amber-800 border-amber-200",
  "bg-rose-100 text-rose-800 border-rose-200",
  "bg-cyan-100 text-cyan-800 border-cyan-200",
  "bg-teal-100 text-teal-800 border-teal-200",
];

export function getCompanyInitials(name: string): string {
  if (!name) return "EM";
  // Remove review ratings like "4,6" or "4.6" from scraped company names
  const cleanName = name.replace(/^[0-9]+[.,][0-9]+\s*/, "").trim();
  const words = cleanName.split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function getCleanCompanyName(name: string): string {
  if (!name) return "Empresa Confidencial";
  return name.replace(/^[0-9]+[.,][0-9]+\s*/, "").trim();
}

export function getCompanyAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_BG_COLORS.length;
  return AVATAR_BG_COLORS[index];
}

export interface PortalMeta {
  displayName: string;
  badgeStyle: string;
}

export function getPortalMeta(portal: PortalSource): PortalMeta {
  switch (portal) {
    case "getonbrd":
      return {
        displayName: "GetOnBrd",
        badgeStyle: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100",
      };
    case "computrabajo":
      return {
        displayName: "CompuTrabajo",
        badgeStyle: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
      };
    case "remotive":
      return {
        displayName: "Remotive",
        badgeStyle: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
      };
    case "linkedin":
      return {
        displayName: "LinkedIn",
        badgeStyle: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100",
      };
    case "torre":
      return {
        displayName: "Torre",
        badgeStyle: "bg-yellow-50 text-yellow-800 border-yellow-200 hover:bg-yellow-100",
      };
    default:
      return {
        displayName: "Web Oficial",
        badgeStyle: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100",
      };
  }
}
