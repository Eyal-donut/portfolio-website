import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface MenuDisplayState {
  value: boolean
}
const initialState: MenuDisplayState = {
  value: false,
}

export const menuDisplaySlice = createSlice({
  name: 'menuDisplay',
  initialState,
  reducers: {
    setMenuDisplay: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setMenuDisplay } = menuDisplaySlice.actions

export default menuDisplaySlice.reducer