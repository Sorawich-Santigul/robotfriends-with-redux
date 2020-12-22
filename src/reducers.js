import {CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
        } from './constants.js'

const intialStateSearch = {
	searchField:''
}

export const searchRobot = (state=intialStateSearch,action={})=>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
		  return Object.assign({},state,{searchField:action.payload});
		default:
		  return state
	}
}

const intialStateRobots = {
	IsPending:true,
	robots:[],
	error:''
}

export const requestRobots = (state=intialStateRobots,action={})=>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
		  return Object.assign({},state,{IsPending:true});
		case REQUEST_ROBOTS_SUCCESS:
		  return Object.assign({},state,{robots:action.payload,IsPending:false});
		case REQUEST_ROBOTS_FAILED:
		  return Object.assign({},state,{error:action.payload,IsPending:false});  
		default:
		  return state
	}
}
