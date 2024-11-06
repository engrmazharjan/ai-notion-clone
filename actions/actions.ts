"use server"

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  auth.protect();
  const { sessionClaims } = await auth();

  // Check if the session is authenticated
  if (!sessionClaims) {
    return { error: "Unauthorized access. Please sign in to continue." }
  }

  const docCollectionRef = adminDb.collection("documents");
  const docRef = await docCollectionRef.add({
    title: "New Doc"
  });

  if (sessionClaims) {
    await adminDb.collection("users").doc(sessionClaims.email!).collection("rooms").doc(docRef.id).set({
      userId: sessionClaims?.email,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });
  }

  return { docId: docRef.id }
}
