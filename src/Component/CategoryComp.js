import React,{useContext,useRef} from 'react'
import NoteContext from '../contextApi/NoteContext'

function CategoryComp({a}) {
    const Context  = useContext(NoteContext)
    const { ChangeItem } = Context;
    const inputEl = useRef(null);
    function search_btn() {
        
        // inputEl.current.classList.add('active');
        ChangeItem(a)
        
    }
  return (
    <a href="#" onClick={search_btn} ref={inputEl}>{a}</a>
  )
}

export default CategoryComp