import React from "react";
import { useState } from "react";
import css from "./App.module.css";
import "./App.module.css"


function App() {
  
  const [text, setText] = useState("")
  const [isEmpty, setIsEmpty] = useState(true)
  const [inputText, setInputText] = useState(false)
  const [inputTouch, setInputTouch] = useState("Поле ввода не должно быть пустым")
  const [addlist, setAddList] = useState([
    'qwer', 'lorem', 'saba'
  ]);
  

  const handleSettext = (e) => {
      setText(e.target.value)
      if(text){
        setIsEmpty(false)
      }
  }
  
  const handleSubmit = (e) => {
  e.preventDefault();
  setAddList([...addlist, text])
  setText("")
  setInputTouch("")
  setIsEmpty(true)
  }
  

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "input":
      setInputText(true)
      setInputTouch("Поле ввода не должно быть пустым")
    break
    }
    
  }

  const handleDelete = (id) => {
    setAddList(addlist.filter((item, index) => {
      if(index !== id) {
      return item
      }
      
    })
    )
  }


  return (
    <div className={css.container}>
      <form className={css.form}>
        <input placeholder="Введите текст.." className={css.input} onBlur={(e) => blurHandler(e)} name="input" type="text" value={text} onChange={handleSettext} />
        <button className={css.btn} disabled={isEmpty} onClick={handleSubmit} type="submit">Отправить</button>
        {text.length > 0 ? null : (inputTouch && inputText) && <div className={css.pole} style={{color:"red"}}>{inputTouch}</div>}
      </form>
      <div className={css.addList}>{addlist.map((item, id) => {
        return (
          <div className={css.items} key={id}>
            {item}
          <button className={css.btn_item} onClick={() => handleDelete(id)}>x</button>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
