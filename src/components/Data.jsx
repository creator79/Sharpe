import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { filterPostsByUserId  , generateChartData} from '../utils/chartUtils';
import Charts from './Chart'


function Data() {
  const [posts, setPosts] = useState([]);
  const tableData = filterPostsByUserId(posts, 1);
  const chartData = generateChartData(posts);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Set the state with all posts
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
      <h2 className='text-xl text-center font-bold mx-[2rem] py-2'>Data Page</h2>
     <span className=''>
        <Charts chart={chartData}  table= {tableData}/>
     </span>
      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg min-w-full min-h-[value] mx-4">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((post) => (
              <tr key={post.id} className="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {post.id}
                </th>
                <td className="px-6 py-4">
                  {post.title}
                </td>
                <td className="px-6 py-4">
                  {post.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Data;
