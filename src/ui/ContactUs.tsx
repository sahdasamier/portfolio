import { cn } from "@/lib/utils";

export function ContactUs() {
  return (
    <div className="min-h-screen bg-slate-50/80 dark:bg-slate-900/30 transition-colors duration-300 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white">Contact Me</h1>
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 transition-colors duration-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 dark:focus:ring-indigo-400 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 