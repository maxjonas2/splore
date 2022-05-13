import {useState, useEffect} from 'react';
import {getDatabase, ref, onValue} from 'firebase/database';
import firebaseConfig from '../config/firebaseConfig';
import {initializeApp} from 'firebase/app'

export const firebaseApp = initializeApp(firebaseConfig);

const useFirebase = (path = "draws/draw") => {

    const [snapshot, setSnapshot] = useState({});

    useEffect(() => {
        const db = getDatabase(firebaseApp);
        const drawDatabaseRef = ref(db, path);
        onValue(drawDatabaseRef, snapshot => {
          setSnapshot(snapshot.val());
        });
    }, [path]);

    return snapshot;
}

export default useFirebase;