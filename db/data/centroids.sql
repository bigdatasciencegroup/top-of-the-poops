DROP TABLE IF EXISTS centroids CASCADE;

create table centroids
(
    Y         numeric,
    X         numeric,
    objectid  numeric,
    pcd       text,
    pcd2      text,
    pcds      text,
    dointr    numeric,
    doterm    numeric,
    oscty     text,
    ced       text,
    oslaua    text,
    osward    text,
    usertype  text,
    oseast1m  text,
    osnrth1m  text,
    osgrdind  text,
    oshlthau  text,
    nhser     text,
    ctry      text,
    rgn       text,
    streg     text,
    pcon      text,
    eer       text,
    teclec    text,
    ttwa      text,
    pct       text,
    statsward text,
    oa01      text,
    casward   text,
    park      text,
    lsoa01    text,
    msoa01    text,
    ur01ind   text,
    oac01     text,
    oa11      text,
    lsoa11    text,
    msoa11    text,
    parish    text,
    wz11      text,
    ccg       text,
    bua11     text,
    buasd11   text,
    ru11ind   text,
    oac11     text,
    lat       numeric,
    long      numeric,
    lep1      text,
    lep2      text,
    pfa       text,
    imd       numeric,
    calncv    text,
    stp       text,
    itl       text
)