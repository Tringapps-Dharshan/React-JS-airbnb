import React from "react"
import { Card, Typography, CardContent, CardMedia } from "@mui/material"
import katiezaferes from '../asserts/katie-zaferes.webp'
import star from '../asserts/star.png'
export default function DisplayCard(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <Card sx={{ maxWidth: 180, maxHeight: 350 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={katiezaferes}
                    alt={`${props.title}`}
                    sx={{ borderRadius: '5px' }}

                />
                <CardContent sx={{ padding: '10px' }}>
                    <Typography variant="body2" className="card-content">
                        {badgeText && <span className="badge">{badgeText}</span>}
                        {!badgeText && <span className="badge">LOADING</span>}
                    </Typography>
                    <Typography variant="body2" className="card-content">
                        <span>
                            <img src={star} className='rating-star' />
                            {props.stats.rating}
                            ({props.stats.reviewCount}) • {props.location}
                        </span>
                    </Typography>
                    <Typography variant="body2" className="card-content">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" className="card-content">
                        <span className="bold">From ${props.price} </span>/ person
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}