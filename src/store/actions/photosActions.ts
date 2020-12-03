import { createClient, PhotosWithTotalResults, ErrorResponse, Photos } from 'pexels'
import { ThunkAction } from 'redux-thunk'

import { RootState } from '../'
import { PhotosAction, GET_PHOTOS, SET_ERROR } from '../types'

const client = createClient(process.env.REACT_APP_PEXELS_API || '')

export const getPhotos = (
  page: number,
  searchQuery: string,
  onSuccess: () => void,
  onError: () => void
): ThunkAction<void, RootState, null, PhotosAction> => {}
