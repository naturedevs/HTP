"use client";
import { useEffect, useState, useCallback } from "react";
import EventItem from "@/components/home/EventItem";
import MySelect from "@/components/MySelect";
import "@/styles/home.css";
import { NextPageContext } from "next";
import Select from "@/components/Select";
import Select2 from "@/components/Select2";
import Select3 from "@/components/Select3";
import Select4 from "@/components/Select4";
import moment from "moment";
import Options from "@/components/Options";
import axios from "axios";
import {useRouter} from 'next/navigation';

export default function Home() {
	const router = useRouter();
  const banner_backImageUrl = "/homeBg1.png";

  const [events, setEvents] = useState<any>([]);
  const [eTypes, setETypes] = useState<any>([]);
  const [mTypes, setMTypes] = useState<any>([]);
  const [aTypes, setATypes] = useState<any>([]);
  const [cCharges, setCCharges] = useState<any>([]);
  const [distances, setDistances] = useState<any>([]);

  const [eType, setEType] = useState<any>(null);
  const [mType, setMType] = useState<any>(null);
  const [aType, setAType] = useState<any>(null);
  const [keyword, setKeyword] = useState<any>(null);
  const [date, setDate] = useState<any>(null);
  const [cCharge, setCCharge] = useState<any>(null);
  const [distance, setDistance] = useState<any>(null);

  const [location, setLocation] = useState<any>(null);
  const [comLocation, setComLocation] = useState<any>(null);
  const [locaDisatance, setLocaDistance] = useState<any>(null);

  const [locations, setLocations] = useState<any>([1, 2]);

  const fetchAction = async () => {
    try {
      fetchEvents();
      const e_types_response = await fetch("/api/events/getEventTypes");
      if (e_types_response.ok) {
        const data = await e_types_response.json();
        setETypes(data);
      } else {
        const err = await e_types_response.json();
        console.log(err);
      }
      const m_types_response = await fetch("/api/events/getMusicTypes");
      if (m_types_response.ok) {
        const data = await m_types_response.json();
        setMTypes(data);
      } else {
        const err = await m_types_response.json();
        console.log(err);
      }
      const a_types_response = await fetch("/api/events/getAgeTypes");
      if (a_types_response.ok) {
        const data = await a_types_response.json();
        setATypes(data);
      } else {
        const err = await a_types_response.json();
        console.log(err);
      }
      const c_charges_response = await fetch("/api/events/getCCharges");
      if (c_charges_response.ok) {
        const data = await c_charges_response.json();
        setCCharges(data);
      } else {
        const err = await c_charges_response.json();
        console.log(err);
      }
      const distance_response = await fetch("/api/events/getDistances");
      if (distance_response.ok) {
        const data = await distance_response.json();
        setDistances(data);
      } else {
        const err = await distance_response.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const minDate = moment(new Date()).format("YYYY-MM-DD");

  useEffect(() => {
    fetchAction();
  }, []);

  const fetchCities = async () => {
    try {
      console.log("ok");
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: location,
            key: "AIzaSyD5SWtYvepl_a7bHPs9S2dUSCYVF6Whgmg",
          },
        }
      );

      if (response.data.status === "OK") {
        let _locations = response.data.results;
        setLocations(_locations);
      } else {
        setLocations([]);
        throw new Error("Error fetching cities");
      }
    } catch (err) {
      console.error(err);
      setLocations([]);
    }
  };
  useEffect(() => {
    fetchCities();
  }, [location]);

  const fetchEvents = useCallback(async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const c_charge = cCharge
              ? cCharge == 0
                ? { from: 0, to: 0 }
                : cCharge == cCharges.length
                ? {
                    from: cCharges[cCharges.length - 1].name,
                    to: cCharges[cCharges.length - 1].name,
                  }
                : {
                    from: cCharges[cCharge - 1].name,
                    to: cCharges[cCharge].name,
                  }
              : cCharge;
            const _distance = distance
              ? distance == 0
                ? { from: 0, to: distances[0].name }
                : distance == distances.length
                ? {
                    from: distances[distances.length - 1].name,
                    to: distances[distances.length - 1].name,
                  }
                : {
                    from: distances[distance - 1].name,
                    to: distances[distance].name,
                  }
              : distance;
            const payload = {
              e_type: eType,
              m_type: mType,
              a_type: aType,
              c_charge: c_charge,
              distance: _distance,
              location: {
                long: longitude,
                lati: latitude,
              },
              keyword: keyword,
              date: date,
            };
			console.log(payload)

            const response = await fetch("/api/events/getAllEvents", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            });
            if (response.ok) {
              const data = await response.json();
              setEvents([...data]);
            } else console.log("error");
          },
          (err) => {
            console.log(err);
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  }, [eType, mType, aType, cCharge, distance, keyword, date]);

  const filter = () => {
    fetchEvents();
  };
  const letsGo = async () => {
	const _distance = locaDisatance
	? locaDisatance == 0
	  ? { from: 0, to: distances[0].name }
	  : distance == distances.length
	  ? {
		  from: distances[distances.length - 1].name,
		  to: distances[distances.length - 1].name,
		}
	  : {
		  from: distances[locaDisatance - 1].name,
		  to: distances[locaDisatance].name,
		}
	: locaDisatance;
	console.log(comLocation)
    const payload = {
      distance: _distance,
      location: {
        long: comLocation.geometry.location.lng,
        lati: comLocation.geometry.location.lat,
      },
    };
	console.log(payload)
    const response = await fetch("/api/events/getAllEvents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const data = await response.json();
      setEvents([...data]);
	//   router.push('#events')
    } else console.log("error");
  };
  return (
    <>
      {/* banner start */}
      <div
        className="md:w-full md:h-[839px] w-full h-[531px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner_backImageUrl})` }}
      >
        <div className="max-w-[1280px] w-full h-full mx-auto justify-between px-[15px] flex">
          <div className="flex-1 h-full flex items-center">
            <div className="flex flex-col">
              <div className="flex space-x-2">
                <div className="flex items-center">
                  <hr className="md:w-[139px] w-[84px] border-t-1 border-primaryColor" />
                </div>
                <p className="md:font-[600] md:text-[18px] md:leading-[18px] font-[600] text-[14px] leading-[18px] text-primaryColor">
                  HOUSETHEPARTY
                </p>
              </div>
              <p className="md:font-[700] md:text-[110px] md:leading-[110px] font-[700] text-[45px] leading-[45px]">
                <span className="text-white">FIND</span>&nbsp;
                <span className="text-primaryColor">MORE</span>
                <br />
                <span className="text-primaryColor">OF THE</span>&nbsp;
                <span className="text-white">PARTY</span>
                <br />
                <span className="text-white">NEAR YOU</span>
              </p>
            </div>
          </div>
          <div className="md:w-[410px] h-full flex items-center">
            <div className="bg-black bg-opacity-50 rounded-[30px] pt-10 pb-10 pl-5 pr-5">
              <p className="md:font-[500] md:text-[21px] md:leading-[30px] font-[500] text-[17px] leading-[25px] text-white line-clamp-3">
                Search parties happening in your city today, tomorrow, and this
                weekend.
              </p>
              <hr className="w-[42px] border-[3px] border-primaryColor mt-5" />
              <div className="relative">
                <input
                  type="text"
                  className="w-full md:h-[63px] h-[45px] rounded-[31.5px] p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 pl-5 mt-5"
                  placeholder="Enter City/ZipCode"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Options
                  data={locations && locations}
                  setPosition={(p) => {
					console.log(p)
                    setLocation(p.formatted_address);
					setComLocation(p);
                    let x = [];
                    setLocations(x);
                  }}
                />
              </div>

              <Select4
                value={locaDisatance}
                onSelect={(v) => setLocaDistance(v)}
                placeHolder={"Distance"}
                options={distances}
              />
              <button
                className="w-full md:h-[63px] h-[45px] rounded-[31.5px] bg-primaryColor text-[17px] text-[#FFFFFF] mt-5"
                onClick={() => letsGo()}
              >
                LET'S GO!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      <div className="w-full bg-[#F5F5F5] pt-10 pb-10">
        <div className="max-w-[1280px] w-full mx-auto justify-between px-[15px] flex">
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="h-full flex space-x-2">
              <div className="flex items-center">
                <hr className="md:w-[139px] w-[84px] border-t-1 border-primaryColor" />
              </div>
              <p className="md:font-[600] md:text-[18px] md:leading-[18px] font-[600] text-[14px] leading-[18px] text-primaryColor">
                HOUSETHEPARTY
              </p>
            </div>
            <div className="mt-2 md:mt-3">
              <p className="md:font-[700] md:text-[37px] md:leading-[49px] font-[700] text-[22px] leading-[27px] text-black" id="events">
                Parties Happening Around You Now
              </p>
            </div>
            <div className="mt-2 md:mt-3">
              <p className="md:font-[400] md:text-[17.5px] md:leading-[18px] font-[400] text-[17.5px] leading-[18px] text-black line-clamp-1">
                Here’s a list of upcoming events by our band in different
                locations. Please choose a location near to you. We’re thrilled
                to see you there. Let’s rock!
              </p>
            </div>

            <div className="mt-2 md:mt-3 flex flex-wrap  w-full gap-3">
              <Select
                value={eType}
                onSelect={(v) => setEType(v)}
                placeHolder={"Type Of Event"}
                options={eTypes}
              />
              <Select
                value={mType}
                onSelect={(v) => setMType(v)}
                placeHolder={"Music"}
                options={mTypes}
              />
              <Select
                value={aType}
                onSelect={(v) => setAType(v)}
                placeHolder={"Age"}
                options={aTypes}
              />
              <Select2
                value={cCharge}
                onSelect={(v) => setCCharge(v)}
                placeHolder={"Cover Charge"}
                options={cCharges}
              />
              <Select3
                value={distance}
                onSelect={(v) => setDistance(v)}
                placeHolder={"Distance"}
                options={distances}
              />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="search by keyword"
                className=" bg-white mt-0 mmd:h-[64px] h-[45px] border pl-[22px] text-[17px] pr-[22px] w-[300px] rounded-full"
              />
              <input
                type="date"
                value={date}
                min={minDate}
                className=" bg-white mt-0 mmd:h-[64px] h-[45px] border pl-[22px] text-[17px] pr-[22px] w-[300px] rounded-full"
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                className="md:h-[51px]  rounded-[25.5px] bg-primaryColor text-[17px] text-[#FFFFFF] w-[300px] items-center h-[64px] filter-btn"
                onClick={() => {
                  filter();
                }}
              >
                Filter Now
              </button>
            </div>

            <div className="w-full mt-5">
              {events &&
                events.map((event, index) => (
                  <EventItem key={index} event={event}></EventItem>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
