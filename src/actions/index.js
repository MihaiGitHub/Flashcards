// Action creator function; Could have many action creator functions below
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
}