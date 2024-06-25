'use client'
import "./home.css";
import React, { useEffect, useState } from "react";
import Image from "next/image"
import { Input } from "@/components/ui/input";
import Grid from "@mui/material/Grid";
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { toast } from 'react-hot-toast';
import { getEvents, selectEvents, getEventsUp, selectEventsUp } from "@/store/features/events/eventsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IEvent } from "@/store/features/events/eventsAPI";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios'; 
import { DatePicker } from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {publicIpv4} from 'public-ip';

const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '1em',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isDrawerOpenUp, setIsDrawerOpenUp] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [pageNumberUp, setPageNumberUp] = React.useState(1);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);
  const eventsUp = useAppSelector(selectEventsUp);
  const [filter, setFilter] = React.useState({type: "", age: "", music: "", charge: "", distance: "", keyword: "", selectedDate: null, lng: "", lati: ""});
  const [filterUp, setFilterUp] = React.useState({type: "", age: "", music: "", charge: "", distance: "", keyword: "", selectedDate: null, lng: "", lati: ""});
  const [ip, setIp] = useState('');
  const [geo, setGeo] = useState({ lat:0, lng:0 })

  const now = new Date();
  const sixHoursAgo = new Date(now.getTime() - 6 * 60 * 60 * 1000);
  const nowTime = new Date(now.getTime());
  // Extract components
  const year = sixHoursAgo.getFullYear();
  const month = String(sixHoursAgo.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(sixHoursAgo.getDate()).padStart(2, '0');
  const hours = String(sixHoursAgo.getHours()).padStart(2, '0');
  const minutes = String(sixHoursAgo.getMinutes()).padStart(2, '0');

  const year1 = nowTime.getFullYear();
  const month1 = String(nowTime.getMonth() + 3).padStart(2, '0'); // Months are zero-based
  const day1 = String(nowTime.getDate()).padStart(2, '0');
  const hours1 = String(nowTime.getHours()).padStart(2, '0');
  const minutes1 = String(nowTime.getMinutes()).padStart(2, '0');

  // Format the date
  const agoTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  const currentTime = `${year1}-${month1}-${day1} ${hours1}:${minutes1}`;

  
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const ip = await publicIpv4();
        setIp(ip);
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(ip)}&key=AIzaSyB3O4bL6G9YKssLv3eu6I2L3FKHO-5DRj4`);
        const data = await response.json();

        if (!data.results ||!data.results.length) {
          return { props: { error: "Unable to find location." } };
        }

        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        setGeo({
          ...geo,
          lat,
          lng
        });
        console.log(lat, lng);
      } catch (error) {
        console.error('Failed to fetch IP:', error);
      }
    };

    fetchIp();
    
    navigator.geolocation.getCurrentPosition(async function(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
        console.log(permissionStatus.state); // "granted", "denied", or "prompt"
        if (permissionStatus.state === "denied") {
          dispatch(getEvents({ filter: false, keyword: JSON.stringify({lng: String(geo["lng"]), lati: String(geo["lat"])}) }));
          dispatch(getEventsUp({ filter: false, keyword: JSON.stringify({lng: String(geo["lng"]), lati: String(geo["lat"])}) }));
        }else{
          dispatch(getEvents({ filter: false, keyword: JSON.stringify({lng: String(long), lati: String(lat)}) }));
          dispatch(getEventsUp({ filter: false, keyword: JSON.stringify({lng: String(long), lati: String(lat)}) }));
        }
      });
      
      setFilter({
        ...filter,
        lng: String(long),
        lati: String(lat),
      })

      try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${String(lat)},${String(long)}&key=AIzaSyB3O4bL6G9YKssLv3eu6I2L3FKHO-5DRj4`);
        const addressComponents = response.data.results[0].address_components;
        const cityResult = addressComponents.find(component => component.types.includes('locality'));
        const postalCodeResult = addressComponents.find(component => component.types.includes('postal_code'));

        if (cityResult && postalCodeResult) {
          setCity(cityResult.long_name);
          setZip(postalCodeResult.long_name);
        }
      } catch (error) {
        console.error('Error fetching location details:', error);
      }
    });
  }, []);

  const handleFilter = () => {
    navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
      console.log(permissionStatus.state); // "granted", "denied", or "prompt"
      if (permissionStatus.state === "denied") {
        let temp = filter;
        temp.lati = String(geo["lat"]);
        temp.lng = String(geo["lng"]);
        dispatch(getEvents({ filter: true, keyword: JSON.stringify(temp) }));
      }else{
        dispatch(getEvents({ filter: true, keyword: JSON.stringify(filter) }));
      }
    });
  }

  
  const handleFilterUp = () => {
    navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
      console.log(permissionStatus.state); // "granted", "denied", or "prompt"
      if (permissionStatus.state === "denied") {
        let temp = filterUp;
        temp.lati = String(geo["lat"]);
        temp.lng = String(geo["lng"]);
        dispatch(getEventsUp({ filter: true, keyword: JSON.stringify(temp) }));
      }else{
        dispatch(getEventsUp({ filter: true, keyword: JSON.stringify(filterUp) }));
      }
    });
  }

  const eventsFilter = React.useMemo(()=>{
    let temp = [];
    if (filter["selectedDate"] === null || filter["selectedDate"] === "" || filter["selectedDate"]=="Invalid Date") {
      for (let i = 0; i < events.length; i++) {
        if (new Date((events[i]["Event Date"] + " " + events[i]["Time Start"])).getTime() >= new Date(agoTime).getTime() &&
            new Date((events[i]["Event Date"] + " " + events[i]["Time Start"])).getTime() <= new Date(currentTime).getTime()  &&
            Number(events[i]?.["distance"]) <= 10) {
          temp.push(events[i]);          
        }
      }
    }else{
      const dateString = filter["selectedDate"];

      const dateObject = new Date(dateString);

      const year = dateObject.getFullYear();
      const month = ("0" + (dateObject.getMonth() + 1)).slice(-2); 
      const day = ("0" + dateObject.getDate()).slice(-2); 

      const formattedDate = `${year}-${month}-${day}`;

      for (let i = 0; i < events.length; i++) {
        if (new Date((events[i]["Event Date"])).getTime() === new Date(formattedDate).getTime() && Number(events[i]?.["distance"]) <= 10) {
          temp.push(events[i]);          
        }
      }
    }
    return temp;
  }, [events]);

  const eventsUpFilter = React.useMemo(()=>{
    let temp = [];
    if (filterUp["selectedDate"] === null || filterUp["selectedDate"] === "" || filterUp["selectedDate"]=="Invalid Date") {
      for (let i = 0; i < events.length; i++) {
        if (new Date((eventsUp[i]?.["Event Date"] + " " + eventsUp[i]?.["Time Start"])).getTime() >= new Date(agoTime).getTime() && 
            new Date((eventsUp[i]?.["Event Date"] + " " + eventsUp[i]?.["Time Start"])).getTime() <= new Date(currentTime).getTime() &&
            Number(eventsUp[i]?.["distance"]) <= 10
          ) {
          temp.push(eventsUp[i]);          
        }
      }
    }else{
      const dateString = filterUp["selectedDate"];
      const dateObject = new Date(dateString);

      const year = dateObject.getFullYear();
      const month = ("0" + (dateObject.getMonth() + 1)).slice(-2); 
      const day = ("0" + dateObject.getDate()).slice(-2); 

      const formattedDate = `${year}-${month}-${day}`;

      for (let i = 0; i < eventsUp.length; i++) {
        if (new Date((eventsUp[i]?.["Event Date"])).getTime() === new Date(formattedDate).getTime() && Number(eventsUp[i]?.["distance"]) <= 10) {
          temp.push(eventsUp[i]);          
        }
      }
    }
    return temp;
  }, [eventsUp]);
  
  const onChange = (key, value) => {
    let temp = filter;
    temp[key] = value;
    setFilter({
      ...filter,
      [key] : value
    });
    // dispatch(getEvents({ filter: true, keyword: JSON.stringify(filter) }));
  }
  
  const onChangeUp = (key, value) => {
    let temp = filterUp;
    temp[key] = value;
    setFilterUp({
      ...filterUp,
      [key] : value
    });
    // dispatch(getEventsUp({ filter: true, keyword: JSON.stringify(filterUp) }));
  }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const handlePage = (e, number) => {
    setPageNumber(number);
  }

  const handlePageUp = (e, number) => {
    setPageNumberUp(number);
  }

  function getWeekOfYear(dateString) {
    const date = new Date(dateString);
    const januaryFirst = new Date(date.getFullYear(), 0, 1);
    const daysToNextMonday = (januaryFirst.getDay() === 1)? 0 : (7 - januaryFirst.getDay()) % 7;
    const nextMonday = new Date(date.getFullYear(), 0, januaryFirst.getDate() + daysToNextMonday);
    
    let weekNumber = (date < nextMonday)? 52 : (date > nextMonday? Math.ceil((Number(date) - Number(nextMonday)) / (24 * 3600 * 1000) / 7) : 1);
    
    return weekNumber;
  }

  function getWeekName(weekNumber) {
    const firstDayOfYear = new Date(weekNumber, 0, 1).getDay();
    const offset = firstDayOfYear === 0? 6 : firstDayOfYear - 1;
  
    const targetDate = new Date(weekNumber, 0, 1 + (offset * 7));
  
    const dayOfWeek = targetDate.getDay();
  
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekName = daysOfWeek[dayOfWeek];
  
    return weekName;
  }

  return (
    <div className="w-full">

      {/* Section 1 */}
      <div className="homeBg1 lg:content-center content-end md:px-5 pr-5">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50">
        </div>
        <div className="max-w-[1280px] m-auto grid grid-cols-5 items-center relative">
          <div className="lg:col-span-3 col-span-5 w-fit m-auto">   
            <Image
              src="/house_party.svg"
              alt=""
              width={308}
              height={12}
              className="mb-5"
            />
            <div className="lg:text-[90px] text-[45px] lg:leading-[101px] leading-[45px] md:text-[70px] md:leading-[70px] font-[700] text-white">
              <div className="flex">
                <p>FIND</p>
                <p className="text-primaryColor">&nbsp;MORE</p> 
              </div>
              <div className="flex">
                <p className="text-primaryColor">OF&nbsp;THE</p>
                <p>&nbsp;PARTY</p> 
              </div>
              NEAR YOU 
            </div>
          </div>
          <div className="relative lg:col-span-2 col-span-5 flex lg:justify-end justify-center pb-5">
            <form className="relative col-span-2 lg:w-[410px] w-full py-4 lg:py-12 px-8 rounded-[30px] lg:ml-8">
              <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 rounded-[30px]">
              </div>
              <div className="relative">
                <p className="md:text-[21px] text-[17px] text-[#ffffff] md:leading-[28px] leading-[20px] font-bold text-left">
                  Search parties happening in your city today, tomorrow, and this weekend. 
                </p>
                <Image
                  src="/underline.svg"
                  alt=""
                  width={42}
                  height={3}
                  className="lg:my-5 my-2"
                />
                <Input 
                  className="lg:w-[346px] w-full h-[45px] lg:h-[63px] rounded-[31.5px] bg-white px-7 md:text-[17px] text-[14px]"
                  placeholder="Enter City/Zipcode"
                  // value={city + "/" + zip}
                />
                <div className="lg:w-[346px] w-full h-[45px] lg:h-[63px] rounded-[31.5px] border-[1px] border-[#FFFFFF] bg-white flex content-center mt-5 px-6">
                  <select defaultValue={''}  onChange={(e) => onChange("distance", e.target.value)} value={filter["distance"]} className="md:text-[17px] text-[14px] leading-[18.5px] text-[#000000] outline-none w-full">
                    <option value="">Distance</option>
                    <option value="1">1 mile</option>
                    <option value="2-5">2-5 miles</option>
                    <option value="5-10">5-10 miles</option>
                    <option value="10-20">10-20 miles</option>
                    <option value="20">20+ miles</option>
                  </select>
                </div>
                <button className="lg:w-[346px] w-full h-[45px] lg:h-[63px] rounded-[31.5px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5">
                  LETS GO!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#F5F5F5] px-5">
        <div className="max-w-[1280px] m-auto py-[90px]">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
          <p className="md:text-[37px] text-[22px] md:leading-[49px] leading-[23px] font-bold text-[#000000] my-5">Parties Happening Around You Now</p>
          <p className="md:text-[17px] md:leading-[18.5px] text-[14px] leading-[16px] text-[#000000]">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>
          <Drawer open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false);}}>
            <DrawerHeader>
              <IconButton onClick={()=>{setIsDrawerOpen(false);}}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <p className="text-[25px] font-[600] text-black text-center mt-10 mb-3">Filter By:</p>
            <Grid container className="flex py-3 justify-start items-center md:hidden px-5">
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''} onChange={(e) => onChange("type", e.target.value)} value={filter["type"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Type of event</option>
                  <option value="Bar party">Bar party</option>
                  <option value="Club party">Club party</option>
                  <option value="Warehouse rave">Warehouse rave</option>
                  <option value="Outdoor rave">Outdoor rave</option>
                  <option value="Megaclub party">Megaclub party</option>
                  <option value="Pool party">Pool party</option>
                  <option value="Block party">Block party</option>
                  <option value="Rooftop party">Rooftop party</option>
                  <option value="Other">Other</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChange("music", e.target.value)} value={filter["music"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Music</option>
                  <option value="Top 40">Top 40</option>
                  <option value="EDM">EDM</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Techno/House">Techno/House</option>
                  <option value="Hip-hop">Hip-hop</option>
                  <option value="R&B">R&B</option>
                  <option value="Dubstep">Dubstep</option>
                  <option value="Latin">Latin</option>
                  <option value="Salsa">Salsa</option>
                  <option value="Reggaeton">Reggaeton</option>
                  <option value="Country">Country</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Metal">Metal</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChange("age", e.target.value)} value={filter["age"]}  className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Age</option>
                  <option value="18">18+</option>
                  <option value="21">21+</option>
                  <option value="30">30+</option>
                  <option value="40">40+</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChange("charge", e.target.value)} value={filter["charge"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Cover Charge</option>
                  <option value="0">Free</option>
                  <option value="5-15">$5-$15</option>
                  <option value="20-30">$20-$30</option>
                  <option value="30-50">$30-$50</option>
                  <option value="50-80">$50-$80</option>
                  <option value="80">$80+</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChange("distance", e.target.value)} value={filter["distance"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Distance</option>
                  <option value="1">1 mile</option>
                  <option value="2-5">2-5 miles</option>
                  <option value="5-10">5-10 miles</option>
                  <option value="10-20">10-20 miles</option>
                  <option value="20">20+ miles</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
                <Input 
                  className="h-[47.92px] rounded-[24px] bg-white px-7 md:text-[17px] text-[14px]"
                  placeholder="Search by keyword"
                  value={filter["keyword"]}
                  onChange={(e)=>onChange("keyword", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker 
                      className="flex justify-around rounded-[24px] border-[1px] border-[#B5B6B7] bg-white px-5 pt-0"
                      onChange={(newValue) => {
                        onChange("selectedDate", newValue);
                      }}
                      value={filter["selectedDate"]}
                      disablePast
                    />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="flex items-center p-0">
                <button className="w-[264px] hover:bg-[#009688] h-[47.92px] rounded-[24px] bg-primaryColor text-[17px] text-[#FFFFFF]" 
                  onClick={() => {
                      handleFilter();
                      setIsDrawerOpen(false);
                    }}>
                  Filter Now
                </button>
              </Grid>
            </Grid>
          </Drawer>
          <Grid container className="md:flex justify-between py-3 items-center hidden">
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''} onChange={(e) => onChange("type", e.target.value)} value={filter["type"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Type of event</option>
                <option value="Bar party">Bar party</option>
                <option value="Club party">Club party</option>
                <option value="Warehouse rave">Warehouse rave</option>
                <option value="Outdoor rave">Outdoor rave</option>
                <option value="Megaclub party">Megaclub party</option>
                <option value="Pool party">Pool party</option>
                <option value="Block party">Block party</option>
                <option value="Rooftop party">Rooftop party</option>
                <option value="Other">Other</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChange("music", e.target.value)} value={filter["music"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Music</option>
                <option value="Top 40">Top 40</option>
                <option value="EDM">EDM</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Techno/House">Techno/House</option>
                <option value="Hip-hop">Hip-hop</option>
                <option value="R&B">R&B</option>
                <option value="Dubstep">Dubstep</option>
                <option value="Latin">Latin</option>
                <option value="Salsa">Salsa</option>
                <option value="Reggaeton">Reggaeton</option>
                <option value="Country">Country</option>
                <option value="Jazz">Jazz</option>
                <option value="Metal">Metal</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChange("age", e.target.value)} value={filter["age"]}  className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Age</option>
                <option value="18">18+</option>
                <option value="21">21+</option>
                <option value="30">30+</option>
                <option value="40">40+</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChange("charge", e.target.value)} value={filter["charge"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Cover Charge</option>
                <option value="0">Free</option>
                <option value="5-15">$5-$15</option>
                <option value="20-30">$20-$30</option>
                <option value="30-50">$30-$50</option>
                <option value="50-80">$50-$80</option>
                <option value="80">$80+</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChange("distance", e.target.value)} value={filter["distance"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Distance</option>
                <option value="1">1 mile</option>
                <option value="2-5">2-5 miles</option>
                <option value="5-10">5-10 miles</option>
                <option value="10-20">10-20 miles</option>
                <option value="20">20+ miles</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
              <Input 
                className="h-[47.92px] rounded-[24px] bg-white px-7 md:text-[17px] text-[14px]"
                placeholder="Search by keyword"
                value={filter["keyword"]}
                onChange={(e)=>onChange("keyword", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker 
                    className="flex justify-around rounded-[24px] border-[1px] border-[#B5B6B7] bg-white px-5 pt-0"
                    onChange={(newValue) => {
                        onChange("selectedDate", newValue);
                      }}
                      value={filter["selectedDate"]}
                      disablePast
                  />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="flex items-center p-0">
              <button className="w-[264px] hover:bg-[#009688] h-[47.92px] rounded-[24px] bg-primaryColor text-[17px] text-[#FFFFFF]" 
              onClick={() => {
                  handleFilter();
                }}>
                Filter Now
              </button>
            </Grid>
          </Grid>
          <div className="md:hidden flex bg-white rounded-[3px] p-2 justify-between items-center mt-6">
            <p className="text-black text-[17px] leading-[18.5px] font-[400] ml-3">Filter by:</p>
            <div className="flex content-center bg-primaryColor w-[36px] h-[36px] justify-center rounded-[3px]" onClick={()=> {setIsDrawerOpen(true)}}>
              <Image
                src="/filter.svg"
                alt=""
                width={18.7}
                height={17}
              />
            </div>
          </div>
          {
            eventsFilter.map((event, index) => {
                // if (event["Event Name"].includes(filter.keyword) || event["Music Type"].includes(filter.keyword) || event["DJ Name"].includes(filter.keyword) || event["Venue Type"].includes(filter.keyword)) {
                  if (index >= (pageNumber-1)*10 && index <= ((pageNumber)*10)-1) {
                    const months = [
                      "January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                    ];
                    
                    const date = event["Event Date"];
                    const weekNumber = getWeekOfYear(date);
                    const weekName = getWeekName(weekNumber).substring(0, 3);
                    const month = months[Number(date.split("-")[1])-1].substring(0, 3).toUpperCase();
                    const day = date.split("-")[2];
                    return (
                      <>
                        <div className="grid md:grid-cols-3 py-7">
                          <div className="md:flex md:justify-between lg:space-x-10 space-x-2 md:col-span-2">
                            <div className="flex justify-between lg:space-x-10 md:space-x-2">
                              <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">{month}</p>
                                <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">{day}</p>
                              </div>
                              <div className="flex mb-2 md:hidden">
                                <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">{weekName} - {event["Time Start"]}</p>
                                <Image
                                  src="/info.svg"
                                  alt=""
                                  width={18}
                                  height={18}
                                  className="h-fit"
                                />
                              </div>
                              <div className="md:h-full h-[100px] w-[100px] md:w-[150px] relative">
                                <Image
                                  src={event["Event Image Link"]}
                                  alt=""
                                  layout="fill"
                                  objectFit="cover"
                                  className="rounded-md"
                                />
                              </div>
                            </div>
                            <div className="w-full my-5 md:my-0">
                              <div className="md:flex mb-2 hidden">
                                <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">{weekName} - {event["Time Start"]}</p>
                                <Image
                                  src="/info.svg"
                                  alt=""
                                  width={18}
                                  height={18}
                                />
                              </div>
                              <div>
                                <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                                  {event["Event Name"]}
                                </p>
                                <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">{event["Venue Name"]}</p>
                                <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">{event["Venue Address"]}</p>
                                <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">{event["Venue City"]}, {event["Venue State"]}, {event["Zip Code"]}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:justify-end items-center col-span-1">
                            <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
                              BUY TICKET
                            </button>
                          </div>
                        </div>
                        <Image
                          src="/line.svg"
                          alt=""
                          width={1280}
                          height={3}
                        />
                      </>
                    )
                }
              // }
            })
          }
          <div className="flex justify-center">
            <Stack spacing={2}>
              <Pagination
                count={eventsFilter.length === 0? 1: Math.ceil(eventsFilter.length/10)}
                onChange={handlePage}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </div>
          </div>
      </div>
      
      {/* Section 3 */}
      <div className="max-w-[888px] m-auto mmd:py-[90px] py-10 px-5">
        <div className="flex justify-center mb-5">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
        </div>
        <div className="flex justify-center my-5">
          <p className="md:text-[37px] text-[22px] text-[#000000] md:leading-[49px] leading-[27px] font-bold">Host Your Event With House The Party</p>
        </div>

        <div className="flex justify-center my-10 rounded-[6px]">
          <div className="p-3 grid grid-cols-2 drop-shadow-lg rounded-[6px] border-[1px] border-[#F3F3F3]">
            <div className="bg-primaryColor flex items-center rounded-[6px] justify-center md:h-[58px] w-[173px] h-[45px] md:w-[305px]">
              <p className="text-[16px] text-[#ffffff] leading-[18px] font-bold">List Your Event </p>
            </div>
            <div className="bg-[#F3F3F3] flex items-center rounded-[6px] justify-center md:h-[58px] w-[173px] h-[45px] md:w-[305px]">
              <p className="text-[16px] text-[#212020] leading-[18px] font-bold">List Your Value </p>
            </div>
          </div>
        </div>

        <div className="mmd:grid mmd:grid-cols-2 mmd:grid-rows-1">
          <div className="flex mmd:justify-start justify-center">
            <Image
              src="/homeBg2_1.svg"
              alt=""
              width={416.5}
              height={419.92}
              className="mmd:w-[416px] mmd:h-[420px] w-[245.9px] h-[247.92px]"
            />
          </div>
          <div className="flex mmd:justify-end justify-center items-center mmd:mt-0 mt-5">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold">STEP 1</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="mmd:grid mmd:grid-cols-2 mmd:grid-rows-1 mmd:mt-0 mt-5">
          <div className="mmd:flex mmd:justify-start justify-center items-center hidden">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold">STEP 2</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
          <div className="flex mmd:justify-end justify-center">
            <Image
              src="/homeBg2_2.svg"
              alt=""
              width={416.5}
              height={419.92}
              className="mmd:w-[416px] mmd:h-[420px] w-[245.9px] h-[247.92px]"
            />
          </div>
          <div className="flex mmd:justify-start justify-center items-center mmd:hidden mmd:mt-0 mt-5">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold">STEP 2</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="mmd:grid mmd:grid-cols-2 mmd:grid-rows-1 mmd:mt-0 mt-5">
          <div className="flex mmd:justify-start justify-center">
            <Image
              src="/homeBg2_3.svg"
              alt=""
              width={416.5}
              height={419.92}
              className="mmd:w-[416px] mmd:h-[420px] w-[245.9px] h-[247.92px]"
            />
          </div>
          <div className="flex mmd:justify-end justify-center items-center">
            <div className="w-[345px]">
              <p className="text-center md:text-[16px] text-[12px] text-primaryColor md:leading-[18px] leading-[13px] font-bold mmd:mt-0 mt-5">STEP 3</p>
              <p className="text-center md:text-[30px] text-[18px] md:leading-[45px] leading-[27px] text-black font-bold my-4">Upload Your Event</p>
              <p className="text-center md:text-[17px] text-[15px] md:leading-[25px] leading-[25px] text-black">
                Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mmd:mt-7 mt-0">
          <button className="w-[254px] mmd:h-[60px] h-[45px] rounded-[30px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mt-5 leading-[19px]">
            GET STARTED
          </button>
        </div>

      </div>

      {/* Section 4 */}
      <div className="bg-[#F5F5F5] px-5">
        <div className="max-w-[1280px] m-auto py-[90px]">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
          <p className="lg:text-[37px] md:text-[37px] text-[30px] lg:leading-[49px] md:leading-[49px] leading-[30px] font-bold text-[#000000] my-5">Upcoming Global Events</p>
          <p className="text-[17px] leading-[18.5px] text-[#000000]">Here’s a list of upcoming events by our band in different locations. Please choose a location near to you. We’re thrilled to see you there. Let’s rock!</p>
          <Drawer open={isDrawerOpenUp} onClose={()=>{setIsDrawerOpenUp(false);}}>
            <DrawerHeader>
              <IconButton onClick={()=>{setIsDrawerOpenUp(false);}}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <p className="text-[25px] font-[600] text-black text-center mt-10 mb-3">Filter By:</p>
            <Grid container className="flex justify-between py-3 items-center md:hidden px-5">
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''} onChange={(e) => onChangeUp("type", e.target.value)} value={filterUp["type"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Type of event</option>
                  <option value="Bar party">Bar party</option>
                  <option value="Club party">Club party</option>
                  <option value="Warehouse rave">Warehouse rave</option>
                  <option value="Outdoor rave">Outdoor rave</option>
                  <option value="Megaclub party">Megaclub party</option>
                  <option value="Pool party">Pool party</option>
                  <option value="Block party">Block party</option>
                  <option value="Rooftop party">Rooftop party</option>
                  <option value="Other">Other</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChangeUp("music", e.target.value)} value={filterUp["music"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Music</option>
                  <option value="Top 40">Top 40</option>
                  <option value="EDM">EDM</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Techno/House">Techno/House</option>
                  <option value="Hip-hop">Hip-hop</option>
                  <option value="R&B">R&B</option>
                  <option value="Dubstep">Dubstep</option>
                  <option value="Latin">Latin</option>
                  <option value="Salsa">Salsa</option>
                  <option value="Reggaeton">Reggaeton</option>
                  <option value="Country">Country</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Metal">Metal</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChangeUp("age", e.target.value)} value={filterUp["age"]}  className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Age</option>
                  <option value="18">18+</option>
                  <option value="21">21+</option>
                  <option value="30">30+</option>
                  <option value="40">40+</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChangeUp("charge", e.target.value)} value={filterUp["charge"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Cover Charge</option>
                  <option value="0">Free</option>
                  <option value="5-15">$5-$15</option>
                  <option value="20-30">$20-$30</option>
                  <option value="30-50">$30-$50</option>
                  <option value="50-80">$50-$80</option>
                  <option value="80">$80+</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
                <select defaultValue={''}  onChange={(e) => onChangeUp("distance", e.target.value)} value={filterUp["distance"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                  <option value="">Distance</option>
                  <option value="1">1 mile</option>
                  <option value="2-5">2-5 miles</option>
                  <option value="5-10">5-10 miles</option>
                  <option value="10-20">10-20 miles</option>
                  <option value="20">20+ miles</option>
                </select>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
                <Input 
                  className="h-[47.92px] rounded-[24px] bg-white px-7 md:text-[17px] text-[14px]"
                  placeholder="Search by keyword"
                  value={filterUp["keyword"]}
                  onChange={(e)=>onChangeUp("keyword", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker 
                      className="flex justify-around rounded-[24px] border-[1px] border-[#B5B6B7] bg-white px-5 pt-0"
                      onChange={(newValue) => {
                        onChangeUp("selectedDate", newValue);
                      }}
                      value={filterUp["selectedDate"]}
                      disablePast
                    />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="flex items-center p-0">
                <button className="w-[264px] hover:bg-[#009688] h-[47.92px] rounded-[24px] bg-primaryColor text-[17px] text-[#FFFFFF]" 
                  onClick={() => {
                    handleFilterUp();
                    setIsDrawerOpenUp(false)
                  }}
                >
                  Filter Now
                </button>
              </Grid>
            </Grid>
          </Drawer>
          <Grid container className="md:flex justify-between py-3 items-center hidden">
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''} onChange={(e) => onChangeUp("type", e.target.value)} value={filterUp["type"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Type of event</option>
                <option value="Bar party">Bar party</option>
                <option value="Club party">Club party</option>
                <option value="Warehouse rave">Warehouse rave</option>
                <option value="Outdoor rave">Outdoor rave</option>
                <option value="Megaclub party">Megaclub party</option>
                <option value="Pool party">Pool party</option>
                <option value="Block party">Block party</option>
                <option value="Rooftop party">Rooftop party</option>
                <option value="Other">Other</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChangeUp("music", e.target.value)} value={filterUp["music"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Music</option>
                <option value="Top 40">Top 40</option>
                <option value="EDM">EDM</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Techno/House">Techno/House</option>
                <option value="Hip-hop">Hip-hop</option>
                <option value="R&B">R&B</option>
                <option value="Dubstep">Dubstep</option>
                <option value="Latin">Latin</option>
                <option value="Salsa">Salsa</option>
                <option value="Reggaeton">Reggaeton</option>
                <option value="Country">Country</option>
                <option value="Jazz">Jazz</option>
                <option value="Metal">Metal</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChangeUp("age", e.target.value)} value={filterUp["age"]}  className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Age</option>
                <option value="18">18+</option>
                <option value="21">21+</option>
                <option value="30">30+</option>
                <option value="40">40+</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[115px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChangeUp("charge", e.target.value)} value={filterUp["charge"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Cover Charge</option>
                <option value="0">Free</option>
                <option value="5-15">$5-$15</option>
                <option value="20-30">$20-$30</option>
                <option value="30-50">$30-$50</option>
                <option value="50-80">$50-$80</option>
                <option value="80">$80+</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="w-[204px] h-[47.92px] rounded-[24px] border-[1px] border-[#B5B6B7] bg-white flex content-center my-5 px-5 pt-0">
              <select defaultValue={''}  onChange={(e) => onChangeUp("distance", e.target.value)} value={filterUp["distance"]} className="text-[17px] leading-[18.5px] text-[#000000] outline-none w-full">
                <option value="">Distance</option>
                <option value="1">1 mile</option>
                <option value="2-5">2-5 miles</option>
                <option value="5-10">5-10 miles</option>
                <option value="10-20">10-20 miles</option>
                <option value="20">20+ miles</option>
              </select>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
              <Input 
                className="h-[47.92px] rounded-[24px] bg-white px-7 md:text-[17px] text-[14px]"
                placeholder="Search by keyword"
                value={filterUp["keyword"]}
                onChange={(e)=>onChangeUp("keyword", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="h-[47.92px] content-center my-5">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker 
                    className="flex justify-around rounded-[24px] border-[1px] border-[#B5B6B7] bg-white px-5 pt-0"
                    onChange={(newValue) => {
                      onChangeUp("selectedDate", newValue);
                    }}
                    value={filterUp["selectedDate"]}
                    disablePast
                  />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={3} xl={3} sx={{ display: "flex" }} className="flex items-center p-0">
              <button className="w-[264px] hover:bg-[#009688] h-[47.92px] rounded-[24px] bg-primaryColor text-[17px] text-[#FFFFFF]" onClick={handleFilterUp}>
                Filter Now
              </button>
            </Grid>
          </Grid>
          <div className="md:hidden flex bg-white rounded-[3px] p-2 justify-between items-center mt-6">
            <p className="text-black text-[17px] leading-[18.5px] font-[400] ml-3">Filter by:</p>
            <div className="flex content-center bg-primaryColor w-[36px] h-[36px] justify-center rounded-[3px]" onClick={()=> {setIsDrawerOpenUp(true);}}>
              <Image
                src="/filter.svg"
                alt=""
                width={18.7}
                height={17}
              />
            </div>
          </div>
          {
            eventsUpFilter.map((event, index) => {
              if (index >= (pageNumberUp-1)*10 && index <= ((pageNumberUp)*10)-1) {
                const months = [
                  "January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
                ];
                
                const date = event["Event Date"];
                const weekNumber = getWeekOfYear(date);
                const weekName = getWeekName(weekNumber).substring(0, 3);
                const month = months[Number(date.split("-")[1])-1].substring(0, 3).toUpperCase();
                const day = date.split("-")[2];
                return (
                  <>
                    <div className="grid md:grid-cols-3 py-7">
                      <div className="md:flex md:justify-between lg:space-x-10 space-x-2 md:col-span-2">
                        <div className="flex justify-between lg:space-x-10 md:space-x-2">
                          <div className="bg-primaryColor mmd:w-[90px] mmd:h-[76.88px] w-[50px] h-[50px] content-center rounded-[4px]">
                            <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">{month}</p>
                            <p className="mmd:text-[25px] text-[15px] mmd:leading-[27px] leading-[17px] text-[#FFFFFF] text-center">{day}</p>
                          </div>
                          <div className="flex mb-2 md:hidden">
                            <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">{weekName} - {event["Time Start"]}</p>
                            <Image
                              src="/info.svg"
                              alt=""
                              width={18}
                              height={18}
                              className="h-fit"
                            />
                          </div>
                          <div className="md:h-full h-[100px] w-[100px] md:w-[150px] relative">
                            <Image
                              src={event["Event Image Link"]}
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              className="rounded-md"
                            />
                          </div>
                        </div>
                        <div className="w-full my-5 md:my-0">
                          <div className="md:flex mb-2 hidden">
                            <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mr-2">{weekName} - {event["Time Start"]}</p>
                            <Image
                              src="/info.svg"
                              alt=""
                              width={18}
                              height={18}
                            />
                          </div>
                          <div>
                            <p className="mmd:text-[23px] text-[16px] text-[#000000] mmd:leading-[25px] leading-[18px] my-2">
                              {event["Event Name"]}
                            </p>
                            <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">{event["Venue Name"]}</p>
                            <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] my-2">{event["Venue Address"]}</p>
                            <p className="mmd:text-[17px] text-[13px] mmd:leading-[18.5px] leading-[15px] text-[#7D7D7D] mt-2">{event["Venue City"]}, {event["Venue State"]}, {event["Zip Code"]}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:justify-end items-center col-span-1">
                        <button className="mmd:w-[245px] w-[145px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[14px] text-[#FFFFFF] mmd:leading-[18px] leading-[15px]">
                          BUY TICKET
                        </button>
                      </div>
                    </div>
                    <Image
                      src="/line.svg"
                      alt=""
                      width={1280}
                      height={3}
                    />
                  </>
                )
              }
            })
          }
          <div className="flex justify-center">
            <Stack spacing={2}>
              <Pagination
                count={eventsUpFilter.length === 0? 1: Math.ceil(eventsUpFilter.length/10)}
                onChange={handlePageUp}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </div>
        </div>
      </div>
      
      {/* Section 5 */}
      <div className=" max-w-[1280px] m-auto py-[90px] px-5">
        <div className="flex justify-center mb-5">
          <Image
            src="/house_party.svg"
            alt=""
            width={308}
            height={12}
          />
        </div>
        <div className="flex justify-center my-5">
          <p className="text-[37px] text-[#000000] leading-[49px] font-bold">In the Media</p>
        </div>
        <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-5">
          <div>
            <div>
              <Image
                src="/homeBg4_1.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/homeBg4_2.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/homeBg4_3.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/homeBg4_4.svg"
                alt=""
                width={302}
                height={229}
                className="w-full"
              />              
            </div>
            <div>
              <div className="mmd:flex my-2 items-center grid grid-rows-2">
                <div className="flex items-center">
                  <Image
                    src="/avatar1.svg"
                    alt=""
                    width={34}
                    height={34}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">Jenny kiaa</p>  
                </div>
                <div className="flex items-center mmd:pl-0 pl-2">
                  <Image
                    src="/h_line.svg"
                    alt=""
                    width={2}
                    height={12}
                    className="mx-3 mmd:flex hidden"
                  />
                  <Image
                    src="/calendar.svg"
                    alt=""
                    width={11}
                    height={12}
                  />
                  <p className="text-[#777777] text-[14px] leading-[14px] ml-2">02 April 2022</p>  
                </div>
              </div>
              <p className="text-[#010101] mmd:text-[21px] text-[17px] mmd:leading-[27px] leading-[20px] font-[500]">Grad your spot fast before all the seats fill up.</p>
              <p className="text-[#010101] mmd:text-[16px] text-[14px] mmd:leading-[22px] leading-[18px] font-[400] my-2">Grad your spot fast before all the seats fill up, don’t miss it.....</p>
              <div className="flex justify-start mt-2">
                <button className="mmd:w-[167px] w-[116px] mmd:h-[51px] h-[39px] rounded-[25px] bg-primaryColor mmd:text-[17px] text-[13px] text-[#FFFFFF] mmd:mt-5 mt-2 mmd:leading-[18.5px] leading-[14.14px] font-[600]">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      <div>
        <p>IP: {ip}</p>
        <p className="text-lg">Long1: {geo["lng"]}</p>
        <p className="text-lg">Lati1: {geo["lat"]}</p>
        <p className="text-lg">Long: {filter["lng"]}</p>
        <p className="text-lg">Lati: {filter["lati"]}</p>
      </div>
      </div>
    </div>
  );
}

export default Home;