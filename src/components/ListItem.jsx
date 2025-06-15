import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase';
import Card from './Card';

const ListItem = () => {
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
    <div className='container mt-5'>
      {
        bookList.map((book, index) => (
          <Card key={index} item={book} />
        ))
      }
    </div>
  )
}

export default ListItem
