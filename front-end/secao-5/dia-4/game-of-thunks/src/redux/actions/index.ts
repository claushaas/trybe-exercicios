import { Character, Dispatch } from "../../types"

export const CHARACTER_REQUEST_STARTED = 'CHARACTER_REQUEST_STARTED'
export const CHARACTER_REQUEST_SUCCESSFULL = 'CHARACTER_REQUEST_SUCCESSFULL'
export const CHARACTER_REQUEST_FAILED = 'CHARACTER_REQUEST_FAILED'

export const characterRequestStarted = () => ({
  type: CHARACTER_REQUEST_STARTED,
})

export const characterRequestFailed = (error: string) => ({
  type: CHARACTER_REQUEST_FAILED,
  payload: {
    error,
  }
})

export const characterRequestSuccessfull = (character: Character) => ({
  type: CHARACTER_REQUEST_SUCCESSFULL,
  payload: character,
})

export const fetchCharacterInfo = (characterName: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(characterRequestStarted())
    const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`)
    const data = await response.json();
    dispatch(characterRequestSuccessfull(data[0]))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    dispatch(characterRequestFailed(error.message))
  }
}