interface IAlbum {
  wrapperType?: string;
  kind?: string;
  artistId?: number;
  collectionId?: number;
  trackId?: number;
  artistName?: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredNameL?: string;
  collectionArtistId?: number;
  collectionArtistName?: number;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl?: string;
  previewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  releaseDate?: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country?: string;
  currency?: string;
  primaryGenreName?: string;
  isStreamable?: boolean;
}

type AlbumState = {
  albums: string[] | [];
  searchParam: string
};

type AlbumAction = {
  type: string;
  album: IAlbum;
  payload: any
};

type DispatchType = (args: AlbumAction) => AlbumAction;
