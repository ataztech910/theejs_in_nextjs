"use client";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DataFetch() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/api",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="w-full h-svh m-auto p-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          className="w-full text-sm text-left rtl:text-right text-gray-500   
                        dark:text-gray-400"
        >
          <thead
            className="text-xs text-gray-700 uppercase bg-gray-50     
                               dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" className="px-6 py-3">
                Model ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data &&
              data.data.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">
                    <Link
                      href="#"
                      className="font-medium 
                                text-blue-600 dark:text-blue-500
                                hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
