import React, { useEffect, useState } from "react";
import SitePagination from "../pagination/pagination";
import "./table.css";

type SiteTableProps = {
    list:any[]
}

const SiteTable = (props:SiteTableProps) => {
  const [paginatedResult, setPaginatedResult] = useState<any[]>([]);
  const PAGE_SIZE = 10;

  const paginate = (pageSize: number, pageNumber: number) => {
    const slicedData: any[] = props.list.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
    setPaginatedResult(slicedData);
  };
  const onChangePagination = (currectPage: number) => {
    paginate(PAGE_SIZE, currectPage);
  };

  useEffect(() => {
    paginate(PAGE_SIZE, 1);
  }, [props.list]);
  return (
    <>
      <table id="6" className="site-table">
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Type of Absence</th>
            <th>Period</th>
            <th>Member Note</th>
            <th>Status</th>
            <th>Admitter Note</th>
          </tr>
        </thead>
        <tbody>
          {paginatedResult.map((data: any, index:number) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>
                <span className="site-table-td-span">{data.type}</span>
                <div className="site-table-td-mobile">
                  <h3>Type of Absence</h3>
                  <span>{data.type}</span>
                </div>
              </td>
              <td>
                <span className="site-table-td-span">{data.period} days</span>
                <div className="site-table-td-mobile">
                  <h3>Period</h3>
                  <span>{data.period} days</span>
                </div>
              </td>
              <td>
                <span className="site-table-td-span">{data.memberNote}</span>
                <div className="site-table-td-mobile">
                  <h3>Member Note</h3>
                  <span>{data.memberNote}</span>
                </div>
              </td>
              <td>
                <span className="site-table-td-span">{data.status}</span>
                <div className="site-table-td-mobile">
                  <h3>Status</h3>
                  <span>{data.status}</span>
                </div>
              </td>
              <td>
                <span className="site-table-td-span">{data.admitterNote}</span>
                <div className="site-table-td-mobile">
                  <h3>Admitter Note</h3>
                  <span>{data.admitterNote}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SitePagination
        listSize={props.list.length}
        pageSize={PAGE_SIZE}
        onChangeHandler={onChangePagination}
      ></SitePagination>
    </>
  );
};

export default SiteTable;
