"use client"

export async function getSessions() {
      const { data: session, isPending } = authClient.useSession();
      return session;
}