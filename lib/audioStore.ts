"use client";

/**
 * Recorded-audio persistence (the user's own voice from the Speak screen).
 *
 * localStorage can't hold Blobs, so recordings live in IndexedDB keyed by a
 * stable id (we reuse the saved Thought id). Every call degrades gracefully:
 * if IndexedDB is unavailable or blocked, these resolve to no-ops / null and
 * the rest of the app keeps working without replay.
 */

const DB_NAME = "pues";
const STORE = "recordings";
const VERSION = 1;

function isSupported(): boolean {
  return typeof window !== "undefined" && "indexedDB" in window;
}

let dbPromise: Promise<IDBDatabase | null> | null = null;

function openDb(): Promise<IDBDatabase | null> {
  if (!isSupported()) return Promise.resolve(null);
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
  return dbPromise;
}

export async function putRecording(id: string, blob: Blob): Promise<void> {
  const db = await openDb();
  if (!db) return;
  await new Promise<void>((resolve) => {
    try {
      const tx = db.transaction(STORE, "readwrite");
      tx.objectStore(STORE).put(blob, id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
      tx.onabort = () => resolve();
    } catch {
      resolve();
    }
  });
}

export async function getRecording(id: string): Promise<Blob | null> {
  const db = await openDb();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readonly");
      const req = tx.objectStore(STORE).get(id);
      req.onsuccess = () => resolve((req.result as Blob) ?? null);
      req.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/** Returns an object URL for the recording (caller revokes when done), or null. */
export async function getRecordingUrl(id: string): Promise<string | null> {
  const blob = await getRecording(id);
  return blob ? URL.createObjectURL(blob) : null;
}
