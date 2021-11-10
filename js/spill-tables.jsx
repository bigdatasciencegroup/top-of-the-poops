import {LoadingTable} from "./tables";
import * as React from "react";

const formatNumber = n => n.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});

const renderNumericCell = ({value}) => formatNumber(value)

const ShellfishSewage = () => {
  const url = "data/generated/shellfish-sewage.json"
  const columns = [
    {title: "Company", accessor: "company_name"},
    {title: "Shellfishery Area", accessor: "shellfishery"},
    {title: "Sewage Incidents", accessor: "total_count", Cell: renderNumericCell},
    {title: "Hours of Sewage", accessor: "total_hours", Cell: renderNumericCell},
  ]
  return <LoadingTable url={url} columns={columns}/>
}


const BathingSewage = () => {
  const url = "data/generated/bathing-sewage.json"
  const columns = [
    {title: "Company", accessor: "company_name"},
    {title: "Beach", accessor: "bathing"},
    {title: "Sewage Incidents", accessor: "total_count", Cell: renderNumericCell},
    {title: "Hours of Sewage", accessor: "total_hours", Cell: renderNumericCell},
  ]
  return <LoadingTable url={url} columns={columns}/>
}

const SpillsByRiver = () => {
  const url = "data/generated/spills-by-river.json"
  const columns = [
    {title: "Company", accessor: "company_name"},
    {title: "River", accessor: "river_name"},
    {title: "Sewage Incidents", accessor: "total_count", Cell: renderNumericCell},
    {title: "Hours of Sewage", accessor: "total_hours", Cell: renderNumericCell},
  ]
  return <LoadingTable url={url} columns={columns}/>
}

const SpillsByWaterType = () => {
  const url = "data/generated/spills-by-water-type.json"
  const columns = [
    {title: "Water Type", accessor: "water_type"},
    {title: "Sewage Incidents", accessor: "total_count", Cell: renderNumericCell},
    {title: "Hours of Sewage", accessor: "total_hours", Cell: renderNumericCell},
  ]
  return <LoadingTable url={url} columns={columns}/>
}

const tweetURI = ({uri, text, tags, via}) => {
  return "https://twitter.com/intent/tweet?url=" + uri + "&text=" + encodeURIComponent(text) + "&hashtags=" + tags.join(",") + "&via=" + via;
}

const tweetTextFromRow = (row) => {
  const constituency = row.original.constituency
  const events = formatNumber(row.original.total_spills)
  const company = row.original.company
  const mp = row.original.twitter_handle
  return `Horrified that ${constituency} had ${events} sewage dumps in 2020 - by ${company} - ${mp} - are you taking action?`
}

const renderMPCell = ({value, row}) => {
  const uri = "https://top-of-the-poops.org"
  const text = tweetTextFromRow(row)
  const tags = ["sewage"]
  const via = "sewageuk"
  const handle = row.original.twitter_handle

  const tweet = handle ? <a href={tweetURI({uri:uri, text:text, tags:tags, via:via})}>Tweet</a> : <span></span>

  return <div>
    <a href={row.original.mp_uri}>{value}</a>
    {tweet}
  </div>
}

const SpillsByConstituency = () => {
  const spillsByConstituencyURL = "data/generated/spills-by-constituency.json"
  const columns = [
    {title: "Constituency", accessor: "constituency"},
    {title: "MP Name", accessor: "mp_name", Cell: renderMPCell},
    {title: "Party", accessor: "mp_party"},
    {title: "Company", accessor: "company"},
    {title: "Sewage Incidents", accessor: "total_spills", Cell: renderNumericCell},
    {title: "Hours of Sewage", accessor: "total_hours", Cell: renderNumericCell},
  ]
  return <LoadingTable url={spillsByConstituencyURL} columns={columns}/>
}

export {SpillsByWaterType, SpillsByConstituency, SpillsByRiver, ShellfishSewage, BathingSewage}