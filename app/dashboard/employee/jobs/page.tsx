"use client";

import DashboardLayout from "@/components/DashboardLayout";
import { JobsBrowseMain } from "@/app/jobs/components/JobsBrowseMain";

export default function EmployeeBrowseJobsPage() {
  return (
    <DashboardLayout role="employee" title="Browse Jobs">
      {/* Break out of main padding so the jobs page matches /jobs (full hero + wave + stats). */}
      <div className="-m-6">
        <JobsBrowseMain resumeBuilderHref="/dashboard/employee/resume" isLoggedIn={true} />
      </div>
    </DashboardLayout>
  );
}
