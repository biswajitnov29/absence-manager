import axios from "axios";
export const calculatePeriod = (startDate: string, endDate: string) => {
  if (startDate === endDate) {
    return 1;
  } else {
    const start: any = new Date(startDate);
    const end: any = new Date(endDate);
    const diffInMs = Math.abs(end - start);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
};

export const fetchData = () => {
  return Promise.all([
    axios.get("./data/absences.json"),
    axios.get("./data/members.json"),
  ]);
};

export const formatData = (absences: any[], members: any[]) => {
  let statusList = new Set<string>();
  const finalResult = absences.map((data: any) => {
    const userData: any = members.find(
      (element: any) => element.userId === data.userId
    );
    let status: string = "";
    if (data.confirmedAt) {
      status = "Confirmed";
    } else if (data.rejectedAt) {
      status = "Rejected";
    } else {
      status = "Requested";
    }
    statusList.add(status);
    return {
      ...data,
      name: userData.name,
      image: userData.image,
      status: status,
      period: calculatePeriod(data.startDate, data.endDate),
    };
  });
  return { finalResult, statusList: Array.from(statusList) };
};

export const filterData = (filterCriteria: any, rawList:any[]) => {
  let filterResult: any[] = [...rawList];
  if (filterCriteria.status && filterCriteria.status.length > 0) {
    filterResult = filterResult.filter(
      (item) => item.status === filterCriteria.status
    );
  }
  if (filterCriteria.date) {
    filterResult = filterResult.filter((item) => {
      let from = new Date(item.startDate);
      let to = new Date(item.endDate);
      let check = new Date(filterCriteria.date);
      return check >= from && check <= to;
    });
  }
  return filterResult;
};


export const IcalFormat = {
  start: [2019, 12, 3, 6, 30],
  title: '',
  description: '',
  url: '',
  startOutputType: 'local',
  duration: { hours: 0, minutes: 30 },
  location: '',
  endOutputType: 'local',
  categories: ['Category A'],
  status: 'CONFIRMED',
  busyStatus: "BUSY",
  organizer: { name: 'Admin' },
  attendees: []
};