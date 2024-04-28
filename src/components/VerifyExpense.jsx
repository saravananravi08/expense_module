import React, { useState, useEffect } from 'react';
import Button from './ui/button';

import MyDialog from './ui/modalcomponent';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://127.0.0.1:8000/expense/get_expense')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        return response.json();
      })
      .then(data => {
        setItems(data['data']); 
        // console.log(data['data'])
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
<div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Expense Approvals</h1>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-4 text-center">Name</th>
              <th className="px-6 py-4 text-center">EmployeedID</th>
              <th className="px-6 py-4 text-center">Date</th>
              <th className="px-6 py-4 text-center">Category</th>
              <th className="px-6 py-4 text-center">Amount</th>
              <th className="px-6 py-4 text-center">Description</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
            {items.map((item,index) =>  (<MapFunc key={item?.id} item={item} />))}

          </thead>
          <tbody className="divide-y divide-gray-200">
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;


const parseDate = (datetimeString) => {
    const date = new Date(datetimeString);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

const handleSubmit = (e,item,approve,message) => {
    e.stopPropagation()
    console.log(message,approve)
    if (message === '') {alert("message cannot be empty")}
    else{
        updateExpense(item.id,message,approve)
        window.location.reload();}
}




const updateExpense = async (id,message,approved) => {
    await fetch('http://127.0.0.1:8000/expense/verify_expense', {
    method: 'PUT',
    body: JSON.stringify({
       id:id,
       message:message,
       approved:approved
    }),
    
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
    })
    .catch((err) => {
       console.log(err.message);
    });
    };


const MapFunc = ({item}) => {
    let [isOpen, setIsOpen] = useState(false)
    let [message, setMessage] = useState('')
    let [approve, setApprove] = useState(false)
    const onClose = () => {
        setIsOpen(!isOpen)
        setMessage('')
    }

    const setApproveStatus = (status) => {
        setApprove(status)
        onClose()
    }
    return (
    <>
        <tr key={item.id} > 
        {/* onClick={onClose} */}
            <td>{item.name}</td>
            <td>{item.employee_id}</td>
            <td>{parseDate(item.created_at)}</td>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.description}</td> 
            {item.approved === true? (
                <td>
                <div className="center">
                  <Button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  
                  variant="success"
                  >Approved</Button>
                </div>
              </td>
            ):item.approved === false?
            (<td>
                <div className="center">
                  <Button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"  
                  variant="danger"
                  onClick={onClose}
                  >Rejected</Button>
                </div>
              </td>)
            :(
                <td>
                    <div className="justify-center flex gap-2">
                      <Button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  
                      onClick={(e) => setApproveStatus(true)}
                      variant="success">Approve</Button>
                      <Button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
                      onClick={(e) => setApproveStatus(false)}
                      variant="danger">Reject</Button>
                    </div>
                  </td>)
            }
        </tr>
        <MyDialog 
        isOpen={isOpen}
        onClose={onClose}
        key={item?.id + 'dialog'}
        message={message}
        setMessage={setMessage}
        item={item}
        approve={approve}
        handlesubmit={handleSubmit}
        />
    </>    
    )
}