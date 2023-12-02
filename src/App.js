// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import Alert from './components/Alert';
// import List from './components/List';

// function App() {
//   const getLocalStorage=()=>{
//     let list=localStorage.getItem("list");
//     if(list){
//       return (list =JSON.parse(localStorage.getItem("list")))
//     }else{
//       return []
//     }
//   }
//   const inputArr = [{}];

//     const [arr, setArr] = useState(inputArr);
//   const [name, setName] = useState("")
//   const [list, setList] = useState(getLocalStorage)
//   const [isEditing, setIdEditing] = useState(false)
//   const [editID, setEditID] = useState(null)
//   const [alert, setAlert] = useState({ show: false, msg: "", type: "" })

//   useEffect(()=>{
//     localStorage.setItem("list",JSON.stringify(list))
//   },[list])

//   const addField = () => {
//     setArr([...arr, inputArr])
// };
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     if(!name){
//       showAlert(true,"danger","Please Enter Value");
//     } else if(name && isEditing){
//       setList(
//         list.map((item)=>{
//           if(item.id === editID){
//             return {...item,title:name}
//           }
//           return item;
//         })
//       )
//       setName("")
//       setEditID(null)
//       setIdEditing(false)
//       showAlert(true,"success","Value Changes")
//     }else{
//       showAlert(true,"success","Item Added to the List")
//       const newItem={id:new Date().getTime().toString(),title:name};
//       setList([...list,newItem])
//       setName("");
//     }
//   }
//   const showAlert=(show=false,type="",msg="")=>{
// setAlert({show,type,msg})
//   }
//   const removeItem=(id)=>{
//     showAlert(true,"danger","Item Removed")
//     setList(list.filter((item)=>item.id!==id))
//   }
//   const editItem=(id)=>{
//     const editItem=list.find((item)=>item.id===id)
//     setIdEditing(true)
//     setEditID(id)
//     setName(editItem.title)
//   }
//   const clearList=()=>{
//     showAlert(true,"danger","Empty List")
//     setList([])
//   }
//   return (
//     <section className='section-center'>
//       <form onSubmit={handleSubmit}>
//         {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
//         <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
//           Todo List using Local Storage
//         </h3>
//         <div className='mb-3 form'>
//           <input type='text'
//            className='form-control'
//             placeholder='e.g. Bread'
//              onChange={(e) => setName(e.target.value)} 
//              value={name} />
//              <button type='submit' className='btn btn-success'>
//               {isEditing ? "Edit" : "Submit"}
//              </button>
           
//         </div>
//       </form>
//       {list.length>0 && (
//         <div style={{marginTop:"2rem"}}>
//           <List items={list} removeItem={removeItem} editItem={editItem}/>
//           <div className='text-center'>
//             <button className='btn btn-warning' onClick={clearList}>Clear Items</button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default App;




import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import List from './components/List';

function App() {
  const getLocalStorage=()=>{
    let list=localStorage.getItem("list");
    if(list){
      return (list =JSON.parse(localStorage.getItem("list")))
    }else{
      return []
    }
  }

  
  const [name, setName] = useState("")
  const [list, setList] = useState(getLocalStorage)
  const [isEditing, setIdEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" })
  const [showVal,setShowval]=useState(getLocalStorage)
  const [formVal,setFormVal]=useState([{
    fName:'',
    lName:'',
    email:'',
    phone:''
}])
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(formVal))
  },[formVal])

  
  const handleChange = (e, i) => {
    let newForm = [...formVal];
    newForm[i][e.target.name] = e.target.value;
    setFormVal(newForm)
}

  const handleSubmit=(e)=>{
    e.preventDefault();
    setShowval([...formVal])
//     if(!name){
//       showAlert(true,"danger","Please Enter Value");
//     } else if(name && isEditing){
//       setList(
//         list.map((item)=>{
//           if(item.id === editID){
//             return {...item,title:name}
//           }
//           return item;
//         })
//       )
//       setName("")
//       setEditID(null)
//       setIdEditing(false)
//       showAlert(true,"success","Value Changes")
//     }else{
//       showAlert(true,"success","Item Added to the List")
//       const newItem={id:new Date().getTime().toString(),title:name};
//       setList([...list,newItem])
//       setName("");
//     }
//   }
//   const showAlert=(show=false,type="",msg="")=>{
// setAlert({show,type,msg})
  }
  const removeItem=(id)=>{
    // showAlert(true,"danger","Item Removed")
    setList(list.filter((item)=>item.id!==id))
  }
  const editItem=(id)=>{
    const editItem=list.find((item)=>item.id===id)
    setIdEditing(true)
    setEditID(id)
    setName(editItem.title)
  }
  const clearList=()=>{
    // showAlert(true,"danger","Empty List")
    setList([])
  }
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        {/* {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />} */}
        <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Todo List using Local Storage
        </h3>
        <div className='mb-3 form'>
          {/* <input type='text'
           className='form-control'
            placeholder='e.g. Bread'
             onChange={(e) => setName(e.target.value)} 
             value={name} /> */}
              {formVal.map((item,i)=>(
                <div>
                    <label>First Name</label>
                    <input type='text' name="fName" value={item.fName || ""}   onChange={(e) => handleChange(e, i)}/>
                    <label>Last Name</label>
                    <input type='text' name="lName" value={item.lName || ""}   onChange={(e) => handleChange(e, i)}/>
                    <label>Email</label>
                    <input type='text' name="email" value={item.email || ""}   onChange={(e) => handleChange(e, i)}/>
                    <label>Phone</label>
                    <input type='number' name="phone" value={item.phone || ""} onChange={(e) => handleChange(e, i)}/>
                </div>
            ))}
             <button type='submit' className='btn btn-success'>
              {isEditing ? "Edit" : "Submit"}
             </button>
           
        </div>
      </form>
      {showVal.length>0 && (
        <div style={{marginTop:"2rem"}}>
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <div className='text-center'>
            <button className='btn btn-warning' onClick={clearList}>Clear Items</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;