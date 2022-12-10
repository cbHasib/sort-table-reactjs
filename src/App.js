import { useEffect, useState } from "react";
import Table from "./Components/Table/Table";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("MOCK_DATA.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div>
      <Table
        data={data}
        tableConfig={{
          column: [
            "id",
            "first_name",
            "last_name",
            "gender",
            "mobile",
            "email",
            "status",
          ],
          sort: [
            "id",
            "first_name",
            "last_name",
            "email",
            "status",
            "gender",
            "mobile",
          ],
        }}
      />
    </div>
  );
}

export default App;
