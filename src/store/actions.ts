const getListOfAlbums = (data: string[]) => {
    return {
        type: 'FETCH_ALBUMS',
        payload: data
    }
}

const setSearchParam = (searchValue: string) => {
    return {
        type: 'SET_SEARCH_PARAM',
        payload: searchValue
    }
}

export {
    getListOfAlbums,
    setSearchParam
}