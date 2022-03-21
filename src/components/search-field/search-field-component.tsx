import React, {useState} from "react";
import { getList } from "../../services/apple-music-service";
import { TextField } from "@mui/material";
import { connect } from "react-redux";
import { getListOfAlbums } from "../../store/actions";

interface ISearchFieldProps {
    albums: string[],
    getListOfAlbums: (param: string[]) => {}
}
const SearchFieldComponent: React.FC<ISearchFieldProps> = (props) => {
    const [search, setSearch] = useState<string>('');
    const { albums, getListOfAlbums} = props;
    
    const go = () => {
        getListOfAlbums([]);
        if (search.length >= 3) {
            getList(search).then((data: { results: { collectionName: string; }[]; }) => {
                    const sortedData = data.results
                        .map((el: { collectionName: string; }) => el.collectionName)
                        .sort((a: string, b: string) => a.localeCompare(b))
                    const albumSet = new Set(sortedData); // to be on the safe side, there is possible duplicates?
                    const result = Array.from(albumSet).slice(0, 5);
                    props.getListOfAlbums(result)
                }
            );
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setSearch(e.target.value); // debounce can be added
    };

    return (
        <>
            <TextField
                id="outlined-basic"
                label="Search Band"
                variant="outlined"
                onChange={(e) => handleChange(e)}
            />
            <button onClick={go}>go</button>
        </>

    );
};

const mapStateToProps = (state: AlbumState) => {
    return {
        albums: state.albums,
    };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any): {} => {
    return {
        getListOfAlbums: (data: string[]) => dispatch(getListOfAlbums(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFieldComponent);
