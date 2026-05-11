const STORAGE_KEY = "hireedge-saved-jobs";

export type SavedJobStored = {
  id: number;
  title: string;
  company: string;
  city: string;
  salary: string;
  type: string;
  savedAt: string;
};

function parseList(raw: string | null): SavedJobStored[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (j): j is SavedJobStored =>
        !!j &&
        typeof j === "object" &&
        typeof (j as SavedJobStored).id === "number" &&
        typeof (j as SavedJobStored).title === "string" &&
        typeof (j as SavedJobStored).savedAt === "string"
    );
  } catch {
    return [];
  }
}

export function readSavedJobs(): SavedJobStored[] {
  if (typeof window === "undefined") return [];
  return parseList(localStorage.getItem(STORAGE_KEY));
}

export function writeSavedJobs(jobs: SavedJobStored[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}

/** @returns true if job is now saved, false if removed */
export function toggleSaveJob(
  job: Pick<SavedJobStored, "id" | "title" | "company" | "city" | "salary" | "type">
): boolean {
  const list = readSavedJobs();
  const i = list.findIndex((j) => j.id === job.id);
  if (i >= 0) {
    list.splice(i, 1);
    writeSavedJobs(list);
    return false;
  }
  list.unshift({
    ...job,
    savedAt: new Date().toISOString(),
  });
  writeSavedJobs(list);
  return true;
}

export function removeSavedJob(id: number) {
  writeSavedJobs(readSavedJobs().filter((j) => j.id !== id));
}

export function isJobSavedId(id: number): boolean {
  return readSavedJobs().some((j) => j.id === id);
}
