
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import { flushAnalytics } from "./lib/analytics";

  // Defer PostHog init to after first paint - not needed for FCP/LCP
  const deferCallback = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1));
  deferCallback(() => {
    import("posthog-js").then(({ default: posthog }) => {
      posthog.init("phc_q39ZGuvXLQuwCgCkHZYAeaUlWm5bIhx2XKMCtTdhJ7o", {
        api_host: "https://elephant.n3wth.com",
        ui_host: "https://us.i.posthog.com",
        defaults: "2026-01-30",
        person_profiles: "identified_only",
        capture_pageview: true,
        capture_pageleave: true,
        disable_surveys: true,
        autocapture: false,
      });
      flushAnalytics();
    });
  });

  createRoot(document.getElementById("root")!).render(<App />);
