import React, { useEffect, useState } from "react";
import "./App.css";
import SiteFilters from "./components/filters/filters";
import SiteHeader from "./components/header/header";
import SiteTable from "./components/table/table";
import { fetchData, filterData, formatData } from "./utils/index";

const App = () => {
  const [rawResult, setRawResult] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [statusList, setStatusList] = useState<string[]>([]);
  const [typeList, setTypeList] = useState<string[]>([]);

  useEffect(() => {
    fetchData()
      .then((responses: any[]) => {
        const { finalResult, statusList, typeList } = formatData(
          responses[0].data.payload,
          responses[1].data.payload
        );
        setStatusList(statusList);
        setTypeList(typeList);
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
      <SiteHeader></SiteHeader>
      <section className="site-section">
        <div className="site-container">
          <SiteFilters
            statusList={statusList}
            typeList={typeList}
            onChange={changeFilter}
          ></SiteFilters>
          <h4>{result.length} record found</h4>
          <SiteTable list={result}></SiteTable>
        </div>
      </section>
    </div>
  );
};

export default App;
