import React, { useEffect, useState } from "react";
import "./App.css";
import SiteFilters from "./components/filters/filters";
import Header from "./components/header/header";
import SiteTable from "./components/table/table";
import { fetchData, filterData, formatData } from "./utils/index";

const App = () => {
  const [rawResult, setRawResult] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [statusList, setStatusList] = useState<string[]>([]);

  useEffect(() => {
    fetchData()
      .then((responses: any[]) => {
        const { finalResult, statusList } = formatData(
          responses[0].data.payload,
          responses[1].data.payload
        );
        setStatusList(statusList);
        setResult(finalResult);
        setRawResult(finalResult);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeFilter = (filterCriteria: any) => {
    let filterResult = filterData(filterCriteria, rawResult);
    setResult(filterResult);
  };
  return (
    <div className="App">
      <Header></Header>
      <section className="site-section">
        <div className="site-container">
          <SiteFilters
            statusList={statusList}
            onChange={changeFilter}
          ></SiteFilters>
          <SiteTable list={result}></SiteTable>
        </div>
      </section>
    </div>
  );
};

export default App;
