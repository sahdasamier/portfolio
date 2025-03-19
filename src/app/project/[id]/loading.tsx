export default function Loading() {
  return (
    <div className="p-8 max-w-7xl mx-auto mt-28 mb-10 dark:bg-[#020617] bg-slate-100 rounded-xl border-[1px] dark:border-slate-500/10 border-slate-500/5">
      {/* Back Button Skeleton */}
      <div className="pb-5">
        <div className="w-24 h-10 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
      </div>

      {/* Image Skeleton */}
      <div className="w-full h-[500px] bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />

      {/* Content Skeleton */}
      <div className="mt-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Title Skeleton */}
          <div className="w-1/3 h-8 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
          
          {/* Buttons Skeleton */}
          <div className="flex gap-4">
            <div className="w-24 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
            <div className="w-24 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Category Skeleton */}
        <div className="mt-6">
          <div className="w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
          
          {/* Description Skeleton */}
          <div className="mt-4 space-y-2">
            <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            <div className="w-5/6 h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            <div className="w-4/6 h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
          </div>
        </div>

        {/* Author Info Skeleton */}
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse" />
          <div>
            <div className="w-32 h-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            <div className="w-24 h-3 bg-slate-200 dark:bg-slate-800 rounded animate-pulse mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
} 