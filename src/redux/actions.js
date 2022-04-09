import { nanoid } from "nanoid"
import { createAction } from "@reduxjs/toolkit"
import types from "./types"


    export function addContact(name, number){
return{
    type: types.ADD,
    payload: {
        id: nanoid(),
        name: name,
        number: number
    }
}
    }

    export function deleteContact(contactId){
return {
    type: types.DELETE,
    payload: contactId
}
    }


    export function changeFilter(event){
        return{
            type: types.CHANGE_FILTER,
            payload: event
        }
    }

