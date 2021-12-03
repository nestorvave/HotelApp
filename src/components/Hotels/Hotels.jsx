import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { HotelCard } from "../HotelCard/HotelCard";
import hotelsData from "../../assets/helpers/data";
import "./hotels.scss";
import { MsgWarning } from "../MsgWarning/MsgWarning";
import { Footer } from "../Footer/Footer";

export const Hotels = () => {
  const {
    hotel,
    setHotel,
    country,
    price,
    size,
    avaliable,
    setAvaliable,
    setEffect,
    effect,
  } = useContext(DataContext);
  let { roomfrom, roomto } = size;
  let { from, to } = avaliable;

  const filterCountry = (country, hotelsData) => {
    let hotels;
    country === false
      ? (hotels = hotelsData)
      : (hotels = hotelsData.filter((item) => {
          return item.country === country;
        }));
    return hotels;
  };

  const filterPrice = (price, hotelsData) => {
    let hotels;
    price === false
      ? (hotels = hotelsData)
      : (hotels = hotelsData.filter((item) => {
          return item.price === price;
        }));
    return hotels;
  };

  const filterSize = (roomfrom, roomto, hotelsData) => {
    let hotels;
    if (roomfrom === false && roomto === false) {
      hotels = hotelsData;
    } else {
      hotels = hotelsData.filter((item) => {
        return item.rooms >= roomfrom && item.rooms <= roomto;
      });
    }
    return hotels;
  };

  const filterDate = (from, to, hotelsData) => {
    let hotels;
    if (from === false || to === false) {
      hotels = hotelsData;
    } else {
      if (from > to) {
        hotels = hotelsData;
        setAvaliable({
          ...avaliable,
          from: false,
          to: false,
          statusTo: "",
          statusFrom: "",
        });
        setEffect({
          ...effect,
          status: true,
          title: "WARNING!",
          image: "warning",
          p: "Choose the dates correctly!",
        });
        return hotels;
      } else {
        hotels = hotelsData.filter((item) => {
          return (
            from > item.availabilityFrom / 1000 &&
            to < item.availabilityTo / 1000
          );
        });
      }
    }
    return hotels;
  };

  useEffect(() => {
    let filterSelected;
    filterSelected = filterCountry(country, hotelsData);
    filterSelected = filterPrice(price, filterSelected);
    filterSelected = filterSize(roomfrom, roomto, filterSelected);
    filterSelected = filterDate(from, to, filterSelected);
    setHotel(filterSelected);
  }, [country, price, size, avaliable, from, roomfrom, to, setHotel, roomto]);

  return (
    <section
      className={`
    ${hotel.length > 0 ? "allHotels" : "without-information"} 
 `}
    >
      {effect.status && (
        <MsgWarning title={effect.title} image={effect.image} p={effect.p} />
      )}
      {hotel.length > 0 ? (
        hotel.map(
          (
            {
              slug,
              name,
              photo,
              description,
              rooms,
              city,
              country,
              price,
              availabilityFrom,
              availabilityTo,
            },
            index
          ) => {
            return (
              <HotelCard
                key={index}
                name={name}
                slug={slug}
                photo={photo}
                description={description}
                rooms={rooms}
                city={city}
                country={country}
                price={price}
                availabilityFrom={availabilityFrom}
                availabilityTo={availabilityTo}
              />
            );
          }
        )
      ) : (
        <h3>Sorry we can´t find hotels with your filters selected :(</h3>
      )}

      <Footer />
    </section>
  );
};
