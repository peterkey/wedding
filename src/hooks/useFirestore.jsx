import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const useFirestore = (collectionName) => {
  // Renamed 'collection' to 'collectionName'
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(projectFirestore, collectionName), orderBy("createdAt", "desc")); // Use 'collectionName' instead of 'collection'
    const unsub = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collectionName]); // Use 'collectionName' instead of 'collection'

  return { docs };
};

export default useFirestore;
