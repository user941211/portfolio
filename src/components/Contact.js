import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('이메일이 성공적으로 전송되었습니다.');
      } else {
        console.log('이메일 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('오류가 발생했습니다:', error);
    }
  };
//items-center  
  return (
    <div className="flex justify-center  h-screen">
        
      <div className="w-full p-6 bg-white rounded shadow">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">
              Name:
            </label>
            {/* <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            /> */}
            <p>JaeSeong Byeon , 변재성</p>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email:
            </label>
            {/* <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            /> */}
            <p>common941211@gmail.com</p>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 h-96 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;