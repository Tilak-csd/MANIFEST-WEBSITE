import React, { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';

const VercelAnalytics_Guide = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExample = (language, code, id) => (
    <div className="relative bg-slate-900 rounded-lg overflow-hidden mb-4">
      <div className="flex justify-between items-center bg-slate-800 px-4 py-2">
        <span className="text-sm text-slate-400">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          {copiedCode === id ? (
            <>
              <Check size={16} />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-slate-100 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-900 text-white py-12 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Getting Started with Vercel Web Analytics</h1>
          <p className="text-lg text-blue-100">
            Learn how to enable Vercel Web Analytics on your project and start tracking your users and page views.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-12 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-slate-700 mb-6">
            This guide will help you get started with using Vercel Web Analytics on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-slate-800"><strong>Select your framework</strong> to view instructions on using Vercel Web Analytics in your project.</p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Prerequisites</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">A Vercel account. If you don't have one, you can <a href="https://vercel.com/signup" className="text-blue-600 hover:underline">sign up for free</a>.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">A Vercel project. If you don't have one, you can <a href="https://vercel.com/new" className="text-blue-600 hover:underline">create a new project</a>.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">The Vercel CLI installed. If you don't have it, you can install it using the following command:</span>
            </li>
          </ul>
          
          <div className="mt-6 space-y-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">Install Vercel CLI</h4>
              {codeExample('bash', 'pnpm i vercel', 'install-vercel-pnpm')}
              {codeExample('bash', 'yarn add vercel', 'install-vercel-yarn')}
              {codeExample('bash', 'npm install vercel', 'install-vercel-npm')}
              {codeExample('bash', 'bun add vercel', 'install-vercel-bun')}
            </div>
          </div>
        </section>

        {/* Enable Web Analytics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Enable Web Analytics in Vercel</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
            <p className="text-slate-700 mb-3">
              On the <a href="https://vercel.com/dashboard" className="text-blue-600 hover:underline">Vercel dashboard</a>, select your Project and then click the <strong>Analytics</strong> tab and click <strong>Enable</strong> from the dialog.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm text-yellow-800">
                <strong>💡 Note:</strong> Enabling Web Analytics will add new routes (scoped at <code className="bg-yellow-100 px-2 py-1 rounded">/_vercel/insights/*</code>) after your next deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Add Package */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Add @vercel/analytics to Your Project</h2>
          <p className="text-slate-700 mb-6">
            Using the package manager of your choice, add the <code className="bg-slate-100 px-2 py-1 rounded">@vercel/analytics</code> package to your project:
          </p>
          
          <div className="space-y-4 border rounded-lg p-6 bg-slate-50">
            {codeExample('bash (pnpm)', 'pnpm i @vercel/analytics', 'add-package-pnpm')}
            {codeExample('bash (yarn)', 'yarn add @vercel/analytics', 'add-package-yarn')}
            {codeExample('bash (npm)', 'npm install @vercel/analytics', 'add-package-npm')}
            {codeExample('bash (bun)', 'bun add @vercel/analytics', 'add-package-bun')}
          </div>
        </section>

        {/* Framework-Specific Instructions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Add the Analytics Component to Your App</h2>
          
          {/* Next.js (Pages) */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('nextjs-pages')}
              className="w-full bg-slate-100 hover:bg-slate-200 px-6 py-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-slate-800">Next.js (Pages Directory)</h3>
              <ChevronDown size={20} className={`transform transition-transform ${expandedSections['nextjs-pages'] ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections['nextjs-pages'] && (
              <div className="p-6 bg-white border-t">
                <p className="text-slate-700 mb-4">
                  The <code className="bg-slate-100 px-2 py-1 rounded">Analytics</code> component is a wrapper around the tracking script, offering more seamless integration with Next.js, including route support.
                </p>
                <p className="text-slate-700 mb-4">If you are using the <code className="bg-slate-100 px-2 py-1 rounded">pages</code> directory, add the following code to your main app file:</p>
                {codeExample('tsx', `import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;`, 'nextjs-pages-tsx')}
                {codeExample('jsx', `import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;`, 'nextjs-pages-jsx')}
              </div>
            )}
          </div>

          {/* Next.js (App) */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('nextjs-app')}
              className="w-full bg-slate-100 hover:bg-slate-200 px-6 py-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-slate-800">Next.js (App Directory)</h3>
              <ChevronDown size={20} className={`transform transition-transform ${expandedSections['nextjs-app'] ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections['nextjs-app'] && (
              <div className="p-6 bg-white border-t">
                <p className="text-slate-700 mb-4">
                  The <code className="bg-slate-100 px-2 py-1 rounded">Analytics</code> component is a wrapper around the tracking script, offering more seamless integration with Next.js, including route support.
                </p>
                <p className="text-slate-700 mb-4">Add the following code to the root layout:</p>
                {codeExample('tsx', `import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`, 'nextjs-app-tsx')}
                {codeExample('jsx', `import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`, 'nextjs-app-jsx')}
              </div>
            )}
          </div>

          {/* React */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('react')}
              className="w-full bg-slate-100 hover:bg-slate-200 px-6 py-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-slate-800">React</h3>
              <ChevronDown size={20} className={`transform transition-transform ${expandedSections['react'] ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections['react'] && (
              <div className="p-6 bg-white border-t">
                <p className="text-slate-700 mb-4">
                  The <code className="bg-slate-100 px-2 py-1 rounded">Analytics</code> component is a wrapper around the tracking script, offering more seamless integration with React.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm text-blue-900"><strong>💡 Note:</strong> When using the plain React implementation, there is no route support.</p>
                </div>
                <p className="text-slate-700 mb-4">Add the following code to the main app file:</p>
                {codeExample('tsx', `import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}`, 'react-tsx')}
                {codeExample('jsx', `import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      {/* ... */}
      <Analytics />
    </div>
  );
}`, 'react-jsx')}
              </div>
            )}
          </div>

          {/* Vue */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('vue')}
              className="w-full bg-slate-100 hover:bg-slate-200 px-6 py-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-slate-800">Vue</h3>
              <ChevronDown size={20} className={`transform transition-transform ${expandedSections['vue'] ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections['vue'] && (
              <div className="p-6 bg-white border-t">
                <p className="text-slate-700 mb-4">
                  The <code className="bg-slate-100 px-2 py-1 rounded">Analytics</code> component is a wrapper around the tracking script, offering more seamless integration with Vue.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm text-blue-900"><strong>💡 Note:</strong> Route support is automatically enabled if you're using <code className="bg-blue-100 px-2 py-1 rounded">vue-router</code>.</p>
                </div>
                <p className="text-slate-700 mb-4">Add the following code to your main component:</p>
                {codeExample('vue', `<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
</script>

<template>
  <Analytics />
  <!-- your content -->
</template>`, 'vue-ts')}
              </div>
            )}
          </div>

          {/* SvelteKit */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('sveltekit')}
              className="w-full bg-slate-100 hover:bg-slate-200 px-6 py-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-slate-800">SvelteKit</h3>
              <ChevronDown size={20} className={`transform transition-transform ${expandedSections['sveltekit'] ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections['sveltekit'] && (
              <div className="p-6 bg-white border-t">
                <p className="text-slate-700 mb-4">
                  The <code className="bg-slate-100 px-2 py-1 rounded">injectAnalytics</code> function is a wrapper around the tracking script, offering more seamless integration with SvelteKit.js, including route support.
                </p>
                <p className="text-slate-700 mb-4">Add the following code to the main layout:</p>
                {codeExample('typescript', `import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });`, 'sveltekit-ts')}
                {codeExample('javascript', `import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });`, 'sveltekit-js')}
              </div>
            )}
          </div>

          {/* Astro */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('astro')}
              className="w-full bg-slate-100 hover:bg-slate-200 px-6 py-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-slate-800">Astro</h3>
              <ChevronDown size={20} className={`transform transition-transform ${expandedSections['astro'] ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections['astro'] && (
              <div className="p-6 bg-white border-t">
                <p className="text-slate-700 mb-4">
                  The <code className="bg-slate-100 px-2 py-1 rounded">Analytics</code> component is a wrapper around the tracking script, offering more seamless integration with Astro, including route support.
                </p>
                <p className="text-slate-700 mb-4">Add the following code to your base layout:</p>
                {codeExample('astro', `---
import Analytics from '@vercel/analytics/astro';
{/* ... */}
---

<html lang="en">
	<head>
      <meta charset="utf-8" />
      <!-- ... -->
      <Analytics />
	</head>
	<body>
		<slot />
    </body>
</html>`, 'astro-component')}
              </div>
            )}
          </div>

          {/* Other Frameworks */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('other')}
              className="w-full bg-slate-100 hover:bg-slate-200 px-6 py-4 flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-slate-800">Other Frameworks</h3>
              <ChevronDown size={20} className={`transform transition-transform ${expandedSections['other'] ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections['other'] && (
              <div className="p-6 bg-white border-t">
                <p className="text-slate-700 mb-4">
                  Import the <code className="bg-slate-100 px-2 py-1 rounded">inject</code> function from the package, which will add the tracking script to your app. <strong>This should only be called once in your app, and must run in the client</strong>.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm text-blue-900"><strong>💡 Note:</strong> There is no route support with the <code className="bg-blue-100 px-2 py-1 rounded">inject</code> function.</p>
                </div>
                <p className="text-slate-700 mb-4">Add the following code to your main app file:</p>
                {codeExample('typescript', `import { inject } from "@vercel/analytics";

inject();`, 'other-ts')}
                {codeExample('javascript', `import { inject } from "@vercel/analytics";

inject();`, 'other-js')}
              </div>
            )}
          </div>
        </section>

        {/* Deploy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Deploy Your App to Vercel</h2>
          <p className="text-slate-700 mb-4">Deploy your app using the following command:</p>
          {codeExample('bash', 'vercel deploy', 'deploy-command')}
          <p className="text-slate-700 mb-4">
            If you haven't already, we also recommend <a href="https://vercel.com/docs/git" className="text-blue-600 hover:underline">connecting your project's Git repository</a>, which will enable Vercel to deploy your latest commits to main without terminal commands.
          </p>
          <p className="text-slate-700 mb-4">
            Once your app is deployed, it will start tracking visitors and page views.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-sm text-blue-900"><strong>💡 Note:</strong> If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from <code className="bg-blue-100 px-2 py-1 rounded">/_vercel/insights/view</code> when you visit any page.</p>
          </div>
        </section>

        {/* View Data */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">View Your Data in the Dashboard</h2>
          <p className="text-slate-700 mb-4">
            Once your app is deployed, and users have visited your site, you can view your data in the dashboard.
          </p>
          <p className="text-slate-700 mb-4">
            To do so, go to your <a href="https://vercel.com/dashboard" className="text-blue-600 hover:underline">dashboard</a>, select your project, and click the <strong>Analytics</strong> tab.
          </p>
          <p className="text-slate-700 mb-4">
            After a few days of visitors, you'll be able to start exploring your data by viewing and filtering the panels.
          </p>
          <p className="text-slate-700">
            Users on Pro and Enterprise plans can also add <a href="https://vercel.com/docs/analytics/custom-events" className="text-blue-600 hover:underline">custom events</a> to their data to track user interactions such as button clicks, form submissions, or purchases.
          </p>
        </section>

        {/* Next Steps */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Next Steps</h2>
          <p className="text-slate-700 mb-6">Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:</p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">Learn how to use the <a href="https://vercel.com/docs/analytics/package" className="text-blue-600 hover:underline">@vercel/analytics package</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">Learn how to set <a href="https://vercel.com/docs/analytics/custom-events" className="text-blue-600 hover:underline">custom events</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">Learn about <a href="https://vercel.com/docs/analytics/filtering" className="text-blue-600 hover:underline">filtering data</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">Read about <a href="https://vercel.com/docs/analytics/privacy-policy" className="text-blue-600 hover:underline">privacy and compliance</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700">Explore <a href="https://vercel.com/docs/analytics/limits-and-pricing" className="text-blue-600 hover:underline">pricing</a></span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-slate-700"><a href="https://vercel.com/docs/analytics/troubleshooting" className="text-blue-600 hover:underline">Troubleshooting</a></span>
            </li>
          </ul>
        </section>

        {/* Privacy Notice */}
        <section className="text-center text-slate-600 text-sm mb-8">
          <p>
            Learn more about how Vercel supports <a href="https://vercel.com/docs/analytics/privacy-policy" className="text-blue-600 hover:underline">privacy and data compliance standards</a> with Vercel Web Analytics.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VercelAnalytics_Guide;
