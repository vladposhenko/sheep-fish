import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit'

type AppDispatch = ThunkDispatch<any, undefined, AnyAction> & Dispatch<any>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
