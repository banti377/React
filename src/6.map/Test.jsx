import React from 'react'
import Card from "./Card";
import './map.css'


let data = [
    {
        city: "Delhi",
        "country": "India",
        "iso2": "IN",
        statename: "Delhi",
        "capital": "admin",
        "population": "32226000"
    },
    {
        city: "Mumbai",
        "country": "India",
        "iso2": "IN",
        statename: "Mahārāshtra",
        "capital": "admin",
        "population": "24973000"
    },
    {
        city: "Kolkāta",
        "country": "India",
        "iso2": "IN",
        statename: "West Bengal",
        "capital": "admin",
        "population": "18502000"
    },
    {
        city: "Bangalore",
        "country": "India",
        "iso2": "IN",
        statename: "Karnātaka",
        "capital": "admin",
        "population": "15386000"
    },
    {
        city: "Chennai",
        "country": "India",
        "iso2": "IN",
        statename: "Tamil Nādu",
        "capital": "admin",
        "population": "12395000"
    },
    {
        city: "Hyderābād",
        "country": "India",
        "iso2": "IN",
        statename: "Telangāna",
        "capital": "admin",
        "population": "10494000"
    },
    {
        city: "Pune",
        "country": "India",
        "iso2": "IN",
        statename: "Mahārāshtra",
        "capital": "",
        "population": "8231000"
    },
    {
        city: "Ahmedabad",
        "country": "India",
        "iso2": "IN",
        statename: "Gujarāt",
        "capital": "minor",
        "population": "8009000"
    },
    {
        city: "Sūrat",
        "country": "India",
        "iso2": "IN",
        statename: "Gujarāt",
        "capital": "",
        "population": "6538000"
    },
    {
        city: "Prayagraj",
        "country": "India",
        "iso2": "IN",
        statename: "Uttar Pradesh",
        "capital": "",
        "population": "5954391"
    },
    {
        city: "Lucknow",
        "country": "India",
        "iso2": "IN",
        statename: "Uttar Pradesh",
        "capital": "admin",
        "population": "3382000"
    },
    {
        city: "Jaipur",
        "country": "India",
        "iso2": "IN",
        statename: "Rājasthān",
        "capital": "admin",
        "population": "3073350"
    },
    {
        city: "Cawnpore",
        "country": "India",
        "iso2": "IN",
        statename: "Uttar Pradesh",
        "capital": "",
        "population": "2701324"
    },
    {
        city: "Mirzāpur",
        "country": "India",
        "iso2": "IN",
        statename: "Uttar Pradesh",
        "capital": "",
        "population": "2496970"
    },
    {
        city: "Nāgpur",
        "country": "India",
        "iso2": "IN",
        statename: "Mahārāshtra",
        "capital": "admin",
        "population": "2405665"
    }
];


export default function Map() {
    return (
        <>
            {data.map((e) => {
                return <Card city={e.city} statename={e.statename} />;
            })}
        </>
    )
}