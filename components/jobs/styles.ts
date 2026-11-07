export const jobCardStyles = {
  cardBase: "group relative rounded-lg border p-3.5 transition-all duration-150 cursor-pointer text-left bg-white select-none",
  cardInactive: "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50",
  cardActive: "border-[#0a66c2] border-l-4 border-l-[#0a66c2] bg-blue-50/20 shadow-2xs",
  header: "flex items-start justify-between gap-3 mb-1.5",
  companyInfo: "flex items-start gap-3 min-w-0 flex-1",
  avatar: "w-10 h-10 rounded-md flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200 bg-slate-50 text-slate-700",
  titleWrapper: "min-w-0 flex-1",
  title: "text-sm font-semibold text-slate-900 group-hover:text-[#0a66c2] transition-colors line-clamp-1 leading-snug",
  companyName: "text-xs font-medium text-slate-600 line-clamp-1 mt-0.5",
  saveButton: "text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition-colors shrink-0",
  savedIcon: "text-[#0a66c2] fill-[#0a66c2]",
  metaLine: "flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mb-2",
  footerRow: "flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-400",
  sourcesBadges: "flex items-center gap-1.5",
};

export const jobListStyles = {
  container: "flex flex-col h-full",
  header: "flex items-center justify-between pb-2.5 text-xs text-slate-500 font-medium px-1 shrink-0",
  cardsContainer: "space-y-2.5",
  emptyState: "rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center my-4",
  emptyIcon: "w-10 h-10 mx-auto text-slate-300 mb-2",
  emptyTitle: "text-sm font-semibold text-slate-800 mb-1",
  emptyDescription: "text-xs text-slate-500 max-w-sm mx-auto mb-3",
};

export const jobDetailStyles = {
  container: "rounded-lg border border-slate-200 bg-white shadow-xs flex flex-col h-full overflow-hidden",
  scrollArea: "flex-1 overflow-y-auto p-5 sm:p-6 space-y-5",
  header: "space-y-3",
  title: "text-xl font-bold text-slate-900 leading-tight",
  companyRow: "flex flex-wrap items-center gap-2 text-xs text-slate-600",
  companyName: "font-semibold text-slate-900 text-sm",
  actionsRow: "flex flex-wrap items-center gap-2.5 pt-1",
  highlightsGrid: "grid grid-cols-3 gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs",
  highlightItem: "space-y-0.5",
  highlightLabel: "text-[11px] text-slate-500 font-medium",
  highlightValue: "font-semibold text-slate-900",
  sectionTitle: "text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5",
  prose: "text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line",
  list: "space-y-2 text-xs sm:text-sm text-slate-700 mt-2",
  listItem: "flex items-start gap-2",
  techGrid: "flex flex-wrap gap-1.5",
  sourcesFooter: "p-3 rounded-md bg-slate-50 border border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2",
};

export const jobFiltersStyles = {
  toolbar: "bg-white border-b border-slate-200 py-2 px-4 sm:px-6 lg:px-8 shadow-2xs",
  wrapper: "w-full flex flex-wrap items-center justify-between gap-2.5",
  controlsGroup: "flex flex-wrap items-center gap-2",
  clearButton: "inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer",
};

export const paginationStyles = {
  container: "flex items-center justify-between px-1 py-2 border-t border-slate-200 text-xs text-slate-500",
  stats: "text-[11px] text-slate-500",
  controls: "flex items-center gap-1",
  pageButton: "h-7 w-7 rounded-md text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer",
  activePage: "bg-[#0a66c2] text-white shadow-2xs",
  inactivePage: "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100",
};

