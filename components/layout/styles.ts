export const navbarStyles = {
  header: "sticky top-0 z-40 w-full bg-white border-b border-slate-200",
  container: "w-full px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4",
  leftSection: "flex items-center gap-6 flex-1 min-w-0",
  logoLink: "flex items-center gap-2.5 shrink-0 cursor-pointer select-none",
  logoIcon: "w-8 h-8 rounded-md bg-[#0a66c2] text-white flex items-center justify-center font-bold text-lg shadow-2xs",
  logoTitle: "text-base font-bold tracking-tight text-slate-900 leading-none",
  searchSection: "flex-1 max-w-2xl hidden md:block",
  rightSection: "flex items-center gap-3 shrink-0",
  savedLink: "inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0a66c2] px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors",
};

export const searchBarStyles = {
  form: "flex items-center w-full bg-slate-100 rounded-md border border-slate-200 focus-within:border-[#0a66c2] focus-within:ring-1 focus-within:ring-[#0a66c2] transition-all p-0.5",
  inputWrapper: "relative flex-1 flex items-center min-w-0",
  inputIcon: "pointer-events-none absolute left-3 text-slate-400 w-3.5 h-3.5 shrink-0",
  inputField: "w-full bg-transparent pl-8 pr-2 py-1.5 text-xs text-slate-900 placeholder:text-slate-500 focus:outline-none",
  divider: "w-px h-5 bg-slate-300 mx-1 shrink-0",
  submitButton: "shrink-0 mr-0.5",
  clearButton: "absolute right-2 text-slate-400 hover:text-slate-600 p-0.5 rounded",
};
