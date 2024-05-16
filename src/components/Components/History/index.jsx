import React, { useContext } from "react";
import { BookShopContext } from "../../../context";

const History = () => {
  const { history, setHistory } = useContext(BookShopContext);
  const removeAll = () => {
    localStorage.removeItem("history");
    setHistory({});
  };

  return (
    <div>
      <div className="container">
        {history.length ? (
          <div class="relative overflow-x-auto mt-[40px]">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-[20px] text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((el) => (
                  <tr class="bg-gray-300 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-7 py-5 text-[22px] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {el.name}
                    </th>
                    <td class="px-6 py-4 text-[20px]">{el.adress}</td>
                    <td class="px-6 py-4 text-[20px]">
                      {el.day}.{el.mounth}.{el.year}
                    </td>
                    <td class="px-6 py-4 text-[20px]">
                      {el.hours}:{el.time}:{el.seconds}
                    </td>
                  </tr>
                ))}
              </tbody>
              <button
                onClick={() => removeAll()}
                type="button"
                class="text-white mt-7 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Remove All
              </button>
            </table>
          </div>
        ) : (
          <div
            class="flex items-center p-6 mt-6 text-sm text-white rounded-lg bg-blue-800 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div className="text-[17px]">
              <span class="font-medium text-[20px]">Warning alert!</span> Ваша
              история покупок пуста.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
