

import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Button, Input, Label } from "reactstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import swal from "sweetalert";
import { LiaUserEditSolid } from "react-icons/lia";

export default function CrudOperation() {
  //=========== For Input Data ==============
  let [data, setData] = useState("");
  // ======For Store Data in Array============
  let [dataArr, setDataArr] = useState([]);
  // =======For Verifie Button==============
  let [verifie, setVerifie] = useState([]);
  // =======For DataArr CheckBox Button==============
  let [donechecked, setDonechecked] = useState([]);
  // =======For verifie CheckBox Button==============
  let [verifiechecked, setVerifiechecked] = useState([]);
  // ============For Edit Data==============
  let [editData, setEditData] = useState(null);
  // ==============For Search in DataArr=========== 
  let [search,setsearch]=useState("");
  let [searchTextClick, setSearchTextClick] = useState(""); 

  const searchData = () => {
    const allData = JSON.parse(localStorage.getItem("verifieArr") || "[]");

    setVerifiechecked(allData.filter((e) => e.includes(searchTextClick)));
  };

  const searchHandler = (e) => {
    setSearchTextClick(e?.target?.value);
    if (e?.target?.value?.length === 0) {
      const allData = JSON.parse(localStorage.getItem("verifieArr") || "[]");
      setVerifiechecked(allData);
    }
  };

  

  //========Use Effect ===========
  useEffect(() => {
    let jsonData=localStorage.getItem("dataArr") || "[]";
    let normalData=JSON.parse(jsonData);
    let data=normalData.filter((e)=> e.includes(search));
    setDataArr(data);  
}, [search]);

// =========Get Data On Input ============
  const getData = (ele) => {
    setData(ele.target.value);
  };

   // ============== Add Data in Not verifie Data================
   const addData = () => {
    if (data !== "") {
      if (!dataArr.includes(data)) {
        setDataArr([...dataArr, data]);
        setData("");
        const updatedDataArr = [...dataArr, data];
        localStorage.setItem("dataArr", JSON.stringify(updatedDataArr));
      } else {
        alert("Already Entered This Data");
      }
    } else {
      alert("Please fill some data");
    }
  };

  // =============Move data From  Verifie Data  to Not Verifie Data on Verifie Button========
  const VerifieHandle = (index) => {
    let verifiedData = dataArr[index];
    setVerifie([...verifie, verifiedData]);
    let filterData = dataArr.filter((e, i) => i !== index);
    setDataArr(filterData);
    localStorage.setItem("dataArr",JSON.stringify(filterData));
    localStorage.setItem("verifieArr",JSON.stringify([...verifie, verifiedData]));
  };

  // =============reaturn data on Verifie Data in Verifie Button========
  const ReturnHandle = (index) => {
    let ReturnData = verifie[index];
    let ReturnfilterData = verifie.filter((e, i) => i !== index);
    setVerifie(ReturnfilterData);
    setDataArr([...dataArr, ReturnData]);
    localStorage.setItem("verifieArr",JSON.stringify(ReturnfilterData));
    localStorage.setItem("dataArr",JSON.stringify([...dataArr, ReturnData]));
  };

 //================Delete Data in DataArr Data================

  // const deleteHandle = (index) => {
  //   swal({
  //     title: "Are you sure?",
  //     text: "Your Select Data has been Deleted?",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       let filterData = dataArr.filter((e, i) => i !== index);
  //       setDataArr(filterData);
  //       swal("Poof! Your Data has been Deleted!", {
  //         icon: "success",
  //       });
  //     } else {
  //       swal({
  //         icon: "info",
  //         text: "Your Data is safe!",
  //       });
  //     }
  //   });
  // };

  //================Remove Data in Verifie Data================

  // const verifiedeleteHandle = (index) => {
  //   let filterData = Verifie.filter((e, i) => i !== index);
  //   setVerifie(filterData);
  // };

  const verifiedeleteHandle = (index) => {
    swal({
      title: "Are you sure?",
      text: "Your Select Data has been Deleted?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let filterData = verifie.filter((e, i) => i !== index);
        setVerifie(filterData);
    localStorage.setItem("verifieArr",JSON.stringify(filterData));

        swal("Poof! Your Data has been Deleted!", {
          icon: "success",
        });
      } else {
        swal({
          icon: "info",
          text: "Your Data is safe!",
        });
      }
    });
  };

  // ================CheckBox Handler==============================
  const checkboxHandle = (index, e) => {
    if (e.target.checked) {
      setDonechecked([...donechecked, index]);
    } else {
      let filterData = donechecked.filter((i) => i !== index);
      setDonechecked(filterData);
    }
  };

  // ===============Submit Button Handler For checkBox in Not Verfied Data====================
 const submitHandler = () => {
    let panddingChecked = dataArr.filter((e, i) => {
      return donechecked.includes(i);
    });
    // console.log("panddingChecked",panddingChecked);
    let newverifie = [...verifie, ...panddingChecked];
    // console.log("newverifie",newverifie);
    let notCheckedData = dataArr.filter((e, i) => {
      return !donechecked.includes(i);
    });

    setVerifie(newverifie);
    setDataArr(notCheckedData);
    localStorage.setItem("verifieArr",JSON.stringify([...verifie, ...panddingChecked]));
    localStorage.setItem("dataArr",JSON.stringify(notCheckedData));

    setDonechecked([]);
  };

  // ============Verifie Select All CheckBoxHandler================
  const verifiecheckboxHandle = (index, e) => {
    if (e.target.checked) {
      setVerifiechecked([...verifiechecked, index]);
    } else {
      let filterData = verifiechecked.filter((i) => i !== index);
      setVerifiechecked(filterData);
    }
  };

  // ===============Submit Button Handler For checkBox in Verfied Data====================
  const submitHandlerVerifie = () => {
    let panddingCheckedVerifie =verifie.filter((e, i) => {
      return verifiechecked.includes(i);
    });
    // console.log("panddingCheckedVerifie",panddingCheckedVerifie);

    let newDataArr = [...dataArr,...panddingCheckedVerifie];
    // console.log("newDataArr",newDataArr);
    let notCheckedDataVerifie = verifie.filter((e, i) => {
      return !verifiechecked.includes(i);
    });
    // console.log("==>dataArr",dataArr);

    setDataArr(newDataArr);
    setVerifie(notCheckedDataVerifie);
    localStorage.setItem("verifieArr",JSON.stringify(notCheckedDataVerifie));
    localStorage.setItem("dataArr",JSON.stringify(newDataArr));
    setVerifiechecked([]);

  };

  // ===========For Update Data =================
  const updateHandle = (data, index) => {
    setEditData(index);
    setData(data);
  };

  const updatedata = () => {
    if (editData !== null) {
      dataArr[editData] = data;
      setDataArr([...dataArr]);
    localStorage.setItem("dataArr",JSON.stringify([...dataArr]));
      setData("");
      setEditData(null);
    }
  };

  // ===========Enter Data On Key Press "Enter Button"================
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  // =======================SelectAll For DataArr To Verifie==================
  const dataArrSelectAll = (e) => {
    if (e?.target?.checked) {
      let allSelectedData = dataArr.map((e, i) => i);
      // console.log("allSelectedData", allSelectedData);

      setDonechecked(allSelectedData);

    } else {
      setDonechecked([]);
    }
  };

  // =======================SelectAll For Verifie To DataArr================== 
  const verifieArrSelectAll = (e) => {
    if (e?.target?.checked) {
      let allVerifieSelected = verifie.map((e, i) => i);
      // console.log("allVerifieSelected", allVerifieSelected);
      setVerifiechecked(allVerifieSelected);
    } else {
      setVerifiechecked([]);
    }
  };

  // ===========================DataArr All Data Delete On Button====================
  // const dataArrDeleteAll = () => {
  //   swal({
  //     title: "Are you sure?",
  //     text: "Your Select Data has been Deleted?",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //      setDataArr([])
  //       swal("Poof! Your Data has been Deleted!", {
  //         icon: "success",
  //       });
  //     } else {  
  //       swal({
  //         icon: "info",
  //         text: "Your Data is safe!",
  //       });
  //     }
  //   });
  // };
  // ===========================Verifie All Data Delete On Button====================
