import React from "react";
import { Button, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";


interface IViewBlockProps {
    albums: string[],
    searchParam: string,
}
const ViewBlockComponent: React.FC<IViewBlockProps> = (props) => {
    const [listOfElements, setListOfElements] = useState(["A", "B", "C", "D", "E"]);
    const [albumsQueue, setAlbumsQueue] = useState<Array<string>>([]);
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    const { albums } = props;

    useEffect(() => {
        if (albums) {
            setAlbumsQueue(albums);
        }
    }, [albums]);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            rotate();
        }, 1000) as ReturnType<typeof setInterval>;

        return () => {
            clearInterval(timerRef.current as ReturnType<typeof setInterval>);
        };
    }, []);

    const rotate = () => {
        let nextAlbum: string; // is not good practice, I know, it will be better to do something similar but without side effects of setState callback
        setAlbumsQueue((prevQueue: any) => {
            if (prevQueue.length) {
                const [firstEl, ...rest] = prevQueue;
                nextAlbum = firstEl;
                return rest || [];
            }
            return prevQueue;
        })
        setListOfElements((prevList: any) => {
            let [firstEl, ...rest] = prevList;
            const last = nextAlbum ? nextAlbum : firstEl;
            return [...rest, last];
        });
    };

    const elementsToRender = listOfElements.map((el) => {
        return (
            <Button variant="contained" key={el}>
                {el}
            </Button>
        );
    })
    return (
        <Stack spacing={2}>
            {elementsToRender}
        </Stack>
    );
};

const mapStateToProps = (state: AlbumState) => {
    return {
        albums: state.albums,
        searchParam: state.searchParam
    };
}

export default connect(mapStateToProps)(ViewBlockComponent);