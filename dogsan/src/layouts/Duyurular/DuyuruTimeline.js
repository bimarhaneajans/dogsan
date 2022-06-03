import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

import DuyuruDataService from "../../services/DuyuruService";
import DOMPurify from "dompurify";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function DuyuruTimeline() {
    const [duyuru, setDuyuru] = useState([]);
    useEffect(() => {

        retrieveDuyuru();
    }, []);



    const retrieveDuyuru = () => {
        DuyuruDataService.getAll()
            .then(response => {
                setDuyuru(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {duyuru.map(item => (
                <div key={item.id}>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                <div style={{color:"rgb(230 7 86)"}} dangerouslySetInnerHTML={{ __html:item.Tarih }}  ></div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <EventAvailableIcon style={{color:"#2f1be9"}} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '5px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                <div style={{color:"#428bca"}} dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(JSON.parse(item.baslik)) }}  />
                                </Typography>
                                 <Typography><div  style={{color:"#292929"}} dangerouslySetInnerHTML={{ __html: item.kisaaciklama }}  /></Typography>
                            </TimelineContent>
                        </TimelineItem>
                       {/*  <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                            >
                                10:00 am
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary">
                                    <LaptopMacIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Code
                                </Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <HotelIcon />
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Sleep
                                </Typography>
                                <Typography>Because you need rest</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                <TimelineDot color="secondary">
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    Repeat
                                </Typography>
                                <Typography>Because this is the life you love!</Typography>
                            </TimelineContent>
                        </TimelineItem> */}
                    </Timeline></div>))}</div>
    );
}
