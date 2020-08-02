import React from "react";
import { VisibilityFilters, setVisibilityFilter } from "../actions";
import { useDispatch } from "react-redux";
const Footer = ()=>{ 
    const dispatch = useDispatch();
    return (
        <div>
            <button 
                onClick={
                    ()=>dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
                        }
            > 
                All 
            </button>
            <button 
                onClick={
                    ()=>dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
                        }
            > 
                Completed 
            </button>
            <button 
                onClick={
                    ()=>dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
                        }
            > 
                Active 
            </button>
        </div>
    )
}

export default Footer;