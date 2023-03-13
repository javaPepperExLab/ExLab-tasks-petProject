import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, State } from '../store';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
