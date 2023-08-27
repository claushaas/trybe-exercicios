import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type Character = {
	url: string,
	name: string,
	gender: string,
	culture: string,
	born: string,
	died: string,
	titles: string[],
	aliases: string[],
	father: string,
	mother: string,
	spouse: string,
	allegiances: string[],
	books: string[],
	povBooks: string[],
	tvSeries: string[],
	playedBy: string[],
}

export type ReduxState = {
  isFetching: boolean,
  characterData: Character,
  errorMessage: string,
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;