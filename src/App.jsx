
import { useEffect, useState } from 'react'
import Auth from './components/login/Auth'
import { db } from './config/firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { collection, getDocs } from 'firebase/firestore';


function App() {

  const [bookList, setBookList] = useState([]);

  const bookCollectionRef = collection(db, "books");

  useEffect(() => {
    const getBookList = async () => {
      try {
        const data = await getDocs(bookCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(filteredData);
        setBookList(filteredData);
      } catch (err) {
        console.error(err);
      }
    }
    getBookList();

  }, []);


  return (
    <div>
      <Auth />
    </div>
  )
}

export default App
