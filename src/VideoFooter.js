import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter({tag, discrption, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{tag}</h3>
                <p>{discrption}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img 
                className="videoFooter__record"
                src="http://static.thenounproject.com/png/934821-200.png"
                alt="avatar"
            />
        </div>
    )
}

export default VideoFooter;