const verifieDeleteAll = () => {
  swal({
    title: "Are you sure?",
    text: "Your Select Data has been Deleted?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      setVerifie([]);
    localStorage.setItem("verifieArr",JSON.stringify([]));
      
      swal("Poof! Your Data has been Deleted!", {
        icon: "success",
      });
    } else {  
      swal({
        icon: "info",
        text: "Your Data is safe!",
      });
    }
  });
};

// const searchVerifieData=(e)=>{
//   setsearch(e.target.value)
// }


  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className="d-flex justify-content-center w-50 mt-4 ">
        <Input
          style={{
            borderRadius: "5px 0px 0px 5px",
            border: "2px solid black",
          }}
          value={data}
          onChange={(e) => getData(e)}
          onKeyPress={handleEnter}
        />
        {!editData ? (
          <Button
            className="bg-danger border border-0 "
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={addData}
          >
            <FaPlus className="text-center border border-0" />
          </Button>
        ) : (
          <Button
            className="bg-danger border border-0 "
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
            onClick={() => updatedata()}
          >
            UPDATE
          </Button>
        )}
      </div>
      <div className="d-flex justify-content-center  gap-4 mt-4 w-100 px-5">
        <div className="border border-bottom-1  border-black px-3 py-2 w-50 ">
          <h4 className="px-3 text-center">Not Verified Data</h4>

          <div className="d-flex justify-content-center w-100 align-items-center ">
          <Input className="my-4 border border-1 border-black text-center w-75  "
           style={{
            borderRadius: "5px 0px 0px 5px",
            border: "2px solid black",
          }}
          placeholder="----Search Your Data----"
          onChange={(e)=>setsearch(e.target.value)}
          onKeyPress={handleEnter}/>
          <span className="bg-danger p-2 px-3 align-items-center d-flex" style={{
            borderRadius: "0px 5px 5px 0px",
            border: "0px solid black",
            height:"37px"
          }}>
          <FaSearch className="text-white"/>
          </span>
          </div>

          <Input
            type="checkbox"
            className="me-3 border border-black "
            checked={dataArr.length && dataArr.length === donechecked.length}
            onChange={(e) => dataArrSelectAll(e)}
          />
          <Label check>Select All</Label>
         

          <hr />

          {dataArr.map((e, i) => {
            return (
              <div
                key={i}
                className="d-flex justify-content-around align-items-center gap-3 h5"
              >
                <input
                  type="checkbox"
                  className="me-3"
                  checked={donechecked.includes(i)} // Check if the index is included in donechecked
                  onChange={(e) => checkboxHandle(i, e)} // Use onChange instead of onClick
                />
                <span>{i + 1}</span>
                <span className="w-100 text-center ">{e}</span>

                <span className="d-flex justify-content-center gap-3 ">
                  <LiaUserEditSolid onClick={() => updateHandle(e, i)} />
                  <MdVerified onClick={() => VerifieHandle(i)} className="text-success align-items-end "/>
                  {/* <AiTwotoneDelete onClick={() => deleteHandle(i)} /> */}
                </span>
              </div>
            );
          })}
          <Button
            className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase "
            onClick={(e) => submitHandler(e)}
          >
            SUBMIT
          </Button>
          <Button
            className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase "
            onClick={() => submitHandler ()}
          >
            MOVE TO ALL DATA
          </Button>
        </div>
        <div className="border border-1  border-black px-3 py-2 w-50">
          <h4 className="px-3 text-center"> Verified Data</h4>
          
          <div className="d-flex justify-content-center w-100 align-items-center ">
          <Input className="my-4 border border-1 border-black text-center w-75  "
           style={{
            borderRadius: "5px 0px 0px 5px",
            border: "2px solid black",
          }}
          placeholder="----Search Your Data----"
          onClick={()=>searchHandler()}/>
          <Button className="bg-danger p-2 px-3 align-items-center d-flex"
           style={{
            borderRadius: "0px 5px 5px 0px",
            border: "0px solid black",
            height:"37px"
          }}
          
          onClick={()=>searchData()}>
          <FaSearch className="text-white" />
          </Button>
          </div>

          <Input
            type="checkbox"
            className="me-3  border border-black"
            checked={verifie.length && verifie.length === verifiechecked.length}
            onChange={(e) => verifieArrSelectAll(e)}
          />
          <Label check>Select All</Label>

          <hr />

          {verifie.map((e, i) => {
            return (
              <li
                key={i}
                className="list-unstyled d-flex justify-content-around align-items-center gap-3 h5"
              >
                <input
                  type="checkbox"
                  className="me-3"
                  checked={verifiechecked.includes(i)} // Check if the index is included in donechecked
                  onChange={(e) => verifiecheckboxHandle  (i, e)} // Use onChange instead of onClick
                />
                <span>{i + 1}</span>
                <span className="w-100 text-center ">{e}</span>
                <span className="d-flex justify-content-center gap-3 ">
                  <MdVerified onClick={() => ReturnHandle(i)} className="text-success"/>
                  <AiTwotoneDelete onClick={() => verifiedeleteHandle(i)} />
                </span>
              </li>
            );
          })}
          <Button
            className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase "
            onClick={(e) => submitHandlerVerifie(e)}
          >
            SUBMIT
          </Button>
          <Button
            className="bg-danger w-100 border-0 mt-4 fw-bold text-uppercase "
            onClick={() => verifieDeleteAll()}
          >
            DELETE ALL DATA
          </Button>
        </div>
      </div>
    </div>
  );
}