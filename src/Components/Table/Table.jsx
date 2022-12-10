import React, { useEffect, useState } from "react";
import "./Table.css";
import sortIcon from "../../assets/icon/sortIcon.svg";

/*
 * This table component is used to display data in a table format
 * @param {Array} data - Array of objects to be displayed in the table
 * @param {Object} tableConfig - Array of objects to control column & sort behavior
 * @param {Array} tableConfig.column - List of column that you wanted to show
 * @param {Array} tableConfig.sort - List of sort that you wanted to show
 *
 * @example
 * <Table
        data={tableData}
        tableConfig={{
          column: ["email", "joiningDate", "role"],
          sort: ["joiningDate", "role"],
        }}
      />
 * It will show only the email, joiningDate & role column in the table
* It will show the sort icon for joiningDate & role column
 *
 * Coded by Md. Hasibul Hasan
 * Date: 29-Nov-2022
 * Version: 1.0.0
 * Email: hasibul.hasan2905@gmail.com
 * Phone: +8801780-568256
 *
 */

const Table = ({ data, tableConfig }) => {
  const [sortData, setSortData] = useState([]);
  const [sortFirstNameAsc, setSortFirstNameAsc] = useState(true);
  const [sortLastNameAsc, setSortLastNameAsc] = useState(true);
  const [sortGenderAsc, setSortGenderAsc] = useState(true);
  const [sortEmailAsc, setSortEmailAsc] = useState(true);
  const [sortMobileAsc, setSortMobileAsc] = useState(true);
  const [sortStatusAsc, setSortStatusAsc] = useState(true);
  const [sortIdAsc, setSortIdAsc] = useState(true);
  const [bgColorId, setBgColorId] = useState(null);

  const sort = tableConfig?.sort;
  const column = tableConfig?.column;

  useEffect(() => {
    setSortData(data);
  }, [data]);

  const sortBy = (key) => {
    if (key === "first_name") {
      const sortedData = [...sortData].sort((a, b) =>
        sortFirstNameAsc
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key])
      );
      setSortData(sortedData);
      setSortFirstNameAsc(!sortFirstNameAsc);
    } else if (key === "last_name") {
      const sortedData = [...sortData].sort((a, b) =>
        sortLastNameAsc
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key])
      );
      setSortData(sortedData);
      setSortLastNameAsc(!sortLastNameAsc);
    } else if (key === "email") {
      const sortedData = [...sortData].sort((a, b) =>
        sortEmailAsc
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email)
      );
      setSortData(sortedData);
      setSortEmailAsc(!sortEmailAsc);
    } else if (key === "gender") {
      const sortedData = [...sortData].sort((a, b) =>
        sortGenderAsc
          ? a.gender.localeCompare(b.gender)
          : b.gender.localeCompare(a.gender)
      );
      setSortData(sortedData);
      setSortGenderAsc(!sortGenderAsc);
    } else if (key === "mobile") {
      const sortedData = [...sortData].sort((a, b) =>
        sortMobileAsc
          ? a.mobile.localeCompare(b.mobile)
          : b.mobile.localeCompare(a.mobile)
      );
      setSortData(sortedData);
      setSortMobileAsc(!sortMobileAsc);
    } else if (key === "status") {
      const sortedData = [...sortData].sort((a, b) =>
        sortStatusAsc
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status)
      );
      setSortData(sortedData);
      setSortStatusAsc(!sortStatusAsc);
    } else if (key === "id") {
      const sortedData = [...sortData].sort((a, b) =>
        sortIdAsc ? b.id - a.id : a.id - b.id
      );
      setSortData(sortedData);
      setSortIdAsc(!sortIdAsc);
    } else {
      const sortedData = [...sortData].sort((a, b) =>
        a[key].localeCompare(b[key])
      );
      setSortData(sortedData);
    }
  };

  const changeBG = (id) => {
    setBgColorId(id);
  };

  return (
    <section className="container py-10 w-full h-full ">
      <div className="w-fit mx-auto overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="table-auto text-sm  text-[#383838] text-left">
            <thead>
              <tr className="font-semibold bg-white">
                {column?.includes("id") && (
                  <th>
                    <div className="flex items-center gap-[10px]">
                      <span>ID</span>
                      {sort?.includes("id") && (
                        <button onClick={() => sortBy("id")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("first_name") && (
                  <th>
                    <div className="flex items-center gap-[10px]">
                      <span>First Name</span>
                      {sort?.includes("first_name") && (
                        <button onClick={() => sortBy("first_name")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("last_name") && (
                  <th>
                    <div className="flex items-center gap-[10px]">
                      <span>Last Name</span>
                      {sort.includes("last_name") && (
                        <button onClick={() => sortBy("last_name")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("email") && (
                  <th>
                    <div className="flex items-center gap-[10px]">
                      <span>Email Address</span>
                      {sort.includes("email") && (
                        <button onClick={() => sortBy("email")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("gender") && (
                  <th>
                    <div className="flex items-center gap-[10px]">
                      <span>Gender</span>
                      {sort?.includes("gender") && (
                        <button onClick={() => sortBy("gender")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("mobile") && (
                  <th>
                    <div className="flex items-center gap-[10px]">
                      <span>Mobile</span>
                      {sort.includes("mobile") && (
                        <button onClick={() => sortBy("mobile")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                {column?.includes("status") && (
                  <th>
                    <div className="flex items-center gap-[10px]">
                      <span>Status</span>
                      {sort.includes("status") && (
                        <button onClick={() => sortBy("status")}>
                          <img
                            src={sortIcon}
                            alt=""
                            className="hover:text-gray-400"
                          />
                        </button>
                      )}
                    </div>
                  </th>
                )}
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {sortData.map((item, index) => (
                <tr
                  className={bgColorId === item.id ? "bg-cyan-200" : undefined}
                  key={index}
                >
                  {column?.includes("id") && <td>{item.id}</td>}
                  {column?.includes("first_name") && <td>{item.first_name}</td>}
                  {column?.includes("last_name") && <td>{item.last_name}</td>}
                  {column?.includes("email") && (
                    <td>
                      <a href={`mailto:${item.email}`}>{item.email}</a>
                    </td>
                  )}
                  {column?.includes("gender") && <td>{item.gender}</td>}
                  {column?.includes("mobile") && <td>{item.mobile}</td>}
                  {column?.includes("status") && (
                    <td
                      className={
                        item.status === "true"
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {item.status}
                    </td>
                  )}
                  <td
                    className="hover:cursor-pointer text-center text-cyan-600 font-semibold"
                    onClick={() => changeBG(item.id)}
                  >
                    Change BG
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
